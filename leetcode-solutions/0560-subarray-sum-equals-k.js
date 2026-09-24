/**
 * 560. Subarray Sum Equals K
 * https://leetcode.com/problems/subarray-sum-equals-k/
 * Difficulty: Medium
 *
 * Given an array of integers nums and an integer k, return the total number of subarrays
 * whose sum equals to k.
 *
 * A subarray is a contiguous non-empty sequence of elements within an array.
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySumBruteForce = function (nums, k) {
  // brute force approach

  // time complexity O(n^2)
  // space complexity O(n)

  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let i = j; j < nums.length; j++) {
      sum += nums[j];
      if (sum === k) res++;
    }
  }

  return res;
};

var subarraySumPrefixSumApproach = function (nums, k) {
  let result = 0;
  let currSum = 0;
  let prefixSum = new Map();

  prefixSum.set(0, 1); // with prefix 0 represents 1 way of subArray to chop the current array.

  for (let num of nums) {
    // we keep track of sum so far
    currSum += num;

    // so we want to know if we hit the k as target, or there are diffs
    let diff = currSum - k;
    // i want to see if we chop the current running window, so we can result in K.
    // if we have the prefixSum.get(diff), meaning there are ways to chop with x time to result the subarray total of K

    prefixSum.get(diff); // how many times our prefixSum with diff occured before?
    // that represent the ways we can chop the current window,
    // apply that X time to chop the current window, we will have

    // X variants of sub array that total to K.
    result += prefixSum.get(diff) || 0;

    // now we record currSum as the prefixSum occured again.
    prefixSum.set(currSum, (prefixSum.get(currSum) || 0) + 1);
  }

  return result;
};

var subarraySum = subarraySumPrefixSumApproach;
