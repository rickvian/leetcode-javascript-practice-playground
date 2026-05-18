/**
 * Rotate an image 90 degrees clockwise in-place.
 *
 * https://leetcode.com/problems/rotate-image/description/
 * @param {number[][]} matrix - The m x n matrix to rotate
 * @return {void} Rotates matrix in-place
 */
var rotate = function (matrix) {
  // use 4 index to set the boundaries
  // we wills start clearing the outer perimeter first

  let left = 0;
  let right = matrix[0].length - 1; // right index

  let top = 0;
  let bottom = matrix.length - 1; // left index

  // because left and right and top and bottom move at same time, there is no need to check top and bottom
  while (left < right) {
    // rotate first item.
    // we do reverse order for easier temp variable management.
    // loop through 1 to lastitem-1 in top row

    for (let i = 0; i <= right - left - 1; i++) {
      // rotate 4 points
      // [1, 2]
      // [3, 4]
      //
      // [0,0  0,1]
      // [1,0  1,1]
      //
      let topLeft = matrix[top][left + i];

      // logic :
      // rotate 1,0 to 0,0
      // a.ka rotate bottom - i to top, 1

      matrix[top][left + i] = matrix[bottom - i][left];

      // rotate 1,1 to 1,0

      matrix[bottom - i][left] = matrix[bottom][right - i];
      // rotate 0,1 to 1,1

      matrix[bottom][right - i] = matrix[top + i][right];
      // rotate 0,0 to 0,1

      matrix[top + i][right] = topLeft;
    }
    // shift the boundaries

    top++;
    bottom--;
    left++;
    right--;
  }
};

export { rotate };
