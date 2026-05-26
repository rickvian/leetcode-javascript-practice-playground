/**
 * 300. Longest Increasing Subsequence
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * Difficulty: Medium
 *
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 */

/**
 * @param {number[]} nums
 * @return {number}
 *
 * Time:
 *   - Array.from init: O(n)
 *   - Nested loops (i from n-1 to 0, j from i+1 to n-1):
 *       worst case pairs = (n-1) + (n-2) + ... + 1 = n*(n-1)/2 => O(n^2)
 *   - Math.max(...lis): O(n)
 *   - Total: O(n) + O(n^2) + O(n) => O(n^2), lower terms dropped
 *   => O(n^2)
 *
 * Space:
 *   - lis array of length n: O(n)
 *   => O(n)
 */
var lengthOfLIS = function (nums) {
  // Each index starts with LIS length = 1 (the element itself is always a valid subsequence)
  // e.g. [1,2,4,3] => lis = [1,1,1,1]
  let lis = Array.from({ length: nums.length }, () => 1); // O(n)

  // Iterate right-to-left so lis[j] is already computed when we need it for lis[i]
  // e.g. process index 3 first, then 2 can use lis[3], then 1 can use lis[2]/lis[3], etc.
  for (let i = nums.length - 1; i > -1; i--) {
    // O(n)
    // Subsequences can skip elements, so any index after i could be the next pick.
    // Must scan all j > i to find the best valid extension — can't stop at j=i+1.
    // e.g. [3,1,2,10]: at i=0 (val=3), j=1(1) skip, j=2(2) skip, j=3(10) extend => lis[0]=2
    for (let j = i + 1; j < nums.length; j++) {
      // O(n) => nested = O(n^2) total
      if (nums[i] < nums[j]) {
        lis[i] = Math.max(lis[i], 1 + lis[j]);
      }
    }
  }

  // LIS can start at any index, so take the global max
  // e.g. [3,1,2] => lis=[1,2,1], answer is 2 (starts at index 1, not 0)
  return Math.max(...lis);
};
