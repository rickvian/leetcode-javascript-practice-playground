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
  let res = 0;

  for (let i = 0; i < 32; i++) {
    // take the bit in each position in n

    let bit = (n >> i) & 1;

    // move that bit to left part (mirror) then OR it with result
    res = res | (bit << (31 - i));
  }

  // coerce it to 32 unsigned bit, because javascript
  return res >>> 0;
};

export { reverseBits };
