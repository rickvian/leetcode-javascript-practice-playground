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
 */
var maxProduct = function(nums) {
  let result = nums[0];
  let min = 1;
  let max = 1;
  for (let n of nums) {
    [min, max] = [Math.min(n, min * n, max * n), Math.max(n, min * n, max * n)];
    result = Math.max(result, max);
  }
  return result;
};

// Approach: prefix/suffix one-pass
// The max product subarray is always a prefix or suffix of a zero-delimited segment:
// - even negatives → full segment is positive, captured at the far end of prefix or suffix
// - odd negatives  → drop the leftmost negative (suffix wins) or rightmost (prefix wins)
// A middle subarray can never win — it always leaves positives on the table at one or both ends.
// Zeros reset the running product to 1, starting a fresh segment from the next element.
var maxProductOnePass = function (nums) {
  let suffixProduct = 1;
  let prefixProduct = 1;
  let maxProduct = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    suffixProduct = (suffixProduct || 1) * nums[i];
    prefixProduct = (prefixProduct || 1) * nums[nums.length - 1 - i];

    maxProduct = Math.max(maxProduct, suffixProduct, prefixProduct);
  }

  return maxProduct;
};

// Approach: prefix/suffix three-pass
// Same guarantee as one-pass but materializes both arrays explicitly before taking the max.
var maxProductThreePass = function (nums) {
  let n = nums.length;
  let prefixProduct = new Array(n);
  let suffixProduct = new Array(n);

  prefixProduct[0] = nums[0];
  for (let i = 1; i < n; i++) {
    prefixProduct[i] = (prefixProduct[i - 1] || 1) * nums[i];
  }

  suffixProduct[n - 1] = nums[n - 1];
  for (let j = n - 2; j >= 0; j--) {
    suffixProduct[j] = (suffixProduct[j + 1] || 1) * nums[j];
  }

  return Math.max(...prefixProduct, ...suffixProduct);
};
