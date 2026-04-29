# Plan v3 — Per-Problem Rules for Ralph

When a prd.yaml story says *"follow the plan-v3 batch rules"*, it means
this file. Background and the bigger picture: see
[`plan-v3.md`](./plan-v3.md).

## Hard rules

1. Expected outputs come from `oracle_run.mjs`. Never hand-written.
2. Inputs come from reading the oracle file. Never from generic type templates.
3. Commit a test file only if it passes against the oracle import.
4. If a problem can't produce a passing test, log it to
   `scripts/ralph/needs-oracle.json` and skip. Never emit wrong tests.

## Per-problem flow

For each problem in `scripts/ralph/batches/batch-NNN.json`:

1. **Skip if done.** Both `leetcode-playground/{id}-{slug}.js` and
   `tests/{id}-{slug}.test.js` exist → skip.

2. **No oracle?** `solutions-bank/{id}-{slug}.js` missing → log to
   `needs-oracle.json`, skip.

3. **Read the oracle file.** JSDoc tells you what the function does and
   what valid inputs are. Implementation shows the logic and edge cases.

4. **Pick 5–7 inputs:**
   - 2–3 normal cases that exercise the logic
   - 1 empty/minimum (`[]`, `""`, `0`, single element)
   - 1 boundary or adversarial (max, negative, repeated, off-by-one)

   Inputs must be valid for *this* problem. Follow rule 5 in the project
   root `CLAUDE.md`.

5. **Run the oracle for expected outputs:**

   ```bash
   node scripts/ralph/oracle_run.mjs \
     --bankPath solutions-bank/{id}-{slug}.js \
     --fnName {fnName} \
     --inputCategory {category} \
     --paramTypes '["{type1}", "{type2}"]' \
     --returnType "{returnType}" \
     --inputsJsonPath /tmp/{id}-inputs.json \
     --outputsJsonPath /tmp/{id}-outputs.json
   ```

   Pick `inputCategory` from the JSDoc:

   | In the JSDoc | inputCategory |
   |---|---|
   | `ListNode` param | `pointer-linked-list` (pass arrays) |
   | `TreeNode` param | `pointer-tree` (level-order, `null` for gaps) |
   | `GraphNode` / `Node` param | `pointer-graph` |
   | design tag / `classHeavy` | `design-class` (op sequences) |
   | in-place slugs (`rotate`, `remove-element`, `remove-duplicates`, `move-zeroes`) | `in-place-mutation` |
   | anything else | `plain-json` |

6. **Write the stub** at `leetcode-playground/{id}-{slug}.js`: JSDoc copied
   from oracle, body `// implement`, `export { fnName }`.

7. **Write the test** at `leetcode-playground/tests/{id}-{slug}.test.js`:
   import the stub (not the oracle), one `it(...)` per case, hardcoded
   expected values. Import `test_helpers.js` for pointer problems.

8. **Validate.** Run `run_test.mjs` with the import temporarily pointed at
   `solutions-bank/{id}-{slug}.js`. All tests must pass.
   - Fail → revise inputs, re-run oracle, retry once.
   - Still failing → delete both files, log to `needs-oracle.json`
     (`reason: "validation failed"`), skip.

9. **After the batch.** Commit: `feat [US-0XX] - Implement batch-NNN`.
