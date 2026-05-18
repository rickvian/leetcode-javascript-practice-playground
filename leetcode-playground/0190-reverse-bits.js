/**
 * Reverse bits of a given 32 bits unsigned integer.
 * Note: In some languages, such as Java, there is no unsigned integer type. In this case, both input
 * and output will be given as a signed integer type. They should not affect your implementation,
 * as the integer's internal binary representation is the same, whether it is signed or unsigned.
 *
 * https://leetcode.com/problems/reverse-bits/description/
 *
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 *
 * @complexity
 * Time:  O(1) — always exactly 32 iterations regardless of input
 * Space: O(1) — only two integer variables (res, bit)
 */
var reverseBits = function (n) {
  // accumulator that builds the reversed bit pattern
  let res = 0;

  // iterate over all 32 bit positions
  for (let i = 0; i < 32; i++) {
    // O(1) — fixed 32-bit width
    // shift n right by i to bring bit i to position 0, then mask off everything else
    // e.g. n=...1011, i=1 → ...101 & 1 = 1
    const bit = (n >> i) & 1;

    // place that bit at its mirrored position (31-i) in the result
    // e.g. bit at position 0 goes to position 31, bit at position 1 goes to 30, etc.
    res = res | (bit << (31 - i));
  }

  // >>> 0 converts the signed 32-bit integer to an unsigned value
  // JS bitwise ops return signed int32; this forces the unsigned interpretation
  // in unsigned: MSB (position 31) = 2^31 = 2,147,483,648, down to LSB (position 0) = 2^0 = 1
  return res >>> 0;
};

export { reverseBits };
