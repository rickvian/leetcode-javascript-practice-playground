/**
 * 238. Product of Array Except Self
 * https://leetcode.com/problems/product-of-array-except-self/
 * Difficulty: Medium
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product
 * of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const emptyResult = new Array(nums.length).fill(0);
  const zeroCount = nums.filter((n) => n === 0).length;
  if (zeroCount > 1) {
    return emptyResult;
  }
  const product = nums.reduce((product, n) => product * (n === 0 ? 1 : n), 1);
  if (zeroCount === 1) {
    emptyResult[nums.indexOf(0)] = product;
    return emptyResult;
  }
  return nums.map((n) => product / n);
};

/**
 * Division approach: multiply all non-zero elements, then divide per position.
 *
 * @complexity
 * Time: O(n)
 *   - Step 1 loop (zero scan + product): O(n)
 *   - Step 2 loop (build result):        O(n)
 *   - O(n) + O(n) = O(2n) → drop constant → O(n)
 *
 * Space: O(n)
 *   - Output array `res` of length n: O(n)
 *   - `zeroCount`, `totalProductWithoutZeros`: O(1) extra
 *   - Total extra (excluding output): O(1); including output: O(n)
 */
var productExceptSelfDivisionApproach = function (nums) {
  // logic multiply all, and divide except with itself
  // this is more complex that it seems to be, because we have to deal with edge cases of zeroes

  let res = Array.from({ length: nums.length }, () => 0); // O(n) space

  let zeroCount = 0;
  let totalProductWithoutZeros = 1;

  // step 1 : analyze zeros and calculate non-zero product

  for (const num of nums) {
    // O(n) — single pass over input
    if (num === 0) {
      zeroCount++;
    } else {
      totalProductWithoutZeros *= num;
    }
  }

  // step 2 : Map result
  for (let i = 0; i < nums.length; i++) {
    // O(n) — single pass to fill output
    if (zeroCount > 1) {
      res[i] = 0; // as long as we have 2 zero, res[i] will be zero
    } else if (zeroCount === 1) {
      // one zero left...
      // because there are no other zeros that make it 0
      // if its position of zero, add totalProductWithoutZeros,
      // if its not the position of zero, then other zero will zero this out.
      res[i] = nums[i] === 0 ? totalProductWithoutZeros : 0;
    } else {
      // no zero count
      res[i] = totalProductWithoutZeros / nums[i];
    }
  }

  return res;
};

/**
 * Prefix/suffix product approach: build cumulative left and right product arrays,
 * then combine them per position.
 *
 * @complexity
 * Time: O(n)
 *   - Build lefter (left prefix products):  O(n)
 *   - Build righter (right suffix products): O(n)
 *   - Build result (combine):               O(n)
 *   - O(n) + O(n) + O(n) = O(3n) → drop constant → O(n)
 *
 * Space: O(n)
 *   - `lefter` array: O(n)
 *   - `righter` array: O(n)
 *   - `result` array: O(n)
 *   - O(n) + O(n) + O(n) = O(3n) → drop constant → O(n)
 *   (can be reduced to O(1) extra by reusing the output array for prefix pass)
 */
var productExceptSelfMultiplicationSections = function (nums) {
  // we collect lefter and righter part of multiplication
  // then we multiply them excluding current position
  //
  // [1, 2, 0, 3, 4]
  // lefter multiplication
  // [1, 2, 0, 0, 0]
  // righter multiplication
  // [0, 0, 0, 12, 4]

  // result
  // [0, 0, 24, 0, 0]

  // test
  //

  let lefter = Array.from({ length: nums.length }, () => 0); // O(n) space
  let righter = Array.from({ length: nums.length }, () => 0); // O(n) space
  // build lefter products
  for (let i = 0; i < lefter.length; i++) {
    // O(n) — left prefix pass
    if (i === 0) {
      lefter[i] = nums[i];
    } else {
      // next item through the last
      lefter[i] = lefter[i - 1] * nums[i];
    }
  }

  // build righter products
  for (let i = righter.length - 1; i > -1; i--) {
    // O(n) — right suffix pass
    if (i === righter.length - 1) {
      // last item, its just started
      righter[i] = nums[i];
    } else {
      // next item through the last
      // prev (right) product multiply with current
      righter[i] = righter[i + 1] * nums[i];
    }
  }

  let result = Array.from({ length: nums.length }, () => 0); // O(n) space

  for (let i = 0; i < nums.length; i++) {
    // O(n) — combine pass
    // build the result

    if (i === 0) {
      // first item, there are no lefter to multiply on, so take righter
      result[i] = righter[i + 1];

      continue;
    }

    // else
    if (i === nums.length - 1) {
      // last item, there are no righter to multiply on, so take only lefter
      result[i] = lefter[i - 1];
      continue;
    }

    // else - its in middle, lefter and righter item exist

    result[i] = lefter[i - 1] * righter[i + 1];
  }

  return result;
};

var productExceptSelf = productExceptSelfMultiplicationSections;

export { productExceptSelf };
