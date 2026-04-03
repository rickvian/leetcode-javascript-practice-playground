/**
 * Search for a target value in a 2D matrix where integers in each row are sorted left to right,
 * and integers in each column are sorted top to bottom.
 *
 * https://leetcode.com/problems/search-a-2d-matrix-ii/description/
 * @param {number[][]} matrix - The m x n matrix to search in
 * @param {number} target - The target value to search for
 * @return {boolean} True if target exists in matrix, false otherwise
 */
var searchMatrix = function (matrix, target) {

  //[
  // [1,2,4,8], L
  // [10,11,12,13],
  // [14,20,30,40] R
  // ],

  // target exist

  // true.

  // how human will solve this:

  // iterate from first row, 
  // start iteration 1-> last item
  // go next row, 1-> last item

  // we will find n, with 2 loop, 
  // but this will be rows * n


  // we need faster search.
  // to check which row we need to search, we can do binary search.

  // length 3, check mid row, does the target within row? no, then is the target smaller than row[0]?
  // check the lower section of row
  // if > row[row.length - 1] , check higher bracket of row.

  let matrixLeft = 0
  let matrixRight = matrix.length - 1
  let row = -1

  while (matrixLeft <= matrixRight) {
    let matrixMid = Math.floor((matrixLeft + matrixRight) / 2)

    // inspect the mid row
    let currentRow = matrix[matrixMid]
    const first = currentRow[0];
    const last = currentRow[currentRow.length - 1]

    // check if target is smaller
    if (target < first) {
      // we need find other row on previous section, later section is eliminated
      matrixRight = matrixMid - 1 // over 1
    } else if (target > last) {
      // we need find other row on later section, prev section is eliminated
      matrixLeft = matrixMid + 1; // over 1
    } else {
      // we are in correct row to search
      row = matrixMid;
      break;
    }
  }

  if (row === -1) return false // no row satisfy

  // perform binary search again from first row item to last
  const currentRow = matrix[row]
  let left = 0
  let right = currentRow.length - 1

  while (left <= right) {
    let mid = Math.floor((left + right) / 2)
    const val = currentRow[mid]

    if (target === val) return true
    if (val < target) {
      // target is bigger, we go righter section
      left = mid + 1 // over 1 righter than mid

    } else {
      // go righter section
      right = mid - 1 // over 1 lefter than mid
    }

  }

  return false

}
};

export { searchMatrix };
