/**
 * Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n),
 * ans[i] is the number of 1's in the binary representation of i.
 *
 * https://leetcode.com/problems/counting-bits/description/
 *
 * @param {number} n
 * @return {number[]}
 *
 * @complexity
 * Time:  O(n log n) — outer loop runs n+1 times; each getBit call shifts through O(log i) bits
 * Space: O(n)       — result array holds n+1 values; getBit uses O(1) auxiliary space
 */
var countBitsClassic = function (n) {
  let result = [];

  // Counts 1-bits in a single number by inspecting the last bit, then shifting it away.
  // Each iteration: check if LSB is 1 via (number % 2), then discard it with >> 1.
  //
  //   number = 6  →  110  →  11  →  1  →  0   (loop stops)
  //   last bit:       0       1      1        ← 2 ones  ✓
  //
  // Runs O(log number) times because right-shifting halves the value each step.
  function getBit(number) {
    let bit = 0;
    while (number > 0) {
      if (number % 2 === 1) bit++;
      number = number >> 1;
    }
    return bit;
  }

  // Call getBit for every i from 0..n  →  O(n) calls × O(log i) each = O(n log n) total
  for (let i = 0; i <= n; i++) {
    result.push(getBit(i));
  }
  return result;
};

/**
 * DP approach — O(n) by reusing previously computed answers.
 *
 * Core insight: every number i is just some smaller number (i >> 1) with one extra bit
 * appended on the right.  That smaller number was already counted, so:
 *
 *   dp[i] = dp[i >> 1]  +  (i & 1)
 *            ↑                ↑
 *    bits in i without    the bit we just appended (1 if i is odd, 0 if even)
 *    its last bit
 *
 * Why i >> 1 is always a "known" index: right-shifting halves the value, so
 * i >> 1 < i, and we fill dp left-to-right — it's always been computed already.
 *
 * Illustration for n = 7:
 *
 *   i  | binary | i>>1 | i&1 | dp[i>>1] | dp[i]
 *   ---|--------|------|-----|----------|------
 *   0  |  000   |  —   |  —  |    —     |   0   (base case)
 *   1  |  001   |  0   |  1  |    0     |   1
 *   2  |  010   |  1   |  0  |    1     |   1
 *   3  |  011   |  1   |  1  |    1     |   2
 *   4  |  100   |  2   |  0  |    1     |   1
 *   5  |  101   |  2   |  1  |    1     |   2
 *   6  |  110   |  3   |  0  |    2     |   2
 *   7  |  111   |  3   |  1  |    2     |   3
 *
 * result → [0, 1, 1, 2, 1, 2, 2, 3]
 *
 * @param {number} n
 * @return {number[]}
 *
 * @complexity
 * Time:  O(n) — single pass; each dp[i] is O(1) (one shift + one AND + one lookup)
 * Space: O(n) — dp array of length n+1; no auxiliary space beyond the output
 */
var countBitsDp = function (n) {
  const dp = new Array(n + 1).fill(0); // dp[0] = 0 is the base case (0 has no 1-bits)

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[i >> 1] + (i & 1);
  }

  return dp;
};

var countBits = countBitsDp;

export { countBits };
