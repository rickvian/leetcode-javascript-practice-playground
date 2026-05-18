/**
 * Traverse a matrix in spiral order (clockwise from outside to inside).
 *
 * https://leetcode.com/problems/spiral-matrix/description/
 * @param {number[][]} matrix - The m x n matrix to traverse
 * @return {number[]} Elements in spiral order
 */
var spiralOrder = function (matrix) {
  const result = [];

  let top = 0;
  let bottom = matrix.length - 1;

  let left = 0;
  let right = matrix[0].length - 1;

  const walkTop = () => {
    // always start from left progress
    for (let c = left; c <= right; c++) {
      result.push(matrix[top][c]);
    }
    top++;
  };

  const walkRight = () => {
    // always start from "top" progress
    for (let r = top; r <= bottom; r++) {
      result.push(matrix[r][right]);
    }
    right--;
  };

  const walkBottom = () => {
    for (let c = right; c >= left; c--) {
      result.push(matrix[bottom][c]);
    }
    bottom--;
  };

  const walkLeft = () => {
    for (let r = bottom; r >= top; r--) {
      result.push(matrix[r][left]);
    }
    left++;
  };

  // execute spiral run
  while (left <= right && top <= bottom) {
    walkTop();
    // guard needed: top++ may push top past bottom (e.g. single-row matrix).
    // the NEXT call (walkRight) has no self-defense — it would blindly run
    // for (r = top; r <= bottom) with top > bottom and push stale cells.
    if (!(top <= bottom)) break;

    walkRight();
    // guard needed: right-- may push right past left (e.g. single-col matrix).
    // same reason — the NEXT call (walkBottom) would blindly run
    // for (c = right; c >= left) with right < left and push stale cells.
    if (!(left <= right)) break;

    walkBottom();
    // no guard needed: walkLeft's own loop is "for (r = bottom; r >= top)".
    // if bottom-- just collapsed vertically (bottom < top), that condition
    // is false from the start → 0 iterations, naturally a no-op.
    // e.g. 2×3 after clearing outer ring: top=1, bottom=0
    //   → for (r = 0; r >= 1; r--) never enters. safe.

    walkLeft();
    // no guard needed: walkLeft is the LAST call in the sequence.
    // after left++ the while condition re-checks before anything else runs,
    // so a collapsed box is caught at the top of the next iteration.
  }

  return result;
};

export { spiralOrder };
