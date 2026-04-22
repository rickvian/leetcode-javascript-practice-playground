/**
 * Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
 *
 * https://leetcode.com/problems/powx-n/description/
 *
 * @param {number} x
 * @param {number} n
 * @return {number}
 *
 * Time Complexity: O(log n) — each recursive call halves n
 * Space Complexity: O(log n) — recursion stack depth is log n
 */
var myPow = function (x, n) {
  // function that x power to n
  // there are 2 cases, positive and negative number
  // lets handle positive first
  // simples approach is num = num * x loop n  times, but its o(n) and not what the question expect.
  // so there is another approach to powering number with less operation
  // its to divide and conquer.
  // say 2^10 we can split into 2^5 * 2^5 , and then 2^3 * 2^2 * 2^3
  // effectively halve it until base case, and multiply them
  // the operation keep halving, so it will result in o log N operation

  function helper(x, n) {
    // base case
    if (x === 0) return 0;
    if (n === 0) return 1;

    // divide and conquer

    let res = helper(x, Math.floor(n / 2)); // flooring it mean we divide take the even number,
    res = res * res; // merge it back

    if (n % 2 === 1) {
      // say 2^3, odd power because we floored it, we handle the extra 1 more multiplicationhere
      return res * x;
    }

    // else - even
    return res;
  }

  let result = helper(x, Math.abs(n)); // we care calculate the positive first

  if (n < 0) return 1 / result; // per math definition

  return result;
};

export { myPow };
