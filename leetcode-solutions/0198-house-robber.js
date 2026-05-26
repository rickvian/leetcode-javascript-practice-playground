/**
 * 198. House Robber
 * https://leetcode.com/problems/house-robber/
 * Difficulty: Medium
 *
 * You are a professional robber planning to rob houses along a street. Each house has a certain
 * amount of money stashed, the only constraint stopping you from robbing each of them is that
 * adjacent houses have security systems connected and it will automatically contact the police
 * if two adjacent houses were broken into on the same night.
 *
 * Given an integer array nums representing the amount of money of each house, return the maximum
 * amount of money you can rob tonight without alerting the police.
 */

/**
 * @param {number[]} nums
 * @return {number}
 *
 * @complexity
 * Approach 1 (rolling variables) — same asymptotic as approach 3, different naming:
 *   Time:  O(n) — one pass through nums
 *   Space: O(1) — two scalar variables
 *
 * Approach 2 (DP table):
 *   Time:  O(n) — one dp entry computed per house
 *   Space: O(n) — dp object holds one entry per house
 *
 * Approach 3 (2-pointer — clearest form):
 *   Time:  O(n) — one pass through nums
 *   Space: O(1) — two scalar variables
 */

// Approach 1: rolling variables (equivalent to approach 3, different names)
var rob = function (nums) {
  let previous = 0; // best amount 2 houses back
  let current = 0; // best amount 1 house back (running best)

  for (const n of nums) {
    const temp = previous; // save 2-back before shifting
    previous = current; // shift: 1-back becomes 2-back
    // rob this house (n + 2-back) or skip it (1-back = previous after shift)
    // e.g. nums=[2,7,9], at n=9: temp=2, previous=7 → max(9+2, 7) = 11
    current = Math.max(temp + n, previous);
  }

  return Math.max(current, previous); // current is always ≥ previous; safety guard
};

// Approach 2: DP table — explicitly builds optimal substructure bottom-up
var rob = function (nums) {
  if (nums.length === 0) return 0;

  // dp[i] = max money robbing any subset of houses 0..i
  // base cases: only one house → take it; two houses → take the larger
  // e.g. nums=[2,7,9] → dp={0:2, 1:7}
  let dp = {
    0: nums[0],
    1: Math.max(nums[0], nums[1]),
  };

  for (let i = 2; i < nums.length; i++) {
    // rob house i: nums[i] + best without adjacent (dp[i-2])
    // skip house i: best up to previous house (dp[i-1])
    // e.g. i=2, nums[2]=9 → max(9+2, 7) = 11
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  return dp[nums.length - 1];
};

// Approach 3: 2-pointer — O(1) space, clearest expression of the recurrence
var rob = function (nums) {
  let rob1 = 0; // best amount 2 houses back (initially nothing)
  let rob2 = 0; // best amount 1 house back (initially nothing)

  for (let n of nums) {
    // at each house: rob it (n + rob1) vs skip it (rob2)
    // e.g. nums=[2,7,9]: after 2→(0,2), after 7→(2,7), after 9→(7,11)
    let temp = Math.max(n + rob1, rob2);
    rob1 = rob2; // slide window forward
    rob2 = temp;
  }

  return rob2; // best achievable across all houses
};
