# Plan: Populate 3000 LeetCode Test Scenarios via Ralph Loop

## Goal

Reach **3000 total problems** in `leetcode-playground/` — each with a JS stub
(`NNNN-<slug>.js`) and a comprehensive test file
(`tests/NNNN-<slug>.test.js`). Ralph loops through `prd.yaml`, implementing one
user story (= one batch of problems) per iteration until all batches pass.

## Source Data Inventory

Source file: `fetch-scrap-leetcode-problem/responseArchive/full_leetcode_problems_response.json`

| Metric                        | Count |
|-------------------------------|-------|
| Total problems in source      | 3865  |
| Already implemented           | 103   |
| Not-yet-implemented pool      | 3762  |
| Target to add (to reach 3000) | 2897  |

Difficulty split (all, from source): EASY 930 / MEDIUM 2022 / HARD 913.

Premium (`paidOnly: true`) problems are **included** — we generate stubs +
tests for the URL/title regardless. The 2897 target is drawn from the full
pool in ascending `questionFrontendId` order.

Each problem record provides: `questionFrontendId`, `titleSlug`, `title`,
`difficulty`, `topicTags[]`, `paidOnly`, `acRate`.

## Strategy

Two-phase ralph workflow:

### Phase 1 — Prep story (single story, runs first)

- **US-002: Generate batch manifest**
  - Write `scripts/ralph/build_batches.py`
  - Script responsibilities:
    1. Load the 3MB source JSON.
    2. Exclude problem IDs already present in `leetcode-playground/` (glob `NNNN-*.js`).
    3. Sort ascending by `int(questionFrontendId)`.
    4. Cap to the remaining count needed to reach 3000 total.
    5. Split into fixed-size batches and write
       `scripts/ralph/batches/batch-NNN.json`, each containing:
       ```json
       {
         "batchId": "batch-011",
         "problems": [
           {
             "id": "0123",
             "slug": "word-ladder",
             "title": "Word Ladder",
             "difficulty": "HARD",
             "tags": ["Breadth-First Search","Hash Table","String"]
           }
         ]
       }
       ```
  - Acceptance: `scripts/ralph/batches/` contains batch-001.json ..
    batch-NNN.json; a `manifest.json` index lists them in order; total problems
    across batches equals the remaining count to reach 3000.

### Phase 2 — Batch stories (one per batch)

Each story `US-0XX: Implement batch-NNN` has identical shape, differing only in
which batch file it targets. Acceptance criteria template:

- For **every** entry in `scripts/ralph/batches/batch-NNN.json`:
  - Create `leetcode-playground/<id>-<slug>.js`
    - JSDoc header: short problem description (1–2 sentences),
      `https://leetcode.com/problems/<slug>/description/`, `@param`, `@return`.
    - Named function in camelCase, exported via `export { fn }`.
    - Body: `// implement` (leave blank per CLAUDE.md).
  - Create `leetcode-playground/tests/<id>-<slug>.test.js`
    - ES Module import from `../<id>-<slug>`.
    - `describe('<id>-<slug>', () => { ... })`.
    - 5–7 meaningful `it()` cases that **must include** the adversarial edge
      cases from CLAUDE.md rule 5: empty/min input, null/undefined,
      whitespace (for string problems), repetitive data, range-limit
      boundaries, cases designed to trigger off-by-one errors.
  - For LinkedList / Tree / Graph problems, export the helper class
    (`ListNode`, `TreeNode`, etc.) alongside the solution so tests can build
    inputs — matches the pattern already established in progress.txt.
- Run `npm test` — test files must load and execute (stubs failing assertions
  is expected and acceptable; the point is valid syntax + imports + runnable
  test harness).
- Commit message follows ralph's existing format: `feat: [US-0XX] - Implement batch-NNN`.

## Decisions (locked in)

