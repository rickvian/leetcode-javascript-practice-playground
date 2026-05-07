/**
 * Given an integer array nums of unique elements, return all possible
 * subsets (the power set).
 *
 * The solution set must not contain duplicate subsets. Return the solution in any order.
 *
 * https://leetcode.com/problems/subsets/
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let result = [];
  let subset = [];

  function dfs(i) {
    if (i >= nums.length) {
      result.push([...subset]); // base case, push to the result
      return;
    }
    // decision to add i into the subset
    subset.push(nums[i]);
    dfs(i + 1); // explore depth

    // decision NOT to add i to the subset
    subset.pop();
    dfs(i + 1); // explore depth, but without including the current nums as subset;
  }

  dfs(0);

  return result;
};

export { subsets };
