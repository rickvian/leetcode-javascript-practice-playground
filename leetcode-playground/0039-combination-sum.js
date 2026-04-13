/**
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target.
 * You may return the combinations in any order.
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * Time Complexity: O(N^(T/M))
 *   - N = number of candidates
 *   - T = target sum
 *   - M = minimum value in candidates
 *   - Explanation: We explore a decision tree where each node has up to N branching paths.
 *     The tree depth is bounded by T/M (dividing target by smallest candidate until target is reached).
 *     Since candidates can be reused, we may explore many paths in worst case.
 *     Pruning (total > target) reduces branches but doesn't change worst-case complexity.
 *
 * Space Complexity: O(T/M) + Output
 *   - Recursion call stack: O(T/M) maximum depth
 *   - Output: O(# of combinations × avg combination length) - stores all valid combinations
 *   - Can be exponential in worst case (e.g., candidates=[1], target=40)
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = []

  function dfs(i, currentCombinationSum, total) {
    // Base case: found a valid combination
    if (total === target) {
      result.push([...currentCombinationSum]);
      return
    }

    // Base case: impossible to continue (exhausted candidates or exceeded target)
    // Pruning: early termination when total > target reduces tree branches
    if (i >= candidates.length || total > target) {
      return
    }

    // Branch 1: Include current candidate[i] (reuse allowed, so index stays at i)
    // This is why we can use same number multiple times
    currentCombinationSum.push(candidates[i])
    dfs(i, currentCombinationSum, total + candidates[i]);

    // Branch 2: Skip current candidate[i] and move to next (i+1)
    // Backtrack: remove the candidate we just added
    currentCombinationSum.pop()
    dfs(i + 1, currentCombinationSum, total)
  }

  dfs(0, [], 0);

  return result
};

export { combinationSum };
