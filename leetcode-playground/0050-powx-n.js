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
  function helper(x, n) {
    // base case
    if (x == 0) return 0; // 0^any = 0
    if (n == 0) return 1; // any^0 = 1

    let res = helper(x, Math.floor(n / 2)); // divide multiplication into 2 part.
    res = res * res; // merge 2 part

    // handle special case of odd, multiply 1 more time
    if (n % 2 === 1) {
      return res * x;
    }
    // else, even number

    return res;
  }

  // n can be negative, we process them same first
  let res = helper(x, Math.abs(n));

  // decide if negative, 1 over it, else return res

  if (n < 0) return 1 / res;
  // else
  return res;
};

export { myPow };
