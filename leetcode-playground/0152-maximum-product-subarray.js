/**
 * Given an integer array nums, find a subarray that has the largest product, and return the product.
 * The test cases are generated so that the answer will fit in a 32-bit integer.
 *
 * https://leetcode.com/problems/maximum-product-subarray/description/
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  // Start with the max single element to handle all-negative arrays
  let res = Math.max(...nums);

  // Track both running max and min — a negative min can flip to a large positive
  // when multiplied by another negative number
  let currMin = 1;
  let currMax = 1;

  for (let num of nums) {
    // Save before overwrite — currMin update needs the old currMax
    let tmpCurrMax = currMax;

    // Three candidates: extend positive streak, flip negative streak, or start fresh
    currMax = Math.max(currMax * num, currMin * num, num);
    currMin = Math.min(tmpCurrMax * num, currMin * num, num); // update currMin to be used for nextIteration

    res = Math.max(res, currMax);
  }

  return res;
};

export { maxProduct };
