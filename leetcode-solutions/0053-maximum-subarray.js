/**
 * 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 * Difficulty: Medium
 *
 * Given an integer array `nums`, find the subarray with the largest sum,
 * and return its sum.
 */

/**
 * Approach 1: DP (in-place prefix accumulation)
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayDP = function(nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];
    }
  }

  return Math.max(...nums);
};

/**
 * Approach 2: Kadane's Algorithm
 * At each element, decide: extend the current subarray or restart from this element.
 * currSum = max(num, currSum + num)
 * If the running sum is a net negative, drop it and start fresh.
 *
 * Time: O(n) | Space: O(1)
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currSum = 0;
  let maxSum = nums[0];

  for (let num of nums) {
    currSum = Math.max(num, currSum + num);
    maxSum = Math.max(maxSum, currSum);
  }

  return maxSum;
};
