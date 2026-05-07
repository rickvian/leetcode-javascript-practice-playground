# Claude Code Guidelines

## Important Note

LeetCode playground repo. Provide test cases only with blank implementation (`// implement`) unless solution code explicitly requested.

## Module Type

Project is ESM (`"type": "module"` in `package.json`). Use `import`/`export` everywhere — never `require`/`module.exports`. Jest handles ESM resolution automatically.

Test cases: follow `prd-test-case-guideline.md`. Generate JS placeholder file if missing.

## Creating New Problems

### File Structure

```
leetcode-playground/
├── NNNN-problem-name.js          # Problem solution
└── tests/
    └── NNNN-problem-name.test.js  # Jest test file
```

Naming: 4-digit problem number + kebab-case name (e.g., `0001-two-sum`).

### Problem File Format

**File:** `leetcode-playground/NNNN-problem-name.js`

```javascript
/**
 * Problem description from LeetCode (1-2 sentences)
 *
 * https://leetcode.com/problems/problem-slug/description/
 *
 * @param {type} paramName - Description
 * @return {type}
 *
 * @constraints
 * - constraint 1
 * - constraint 2
 */
var functionName = function(param1, param2) {
    // implement
};

export { functionName }
```

JSDoc must include LeetCode URL and `@constraints` copied verbatim. Function name in camelCase.

### Test File Format

**File:** `leetcode-playground/tests/NNNN-problem-name.test.js`

```javascript
import { functionName } from '../NNNN-problem-name';

describe('NNNN-problem-name', () => {
    it('should handle test case 1', () => {
        expect(functionName(input1)).toEqual(null); // placeholder — filled by verification workflow
    });

    it('should handle test case 2', () => {
        expect(functionName(input2)).toEqual(null); // placeholder — filled by verification workflow
    });
});
```

At least 2-3 meaningful test cases with descriptive names. `describe` block name matches problem filename.

### Steps

1. Note problem details from LeetCode (number, name, description, types)
2. Create problem file with JSDoc + LeetCode URL
3. Create test file — ALL `expect(...)` use `.toEqual(null)`. **No real expected values yet, no exceptions.**
4. Run verification workflow below to fill real values

## Verifying Test Correctness with Reference Solutions

**Only proof a test file is correct: `npm run test` with reference solution injected returns 0 failures. Nothing else counts — not reasoning, not manual tracing, not "obvious" cases.**

**When `leetcode-solutions/NNNN-*.js` exists, this workflow is required before committing. No skipping.**

### Workflow

1. **Inject reference solution**: Copy from `leetcode-solutions/` into `leetcode-playground/`, append `export { functionName }` (source files have no exports)
2. **Run tests**: `npm run test -- NNNN-problem-name.test.js` — read actual values from failure messages
3. **Update assertions**: Replace each placeholder with value reference solution returned (shown as `expected X to equal null`)
4. **Re-run**: Must show **0 failures**. If any still fail, repeat step 3.
5. **Restore stub**: `git checkout -- leetcode-playground/NNNN-problem-name.js`
6. **Verify restore**: `grep "// implement" leetcode-playground/NNNN-problem-name.js` must match

**Why step 4 is the guarantee**: if reference solution passes every assertion, every expected value is provably correct.

**Why `git checkout` not `cp`**: git is authoritative backup, always available, needs no prior backup step.

### Special cases

- Josh's filename may differ (e.g., `0028-implement-strstr.js` vs `0028-find-the-index-of-the-first-occurrence-in-a-string.js`) — LeetCode official name is source of truth; copy Josh's file explicitly to match playground filename
- Some solutions reference undeclared classes (e.g., `ListNode` in 0025) — append class definition before export
- Test inputs must respect `@constraints` (e.g., remove empty-array tests when `1 ≤ nums.length`)
- Order-independent results (e.g., arrays of indices): sort before comparing

## Multiple Solution Approaches

When a problem has more than one approach, suffix both files with `-[approach]` (e.g., `0001-two-sum-brute-force.js`, `0001-two-sum-hashmap.js` + matching test files).