| # | Decision | Value |
|---|----------|-------|
| 1 | Batch size | **20 problems per batch** → ~145 batch stories |
| 2 | Problem pool | **All** — every problem in the source, premium included, all difficulties |
| 3 | `branchName` in prd.yaml | `feature/populate-scenarios` (current branch) |
| 4 | Typo file `0042-traping-rain-water.js` | Rename to `0042-trapping-rain-water.js` as its own story before batch work begins |
| 5 | Selection order | Ascending by `questionFrontendId` (reproducible, resumable) |
| 6 | Commit format | `feat: [US-0XX] - <title>` (matches existing ralph convention) |
| 7 | Test runner | **vitest** (not Jest — CLAUDE.md is stale but APIs are compatible) |
| 8 | Test scope per iteration | Only the newly-added test files: `npx vitest run leetcode-playground/tests/<id>-<slug>.test.js ...`. Do **not** run the full suite each iteration (grows to 3000 files). |
| 9 | Idempotency | Batch stories must `skip` creation for any problem where the solution file already exists. Prep script is re-runnable (existing batches overwritten). |
| 10 | Red stubs are OK | All stub tests will fail assertions. Ralph commits anyway — that is the intended state. Each batch story's `notes` field makes this explicit so ralph does not get stuck on red tests. |
| 11 | `classHeavy` detection | Slug starts with `design-` OR title/slug contains any of: `cache, stack, queue, heap, trie, iterator, serialize, randomized, median-finder, lfu, lru, union-find`. Max 2 per batch; overflow pushed forward. |
| 12 | Final count tolerance | Target 3000 exact if possible; accept ±20 (one batch of slack) rather than spending effort on perfect alignment. |

## File Layout (after prep story runs)

```
scripts/ralph/
├── plan.md                      # this file
├── prd.yaml                     # US-002 prep + US-003..US-N batch stories
├── prompt.md                    # ralph iteration instructions (unchanged)
├── progress.txt                 # ralph appends learnings (unchanged)
├── ralph.sh                     # loop runner (unchanged)
├── build_batches.py             # written in prep story
├── manifest.json                # index of all batch files + metadata
└── batches/
    ├── batch-001.json
    ├── batch-002.json
    └── ...
```

## prd.yaml Shape

```yaml
branchName: feature/populate-scenarios
userStories:
  - id: US-001
    title: Setup node project with vitest
    acceptanceCriteria: [...]
    priority: 1
    passes: true
    notes: ""

  - id: US-002
    title: Patch prompt.md for this project (remove AGENTS.md + typecheck references)
    acceptanceCriteria:
      - Remove the AGENTS.md update step from scripts/ralph/prompt.md (file does not exist in this repo)
      - Replace "Run typecheck and tests" with "Run tests scoped to changed files via npx vitest run <paths>" (no typecheck script exists)
      - Keep all other steps intact
    priority: 2
    passes: false
    notes: "Must run first so subsequent iterations follow a prompt that matches this repo."

  - id: US-003
    title: Rename 0042 typo (traping -> trapping)
    acceptanceCriteria:
      - Rename leetcode-playground/0042-traping-rain-water.js to 0042-trapping-rain-water.js
      - Rename leetcode-playground/tests/0042-traping-rain-water.test.js to 0042-trapping-rain-water.test.js
      - Update import path inside the renamed test file
      - npx vitest run leetcode-playground/tests/0042-trapping-rain-water.test.js loads the file without error
    priority: 3
    passes: false
    notes: "Must run before US-004 so prep script sees the corrected filename."

  - id: US-004
    title: Generate batch manifest for 3000-scenario target
    acceptanceCriteria:
      - Create scripts/ralph/build_batches.py
      - Script excludes problems already in leetcode-playground/ (match by 4-digit ID prefix); premium/paid problems are included
      - Caps total so existing + new lands within 3000 +/- 20 scenarios
      - Tags classHeavy problems (slug starts with design- OR title/slug contains cache/stack/queue/heap/trie/iterator/serialize/randomized/median-finder/lfu/lru/union-find)
      - Enforces max 2 classHeavy problems per batch by overflowing extras into later batches
      - Writes scripts/ralph/batches/batch-NNN.json with 20 problems each
      - Writes scripts/ralph/manifest.json index listing all batches and total count
      - Script is idempotent (safe to re-run; overwrites existing batch files)
    priority: 4
    passes: false
    notes: "Prerequisite for all batch stories. Do NOT implement any problems in this story."

  - id: US-005
    title: Implement batch-001
    acceptanceCriteria:
      - For each problem in scripts/ralph/batches/batch-001.json:
      - Skip if leetcode-playground/<id>-<slug>.js already exists
      - Create leetcode-playground/<id>-<slug>.js with JSDoc (problem description + LeetCode URL + @param + @return) + blank stub + export
      - Create leetcode-playground/tests/<id>-<slug>.test.js with 5-7 cases including adversarial edge cases (see CLAUDE.md rule 5)
      - Export helper classes (ListNode/TreeNode/GraphNode) where applicable
      - Guard undefined stub returns with `if (result !== undefined)`
      - Run npx vitest run on the new test files only (not the full suite); files must load without import/syntax errors
    priority: 5
    passes: false
    notes: "Stubs intentionally fail assertions - red test output is the expected state and does NOT block the commit. Do not run the full test suite; scope to new files only."

  # US-006 .. US-N : same shape, each pointing at batch-002 .. batch-NNN
```

