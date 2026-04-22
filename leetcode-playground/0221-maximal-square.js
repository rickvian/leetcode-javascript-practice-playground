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
var maximalSquare = function (matrix) {
  // time complexity: o(m x n)

  // space complexity: o(m x n)

  // 1,1  0
  // 1,1  0
  //   0  0

  let rowsLength = matrix.length;
  let colsLength = matrix[0].length;

  // 2D array instead of Map — O(1) integer index vs string hash
  const cache = Array.from({ length: rowsLength }, () =>
    new Array(colsLength).fill(-1),
  );

  let maxLength = 0;

  function helper(r, c) {
    if (r >= rowsLength || c >= colsLength) {
      return 0;
    }

    if (cache[r][c] !== -1) return cache[r][c]; // cache exist

    // else, we will build cache, by checking 3 direction
    const bottom = helper(r + 1, c);
    const diagonal = helper(r + 1, c + 1);
    const right = helper(r, c + 1);

    cache[r][c] =
      matrix[r][c] === "1" ? 1 + Math.min(bottom, right, diagonal) : 0;

    if (cache[r][c] > maxLength) maxLength = cache[r][c];

    return cache[r][c];
  }

  helper(0, 0);

  return maxLength * maxLength;

  /*

  intuition: cache 2d array, prefill with -1

  prepare maxLength= 0

  create helper(r,c) , invoke with helper(0,0) to perform top down recursive

  base case : r>= row.length || c>= col.length return 0

  else, not at edge, need check cache, if cache[r][c] != -1, return cache[r][c]
else, we will build cache, by checking 3 direction
  
  if itself = "1" , then check how long it can expand into 3 direction, bottle neck will be the answer min(bottom, left, diagonal);
  if not "1", then cannot la, zero lah

  additionally use the new cache to check if its currently the maxLength.


  at the end of function, maxLength should be updated with the longest possible length to expand square shape within the matrix
  return maxLength * maxLength*

  */
};

export { maximalSquare };
