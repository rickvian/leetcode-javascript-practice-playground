/**
 * Find the subarray with the largest sum using Kadane's algorithm.
 *
 * https://leetcode.com/problems/maximum-subarray/description/
 * @param {number[]} nums - Array of integers
 * @return {number} Maximum sum of any contiguous subarray
 */
var maxSubArray = function (nums) {
  let currSum = 0;
  let maxSum = nums[0];

  for (let num of nums) {
    currSum = Math.max(num, currSum + num); // does num contributes to sum or not?

    maxSum = Math.max(maxSum, currSum); // check if new record broken?
  }

  return maxSum;
};

export { maxSubArray };
