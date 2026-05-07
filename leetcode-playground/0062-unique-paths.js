/**
 * Count the number of unique paths in an m x n grid moving only right or down.
 *
 * https://leetcode.com/problems/unique-paths/description/
 * @param {number} m - Number of rows in the grid
 * @param {number} n - Number of columns in the grid
 * @return {number} Number of unique paths from top-left to bottom-right
 */
var uniquePaths = function (m, n) { // 2 x 3
    // Solution implementation

    // intuition, we can take look at the problem at cell level


    // [3+3 =9 ] [2+1=3]   [1]
    // [1+2= 3] [1+1=2]   [1]
    // [1]        [1]    [1- Goal]

    // can only go right and bottom
    // reverse engineer make it easier

    // pattern observed:
    // bottom row always 1
    // last column always 1

    // other cell is always bottom possible path + right possible path



    // []        []    [Goal]
    let resultRow = new Array(n).fill(1)

    for (let i = 0; i < m - 1; i++) {
        // iterate through all row except, exclude last one.
        let newRow = new Array(n).fill(1)
        // iterate for every cell in col
        for (let j = n - 2; j > -1; j--) {
            // iterate from last col, start from 2nd last, then slowly build to first in col
            newRow[j] = newRow[j + 1] + resultRow[j]

            //  j
            // [9]  [3]  [1] resultRow
        }

        resultRow = newRow // update the row with new row we calculate, since we only want to calculate the path, we don't need to keep all the newRow we made, we can store update the row and move next iteration
    }

    // we have first row calculated backwards from bottom row, with the answer

    return resultRow[0]

};

export { uniquePaths }
