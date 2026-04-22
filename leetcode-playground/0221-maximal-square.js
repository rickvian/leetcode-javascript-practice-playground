/**
 * Given an m x n binary matrix filled with '0's and '1's,
 * find the largest square containing only '1's and return its area.
 *
 * https://leetcode.com/problems/maximal-square/description/
 *
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let rows = matrix;
  let cols = matrix[0];

  let cache = {};

  // return number
  function helper(r, c) {
    // base case: at the edge of the matrix
    if (r >= rows.length || c >= cols.length) {
      return 0; // overflow
    }

    // if not in cache, we build it first before return
    if (cache[`${r}-${c}`] == undefined) {
      // we create new cache
      // check 3 direction to bottom right
      let down = helper(r + 1, c);
      let right = helper(r, c + 1);
      let diagonal = helper(r + 1, c + 1);

      // prepare calculate possible square for this cell, leveraging cache

      cache[`${r}-${c}`] = 0; // initiate cache with 0

      if (matrix[r][c] === "1") {
        // itself can expand

        cache[`${r}-${c}`] = 1 + Math.min(down, diagonal, right);
        // if any of them has 0, then it will be 0
        // if any direction act as bottle neck of their expansion, then it wont able to expand
      }
    }

    // else its 0, then we leave the cache as 0
    return cache[`${r}-${c}`];
  }

  // initiate top down call

  helper(0, 0);

  //   return max in cache values

  let max = -Infinity;
  for (let key in cache) {
    max = Math.max(cache[key], max);
  }

  return max * max; // area
};

export { maximalSquare };
