/**
 * Set entire rows and columns to zero if an element is zero, in-place with O(1) space.
 *
 * https://leetcode.com/problems/set-matrix-zeroes/description/
 * @param {number[][]} matrix - The m x n matrix to modify
 * @return {void} Modifies matrix in-place
 *
 * Time:  O(m * n * (m + n)) — outer scan is O(m*n); each zero cell triggers O(m) col scan + O(n) row scan
 * Space: O(1) — "#" sentinel is written into the input matrix itself; no auxiliary data structures
 */
var setZeroesHashApproach = function (matrix) {
  let ROWS = matrix.length; // O(1) space
  let COLS = matrix[0].length; // O(1) space

  // O(m) per call — scans the entire column to mark non-zero cells with "#"
  function markColHashExcept(r, c) {
    // 1,#,3 // [1,0]
    // 4,0,5 //  1,1 - not marked
    // 6,#,8 //  1,2 - marked

    for (let rowIndex = 0; rowIndex < ROWS; rowIndex++) {
      // O(m)
      if (!(rowIndex === r) && matrix[rowIndex][c] !== 0) {
        matrix[rowIndex][c] = "#"; // O(1) — overwrites in-place, no extra space
      }
    }
  }

  // O(n) per call — scans the entire row to mark non-zero cells with "#"
  function markRowHashExcept(r, c) {
    // 1,#,3 // [1,0]
    // 4,0,5 //  1,1 - not marked
    // 6,#,8 //  1,2 - marked

    for (let colIndex = 0; colIndex < COLS; colIndex++) {
      // O(n)
      if (!(colIndex === c) && matrix[r][colIndex] !== 0) {
        matrix[r][colIndex] = "#"; // O(1) — overwrites in-place, no extra space
      }
    }
  }

  // O(m * n * (m + n)) — visits every cell O(m*n); each zero cell calls O(m) + O(n) helpers
  for (let r = 0; r < ROWS; r++) {
    // O(m)
    for (let c = 0; c < COLS; c++) {
      // O(n)
      if (matrix[r][c] === 0) {
        markColHashExcept(r, c); // O(m) — re-scans full column for every zero found
        markRowHashExcept(r, c); // O(n) — re-scans full row for every zero found
      }
    }
  }

  // O(m * n) — dominated by the pass above, does not change overall complexity
  for (let r = 0; r < ROWS; r++) {
    // O(m)
    for (let c = 0; c < COLS; c++) {
      // O(n)
      if (matrix[r][c] === "#") {
        matrix[r][c] = 0; // O(1)
      }
    }
  }
};

/**
 * Efficient approach — reuses the first row and first column as zero markers.
 *
 * Key insight: instead of scanning the full row/col for every zero found (O(m+n) per zero),
 * we do a single O(m*n) scan and record which rows/cols need zeroing using the matrix's own
 * first row and first column as flags. Two separate booleans track whether row-0 and col-0
 * themselves originally contained a zero, since we overwrite them as markers.
 *
 * Time:  O(m * n) — three full O(m*n) passes; no repeated row/col scans per zero
 * Space: O(1) — only two booleans; markers live inside the input matrix
 */
const setZeroesEfficientApproach = (matrix) => {
  const ROWS = matrix.length; // O(1) space
  const COLS = matrix[0].length; // O(1) space

  // O(n) — check before we corrupt row 0 with markers
  let firstRowHasZero = false;
  for (let c = 0; c < COLS; c++) {
    if (matrix[0][c] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // O(m) — check before we corrupt col 0 with markers
  let firstColHasZero = false;
  for (let r = 0; r < ROWS; r++) {
    if (matrix[r][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // O(m * n) — for every zero in the interior, stamp its row and col markers
  // matrix[0][c] = 0  means "zero out column c"
  // matrix[r][0] = 0  means "zero out row r"
  // start at r=1, c=1 to leave the marker row/col untouched during this scan
  for (let r = 1; r < ROWS; r++) {
    // O(m)
    for (let c = 1; c < COLS; c++) {
      // O(n)
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0; // O(1) — mark column c via row-0 flag
        matrix[r][0] = 0; // O(1) — mark row r via col-0 flag
      }
    }
  }

  // O(m * n) — apply markers: zero any interior cell whose row or col is flagged
  for (let r = 1; r < ROWS; r++) {
    // O(m)
    for (let c = 1; c < COLS; c++) {
      // O(n)
      if (matrix[0][c] === 0 || matrix[r][0] === 0) {
        matrix[r][c] = 0; // O(1)
      }
    }
  }

  // Row 0 and col 0 must be zeroed AFTER the apply-markers pass, not before.
  // During that pass we read matrix[0][c] and matrix[r][0] to decide which interior
  // cells to zero. If we zeroed row 0 or col 0 early, every column or row marker
  // would read as 0, causing the entire interior to be incorrectly wiped.
  // The two booleans captured the original zero state upfront so we can act on it safely here.

  // O(n) — zero out row 0 last, after it has finished serving as column markers
  if (firstRowHasZero) {
    for (let c = 0; c < COLS; c++) matrix[0][c] = 0;
  }

  // O(m) — zero out col 0 last, after it has finished serving as row markers
  if (firstColHasZero) {
    for (let r = 0; r < ROWS; r++) matrix[r][0] = 0;
  }
};

export const setZeroes = setZeroesEfficientApproach;
