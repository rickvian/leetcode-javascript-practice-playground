# Plan v2: Oracle-Backed, Self-Expanding Ralph Loop → ~2,800 Test Scenarios

## Why v2

v1 (`plan.md`) successfully generated **hundreds of batch tasks** (US-005..US-N),
but the resulting test files had a structural defect: ralph **invented expected
outputs**. For many problems the return shape is non-trivial (sorted output?
any-valid-answer? index-of-first-occurrence?) and ralph guessed wrong for a
meaningful fraction of problems. Result: user solutions that pass on
leetcode.com get red-lit locally.

v2 fixes that **at the generator**, not at the stub:

> **For every test case, the expected output is produced by running an oracle
> — never by a model's guess.**

Secondary change: the prd.yaml grows itself. Instead of pre-generating ~145
batch stories, each window of 10 batch tasks ends with an **expand** task that
appends the next window. prd.yaml stays small and the template stays editable.

## Coverage Reality

Verified against `JoshCrozier/leetcode-javascript` (HEAD 2025-12-13):

- **2,786 solutions** under `solutions/NNNN-<slug>.js`, IDs 1–3623.
- Function names match LeetCode canonical exactly (`twoSum`, `reverseList`, …).
- **No exports** — files are plain `var fn = function (...) {...};` and stop.
- Against a 3,000-problem target we expect **~2,786 oracle-backed + ~214
  logged to `needs-oracle.json`**.

## The Oracle

### Single source of truth: `solutions-bank/`

No submodule. No adapter layer. All oracle solutions live in
`solutions-bank/NNNN-<slug>.js` committed to the repo.

US-007 populates the bank by cloning JoshCrozier to a scratch dir, reading
each file, regex-extracting the function name via
`/^var\s+(\w+)\s*=\s*function/m`, appending `\nexport { fnName };\n`, and
writing to `solutions-bank/NNNN-<slug>.js`. A `solutions-bank/package.json`
containing `{ "type": "module" }` is dropped alongside so Node honors the
appended exports.

Result: ~2,786 owned, committed, editable solution files.

### Missing-coverage handling

The ~214 problems JoshCrozier doesn't cover are logged to
`scripts/ralph/needs-oracle.json` during test generation and skipped. A future
story can add a scraper for problem-statement examples and have ralph write
solutions for the gap, validated against those examples. Out of scope for
this loop.

## Test-Generation Flow (plain language)

For each problem in a batch, `generate_tests.py` does this:

**1. Is there an oracle solution for this problem?**
Look in `solutions-bank/` for a file named after the problem.
- *Why*: We need a working solution to know what the correct answer is for any
  given input. If there is no oracle, log to `needs-oracle.json` and skip.

**2. What kind of problem is this?**
Read topic tags and slug. Array? Linked list? Tree? Graph? Design/class?
In-place mutation?
- *Why*: Different problem types need different plumbing. An array problem can
  take JSON input directly. A linked-list problem has to build a `ListNode`
  chain from an array before passing to the solution, then convert the
  returned `ListNode` back to an array so the test can compare. Without this
  step, pointer-problem tests produce garbage.

**3. Build an input suite.**
Inputs that hit edge cases: empty inputs, nulls, whitespace (strings), repeated
values, boundary sizes, off-by-one triggers, plus 2–3 normal examples.
- *Why*: These are the "questions" we quiz the oracle with. More edge cases =
  more bugs caught when the user implements.

**4. Ask the oracle for the correct answers.**
Run the `solutions-bank/` function on every input via `oracle_run.mjs`. Record
the return value, or `{threw, errorName, message}` if it throws.
- *Why*: This is the whole point of v2. In v1 ralph made up the answers. Now
  the answers come from executing real code.

**5. Write the blank stub.**
Create `leetcode-playground/NNNN-<slug>.js` with the problem description,
function signature, and `// implement` body.
- *Why*: This is what you solve as practice. Intentionally blank.

**6. Write the test file.**
Create `leetcode-playground/tests/NNNN-<slug>.test.js` that imports the stub
and uses the oracle-derived answers as expected values. Imports
`test_helpers.js` for pointer-based problems to build inputs and serialize
outputs.
- *Why*: When the user fills in the stub correctly, every test goes green.
  When the solution is buggy, the failing test points at the specific input
  that breaks it.

**7. Double-check the test file before committing.**
Temporarily swap the test's import to point at `solutions-bank/`, run vitest.
It must go green. If red, drop the failing case and retry up to twice. If
still red, delete the emitted files and log to `needs-oracle.json`.
- *Why*: This is the safety net that prevents v1-style "wrong expected
  output." Only test files that pass against the oracle get committed.