## How Ralph Consumes This

Unchanged from existing loop:
1. `./scripts/ralph/ralph.sh 25` (or more iterations — can also be run in small chunks over many sessions; long-lived).
2. Each iteration: ralph reads `prd.yaml`, picks lowest-priority story where
   `passes: false`, implements only that story, runs scoped tests, commits, flips
   `passes: true`, appends to `progress.txt`.
3. Iteration 1 runs US-002 (fix ralph's own prompt).
4. Iteration 2 runs US-003 (typo rename).
5. Iteration 3 runs US-004 (prep / generates batches).
6. Iterations 4..N each burn down one batch story.
7. `<promise>COMPLETE</promise>` fires when the last batch passes.

Total loop budget at 20/batch: ~148 iterations (1 prompt patch + 1 typo + 1 prep + ~145 batches).

Expected side-effects over the full run:
- ~148 commits on `feature/populate-scenarios` — squash at merge time if you want a clean history.
- `progress.txt` grows linearly; fine for a long-term project, no cleanup required.
- `leetcode-playground/` grows from 104 to ~3000 solution files and matching test files.

## Risks & Decided Mitigations

Every risk below maps to a concrete action baked into the plan — no open items.

| Risk | Decision / Action |
|------|-------------------|
| Ralph runs out of context mid-batch on class-heavy problems (LFU Cache, Serialize BST, etc.) | Prep script tags problems whose slug contains `"design"` or title contains `"serialize"` / `"iterator"` as `classHeavy: true`. If a batch has > 2 classHeavy entries, the script moves overflow to the next batch. Deterministic, no human review needed. |
| Tests on blank stubs throw `TypeError` because return is `undefined` | Adopt the `if (result !== undefined)` guard pattern already in `progress.txt`. Enforce in the batch-story acceptance criteria. |
| Source JSON is 3 MB and slow to reload | Prep story reads it once; per-batch JSON files are tiny (~1–2 KB). Batch stories never touch the source file. |
| Interrupted run loses progress | Manifest is sorted by ID and batches are numbered; re-running ralph picks the next `passes: false` story. |
| Existing typo file `0042-traping-rain-water.js` | **US-003** renames the solution file + test file + test-file import to `0042-trapping-rain-water.js`. Runs before batch work so the prep script sees the corrected filename. |

## Story List (final shape)

1. **US-001** Setup node project with jest — already `passes: true`.
2. **US-002** Patch `prompt.md` for this project — remove the `AGENTS.md` and `typecheck` references (neither exists). Replace step 6 with `Run tests scoped to changed files: npx vitest run <paths>`. Replace step 7 with `Append learnings to scripts/ralph/progress.txt`. Commit the updated prompt.
3. **US-003** Rename `0042-traping-rain-water` → `0042-trapping-rain-water` (solution file, test file, test-file import line). Verify the test file still loads via `npx vitest run leetcode-playground/tests/0042-trapping-rain-water.test.js`.
4. **US-004** Generate batch manifest — write `scripts/ralph/build_batches.py`, produce `scripts/ralph/manifest.json` and `scripts/ralph/batches/batch-NNN.json` (20 problems each, classHeavy overflow rule applied).
5. **US-005 … US-N** One story per batch. Acceptance criteria per batch-story template below.

Batch-story acceptance criteria (identical across all batch stories):
- For every problem in `scripts/ralph/batches/batch-NNN.json`:
  - **Skip if** `leetcode-playground/<id>-<slug>.js` already exists (idempotent resume).
  - Create `leetcode-playground/<id>-<slug>.js` with JSDoc (problem description, LeetCode URL, `@param`, `@return`), named camelCase function, `// implement` body, `export { fn }`.
  - Create `leetcode-playground/tests/<id>-<slug>.test.js` with ES Module import, `describe('<id>-<slug>', …)`, 5–7 `it()` cases covering the adversarial edge cases from CLAUDE.md rule 5.
  - For LinkedList / Tree / Graph problems, export the helper class alongside the solution (matches existing `progress.txt` pattern).
  - Guard assertions that depend on a real return value with `if (result !== undefined)`.
- Run **only the new test files**: `npx vitest run leetcode-playground/tests/<id>-<slug>.test.js …`. They must load without import/syntax errors. **Red assertion failures are the expected terminal state for stubs and do not block the commit.**
- Commit with `feat: [US-0XX] - Implement batch-NNN` even if assertions are red.
