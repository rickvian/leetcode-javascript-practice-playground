/**
 * 152. Maximum Product Subarray
 * https://leetcode.com/problems/maximum-product-subarray/
 * Difficulty: Medium
 *
 * Given an integer array nums, find the contiguous subarray within an array
 * (containing at least one number) which has the largest product.
 */

/**
 * @param {number[]} nums
 * @return {number}
 * @complexity
 * Time: O(n) — single pass with constant work per number
 * Space: O(1) — only a fixed number of variables
 */
var maxProduct = function (nums) {
  // The first number is a valid one-element subarray, so it seeds every state.
  // Starting from 1 would incorrectly favor 1 for an input such as [-2].
  let largestProduct = nums[0];
  let largestEndingHere = nums[0];
  let smallestEndingHere = nums[0];

  for (const number of nums.slice(1)) {
    // A negative number can turn the smallest product into the largest one.
    const productWithLargest = number * largestEndingHere;
    const productWithSmallest = number * smallestEndingHere;

    largestEndingHere = Math.max(number, productWithLargest, productWithSmallest);
    smallestEndingHere = Math.min(number, productWithLargest, productWithSmallest);

    largestProduct = Math.max(largestProduct, largestEndingHere);
  }

  return largestProduct;
};

// alternative approach
/**
 * @complexity
 * Time: O(n) — array creation O(n) + prefix loop O(n) + suffix loop O(n) + Math.max spread O(n) = O(4n) → O(n)
 * Space: O(n) — prefixProduct O(n) + suffixProduct O(n) = O(2n) → O(n)
 */
var maxProduct = function (nums) {
  let n = nums.length;
  let prefixProduct = new Array(n);
  let suffixProduct = new Array(n);

  // Any max-product subarray is either a prefix or a suffix of some zero-free segment
  // So scan both directions; a zero resets the running product to 1 (|| 1 trick)
  // e.g. [2, 3, 0, 4] → prefix=[2, 6, 0, 4], suffix=[4, 0, 4, 4] → max=6 ✓
  prefixProduct[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixProduct[i] = (prefixProduct[i - 1] || 1) * nums[i]; // || 1 resets at zero
  }

  suffixProduct[n - 1] = nums[n - 1];
  for (let j = n - 2; j > -1; j--) {
    suffixProduct[j] = (suffixProduct[j + 1] || 1) * nums[j]; // || 1 resets at zero
  }

  // Answer is whichever endpoint (prefix or suffix) had the best product
  return Math.max(...prefixProduct, ...suffixProduct);
};

var wordBreak = function (s, wordDict) {
  // ababab
  // ["ab"]
  // true

  let dp = Array.from({ length: s.length + 1 }, () => false);
  dp[s.length] = true; // last character "" is considered true

  // dp[8]
  // Input: s = "neetcode", wordDict = ["neet","code"]

  for (let i = s.length - 1; i > -1; i--) {
    // dp[7]

    // can 'e" match any characters in wordDict

    const current = s[i];
    for (let word of wordDict) {
      const withinBoundary = word.length + i <= s.length;
      const followingWordMatch = s.slice(i, i + word.length) === word;
      // ensure we don't check too far overflowed
      if (withinBoundary && followingWordMatch) {
        // we can match that
        dp[i] = dp[i + word.length];
        // dp[i] can be still false
      }

      // before we decide to stop checking other word
      // we need to ensure if its guaranteed to clearable from here

      if (dp[i]) break;

      // otherwise, we still need to check other words
      // they still possibly can make dp[i] become true.
    }
  }

  return dp[0];
};