**8. If any problems couldn't pass step 7, log and skip.**
- *Why*: Better to leave a gap than to ship a broken test. Gaps can be filled
  manually later.

## Non-Deterministic Returns

Problems with multiple valid answers (e.g. "find any duplicate", "Shuffle
Array") use structural assertions instead of `.toEqual(...)`:

```javascript
// Two Sum — any pair summing to target is valid
const [i, j] = fn(nums, target);
expect(nums[i] + nums[j]).toBe(target);
expect(i).not.toBe(j);
```

Templates live in `scripts/ralph/assertion_templates.py`, keyed by topic-tag
and slug patterns. Starter set: `exact-equal` (default),
`any-valid-pair-summing-to-target`, `any-valid-index-of`,
`sorted-output-order-invariant`, `permutation-order-invariant`,
`any-valid-path`, `scenario-log-ops-and-returns`. Expect to add 3–5 more as
surface drives them.

## Pointer-Based Structures

`leetcode-playground/tests/__helpers__/test_helpers.js` exports `ListNode`,
`TreeNode`, `GraphNode` classes and converters:
`arrayToList` / `listToArray` / `arrayToTree` (level-order, null for gaps) /
`treeToArray` / `arrayToGraphNode`. Generator emits tests that build inputs
from array literals, call the function, serialize outputs back. All
assertions compare array-shaped values.

## Class-Heavy / Design Problems

Tests drive a scenario log:

```javascript
const ops = [['LRUCache', [2]], ['put', [1, 1]], ['put', [2, 2]], ['get', [1]]];
const expected = [null, null, null, 1];
```

Generator captures the op sequence + expected returns from the oracle (the
problem statement's example sequence) and emits a loop-based test.

## In-Place Mutation

Problems that modify input (rotate array, remove element, sort in-place)
assert on the mutated input after the call, not on the return. Detected via
slug keywords (`rotate-array`, `remove-element`, etc.).

## Self-Expanding prd.yaml

Window = **10 batch stories + 1 expand story**. prd.yaml has ~11 unpassed
tasks at any time.

```
... batch stories ...
US-N     Implement batch-M         ← passes: false
US-N+1   Expand prd window         ← meta-task
                                     when ralph hits this:
                                       1. reads manifest.expandedUpTo
                                       2. appends next 10 batch stories
                                       3. appends new expand story
                                       4. bumps expandedUpTo
                                       5. commits, marks self passes: true
```

When `manifest.expandedUpTo == manifest.batches.length`, the expand story
outputs `<promise>COMPLETE</promise>` and stops. `expand_prd.py` uses
`ruamel.yaml` round-trip (preserves formatting) and writes atomically
(tmp file + rename).

## File Layout (after all prep stories run)

```
solutions-bank/                             # 2,786 owned oracle files (committed)
  ├── package.json                          # { "type": "module" }
  └── NNNN-<slug>.js                        # source + appended export
scripts/ralph/
  ├── plan.md                               # v1 (kept for history)
  ├── plan-v2.md                            # THIS file
  ├── prd.yaml                              # self-expanding window
  ├── prompt.md                             # v2-updated
  ├── progress.txt                          # append-only
  ├── ralph.sh                              # unchanged
  ├── build_batches.py                      # augmented in US-009
  ├── import_oracle.py                      # US-007 one-shot
  ├── audit_v1_entries.py                   # US-008
  ├── assertion_templates.py                # US-010
  ├── generate_tests.py                     # US-010 (core)
  ├── oracle_run.mjs                        # US-010 (Node runner)
  ├── expand_prd.py                         # US-012
  ├── manifest.json                         # + expandedUpTo cursor
  ├── batches/
  │   └── batch-NNN.json                    # + oracleTier + oracleFnName
  ├── needs-oracle.json                     # missing-coverage backlog
  └── import-skipped.json                   # entries the importer couldn't parse
leetcode-playground/
  ├── NNNN-<slug>.js                        # // implement (blank stub)
  └── tests/
      ├── __helpers__/test_helpers.js       # US-010
      └── NNNN-<slug>.test.js               # oracle-derived expected outputs
```

## User-Story Sequence (6 prep stories, then self-expanding loop)

1. **US-007 Import JoshCrozier solutions into solutions-bank/** — one-shot
   importer: clone JoshCrozier to a scratch dir, append `export { fn }` to
   each source, write to `solutions-bank/`, drop `package.json`, commit.
2. **US-008 Purge v1-generated playground entries** — content-based
   classification (test files that do NOT import `solutions-bank/` are v1 and
   get purged). Must run before US-009 so purged IDs re-enter the pool.
3. **US-009 Augment build_batches.py with oracle tiering** — tag every
   problem with `oracleTier` (`bank` / `missing`) + `oracleFnName`.
4. **US-010 Write test_helpers.js + assertion_templates.py + generate_tests.py +
   oracle_run.mjs** — the core primitive. Must pass 5-category acceptance
   test (array / linked-list / tree / design-class / in-place).
5. **US-011 Update prompt.md** — ralph invokes `generate_tests.py` for batch
   stories, `expand_prd.py` for expand stories; explicit ban on hand-authoring
   expected outputs; new stop condition.
6. **US-012 Write expand_prd.py and seed first batch window** — seeds
   US-013..US-022 (batch-001..batch-010) + US-023 (next expand).

After US-012 runs, ralph continues on batch stories and expand stories in a
single self-propagating loop.

### Batch-story template (inside expand_prd.py)

- Invoke `python3 scripts/ralph/generate_tests.py --batch batch-NNN`.
- Do NOT hand-author expected outputs. Do NOT hand-author test cases.
- Verify outputs: `leetcode-playground/<id>-<slug>.js` and matching test file
  for every `oracleTier: "bank"` problem in the batch.
- `npx vitest run leetcode-playground/tests/<id>-<slug>.test.js ...` — red
  assertions are expected (stubs are blank); files must load.
- Commit `feat [US-0XX] - Implement batch-NNN`.

### Expand-story template (inside expand_prd.py)

- Invoke `python3 scripts/ralph/expand_prd.py`.
- Verify prd.yaml grew by 11 stories OR that the sentinel was emitted.
- Commit `chore [US-0XX] - Expand prd window`.

## Decisions (final)

| # | Decision | Value |
|---|---|---|
| 1 | Oracle source | JoshCrozier/leetcode-javascript (2,786 problems), imported into solutions-bank/ |
| 2 | Oracle storage | Committed files in solutions-bank/. No submodule. No adapter layer. |
| 3 | Test expected outputs | Always derived by executing the oracle at generation time |
| 4 | Test file imports | Stub ONLY. No fallback. |
| 5 | Oracle validation | Generator-side, via temporary import swap during generation |
| 6 | Stub body | Plain `// implement`. No markers. |
| 7 | Window size | 10 batch stories + 1 expand story |
| 8 | Batch size | 20 problems per batch (unchanged) |
| 9 | Missing-oracle problems | Logged to needs-oracle.json, skipped. Out of scope this iteration. |
| 10 | Pointer structures | test_helpers.js round-trips via array literals |
| 11 | Non-deterministic problems | Structural assertions from assertion_templates.py |
| 12 | v1 purge detection | Content-based (imports of `solutions-bank/`), not git-hash |
| 13 | Purge ordering | US-008, before tiering |
| 14 | Branch | `feature/populate-scenarios-v2` |

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| JoshCrozier solution has bugs | solutions-bank/ files are committed and editable — any known-wrong entry gets a hand-patched commit |
| Pointer-based serialization edge cases | test_helpers.js covers LeetCode's standard array conventions (null-for-gaps in trees, level-order, etc.). Problems whose input shape doesn't fit skip to needs-oracle.json. |
| Assertion-template gaps | Expect 3–5 additions over the first batches. Default is `exact-equal` when no template matches; sometimes wrong but caught by generator-side validation. |
| `npx vitest` cold-start cost | Batch vitest invocations per-batch (one run covers all new files) rather than per-problem. |
| Self-expand writes malformed YAML | ruamel.yaml round-trip + atomic write + post-write js-yaml parse check |
| Expand runs forever | Guarded: if `expandedUpTo == batches.length`, emit COMPLETE sentinel and do not append |
| 214 problems without oracle coverage | Logged to `needs-oracle.json`. First pass reaches ~2,786 scenarios; final ~214 are a separate future workstream. |

## Time Budget

- ~2,786 problems ÷ 20 per batch = **~140 batch stories**
- Per batch: ~3–7 minutes wall-clock (oracle run + test emission + vitest + commit)
- Total loop time: **~8–15 hours** of batch work; a few minutes for prep stories
- Expect to tune after the first 3–4 batches complete

## Acceptance (signed off)

- [x] Oracle source: JoshCrozier, imported into solutions-bank/
- [x] solutions-bank stays (no submodule, no separate adapter layer)
- [x] v1 entries: purge
- [x] Window size: 10+1
- [x] Tests import stub only (no fallback) — generator validates against oracle
- [ ] 214 missing problems stay in needs-oracle.json this iteration (Option B
      scraper is a future story when you want to chase the last bit)

On sign-off: US-007..US-012 landed on `feature/populate-scenarios-v2`. Kick
off via `./scripts/ralph/ralph.sh <iterations>` whenever ready. First
iteration runs US-007 (import).
