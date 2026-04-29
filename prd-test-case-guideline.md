# Test Case Guideline for LeetCode Problems

The constraints for each problem are listed directly in the stub file's JSDoc under `@constraints`. Use them as the primary source — no need to visit the problem page just to find bounds. The LeetCode URL is still there if you need full problem details.

## Stub File: Constraints Format

When creating or updating a stub implementation, always add a `@constraints` block to the JSDoc copied verbatim from LeetCode:

```javascript
/**
 * Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 *
 * @constraints
 * - nums1.length == m
 * - nums2.length == n
 * - 0 <= m <= 1000
 * - 0 <= n <= 1000
 * - 1 <= m + n <= 2000
 * - -10^6 <= nums1[i], nums2[i] <= 10^6
 */
```

This makes every bound immediately visible when writing tests without switching tabs.

## Required Coverage

### 1. Official Examples
Always include every example from the LeetCode problem statement verbatim. These are the baseline sanity checks.

### 2. Constraint-Derived Cases
Read the constraints block and derive cases from each bound:
- If a value can be `0` or empty, test it.
- If a value can be `1` (minimum non-empty), test it.
- If the constraint allows negative numbers, test with negatives.
- If two inputs can have very different sizes (e.g., `0 <= m <= 1000`, `0 <= n <= 1000`), test heavily unequal lengths.
- Test at the upper constraint boundary when behavior may differ (e.g., max value, max length).

### 3. Problem-Specific Structural Cases
Think about what makes this problem hard and write cases that expose those scenarios:
- **Sorted arrays**: test when all of one array is less than the other, and when they perfectly interleave.
- **Trees**: test null root, single node, left-skewed, right-skewed, and complete trees.
- **Linked lists**: test single node, two nodes, even/odd length.
- **Strings**: test empty string, single character, all same characters, mixed case.
- **Matrices**: test 1×1, single row, single column, square vs rectangular.
- **Graphs**: test disconnected nodes, cycles, single node with no edges.

### 4. Adversarial Cases
Write cases specifically designed to break naive implementations:
- Off-by-one: inputs where the answer sits at index 0 or the last index.
- Duplicates: repeated values within one input or across both inputs.
- All-same values: every element identical.
- Negative and zero values mixed with positives.
- Cases where the result requires averaging two elements (even vs odd total length).

## Assertions

- Use `toBe` for primitives (numbers, booleans, strings).
- Use `toEqual` for arrays and objects (deep equality).
- Use `toBeCloseTo(value, 5)` for floating point results.
- For problems returning arrays where order does not matter, sort both sides before comparing.

## What to Avoid

- Do not write more than one test that covers the exact same logical scenario.
- Do not test implementation details — only test inputs and outputs.
- Do not skip the constraint section. Every bound is a potential edge case.
- Do not assume the happy path is enough. LeetCode judges specifically target constraint boundaries.
