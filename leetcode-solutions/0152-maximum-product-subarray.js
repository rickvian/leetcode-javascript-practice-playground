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
 * Time: O(n) — single pass, constant work per iteration (3 multiplications + Math.min/max)
 * Space: O(1) — only 3 variables (result, min, max) regardless of input size
 */
var maxProduct = function (nums) {
  // Negatives flip sign: a large negative × negative = large positive
  // So we must track both the running min AND max ending at each position
  // e.g. [2, 3, -2, 4]: at -2, the min=-6 becomes max=12 after × -2
  let result = nums[0];
  let min = 1;
  let max = 1;
  for (let n of nums) {
    // Three candidates each step: start fresh at n, extend max, extend min
    // e.g. n=-2, min=6, max=6 → candidates: -2, -12, -12 → new min=-12, new max=-2
    // e.g. n=-3, min=-12, max=-2 → candidates: -3, 36, 6 → new min=-3, new max=36
    [min, max] = [Math.min(n, min * n, max * n), Math.max(n, min * n, max * n)];
    result = Math.max(result, max);
  }
  return result;
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
