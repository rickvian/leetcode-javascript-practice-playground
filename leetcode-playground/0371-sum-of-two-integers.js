/**
 * Given two integers a and b, return the sum of the two integers without using the operators + and -.
 *
 * https://leetcode.com/problems/sum-of-two-integers/description/
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // use bitwise operation trick

  while (b != 0) {
    let tmp = (a & b) << 1;
    a = a ^ b; // we get the addition but without calculating carry
    // now calculate carry with this trick

    b = tmp;
  }

  return a;
};

export { getSum };
