/**
 * Given an integer array nums, find a subarray that has the largest product, and return the product.
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * https://leetcode.com/problems/maximum-product-subarray/description/
 *
 * Intuition:
 * At each position, keep the largest and smallest products of subarrays that
 * end there. Usually we extend the largest product, but a negative number
 * flips signs, so extending the smallest (most negative) product can produce
 * the new largest product. The answer is the largest product seen anywhere.
 *
 * @param {number[]} nums
 * @return {number}
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

export { maxProduct };
