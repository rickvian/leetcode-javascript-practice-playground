/**
 * Given an m x n binary matrix filled with '0's and '1's,
 * find the largest square containing only '1's and return its area.
 *
 * https://leetcode.com/problems/maximal-square/description/
 *
 * @param {character[][]} matrix
 * @return {number}
 */
// Approach: Top-Down DP (memoized recursion)
// dp(r,c) = side length of the largest square whose TOP-LEFT corner is (r,c)
// Recurrence: if matrix[r][c] === '1'  →  1 + min(down, right, diagonal)
//             else                      →  0
// The minimum of the three neighbors is the bottleneck: a square can only
// grow as large as the smallest square that can be formed in each direction.
// Time:  O(m * n) — each cell computed once, all subsequent calls hit cache
// Space: O(m * n) — cache stores one entry per cell; call stack O(m + n)
var maximalSquare = function (matrix) {
  let rows = matrix;
  let cols = matrix[0];

  let cache = {};

  function helper(r, c) {
    if (r >= rows.length || c >= cols.length) {
      return 0;
    }

    if (cache[`${r}-${c}`] == undefined) {
      let down = helper(r + 1, c);
      let right = helper(r, c + 1);
      let diagonal = helper(r + 1, c + 1);

      cache[`${r}-${c}`] = 0;

      if (matrix[r][c] === "1") {
        // min: any direction that can't expand becomes the bottleneck
        cache[`${r}-${c}`] = 1 + Math.min(down, diagonal, right);
      }
    }

    return cache[`${r}-${c}`];
  }

  helper(0, 0);

  let max = -Infinity;
  for (let key in cache) {
    max = Math.max(cache[key], max);
  }

  return max * max;
};

export { maximalSquare };
