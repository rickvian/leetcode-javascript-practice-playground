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

  // check first row and first col need to zero out?

  let firstRowHasZero = false; // O(1) space
  for (let c = 0; c < COLS; c++) {
    // O(n)
    if (matrix[0][c] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  let firstColHasZero = false; // O(1) space
  for (let r = 0; r < ROWS; r++) {
    // O(m)
    if (matrix[r][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // for the rest, (the interior)

  // [1, 0, 0]
  // [1, 1, 1]
  // [0, 1, 0]

  // label col and row to be converted to 0, based on the content.
  for (let r = 1; r < ROWS; r++) {
    // O(m)
    for (let c = 1; c < COLS; c++) {
      // O(n) → O(m * n) total for this loop
      if (matrix[r][c] === 0) {
        matrix[0][c] = 0; // O(1) — flagged that column for zeroing
        matrix[r][0] = 0; // O(1) — flagged that row for zeroing
      }
    }
  }

  // Peform the zerioing

  // [1, 0, 0]
  // [1, 0, 0]
  // [0, 0, 0]

  // start form interior
  for (let r = 1; r < ROWS; r++) {
    // O(m)
    for (let c = 1; c < COLS; c++) {
      // O(n) → O(m * n) total for this loop
      // check if column marked for zeroing?

      if (matrix[0][c] === 0 || matrix[r][0] === 0) {
        // any col or row marker will cause this cell to turn into zero
        matrix[r][c] = 0; // O(1)
      }
    }
  }

  // perform zeroing for first row

  // [0, 0, 0]
  // [1, 0, 0]
  // [0, 0, 0]

  if (firstRowHasZero) {
    // convert entire row cells into 0
    for (let c = 0; c < COLS; c++) {
      // O(n)
      matrix[0][c] = 0; // O(1)
    }
  }

  // [0, 0, 0]
  // [1, 0, 0]
  // [0, 0, 0]
  if (firstColHasZero) {
    // convert entire col cells into 0
    for (let r = 0; r < ROWS; r++) {
      // O(m)
      matrix[r][0] = 0; // O(1)
    }
  }

  // Total time breakdown:
  //   O(n)    first-row zero check
  //   O(m)    first-col zero check
  //   O(m*n)  interior marker scan
  //   O(m*n)  interior zeroing pass
  //   O(n)    zero out first row (conditional)
  //   O(m)    zero out first col (conditional)
  //
  // Step-by-step simplification:
  //   O(n) + O(m) + O(m*n) + O(m*n) + O(n) + O(m)
  //   = O(2n + 2m + 2*m*n)    collect like terms
  //   = O(m*n + m*n + m + m + n + n)
  //   = O(m*n)                m*n grows faster than m or n alone when both dimensions
  //                           are large, so the O(m) and O(n) terms are absorbed:
  //                           O(m) ≤ O(m*n) because n ≥ 1, and
  //                           O(n) ≤ O(m*n) because m ≥ 1.
  //                           Big-O also drops constant multipliers, so 2*m*n → m*n.
  //
  // Total space: O(1) — two booleans only; all markers stored inside the input matrix
};

export const setZeroes = setZeroesEfficientApproach;
