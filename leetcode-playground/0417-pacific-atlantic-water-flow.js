/**
 * There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean.
 * Given an m x n integer matrix heights where heights[r][c] represents the height above sea level
 * of the cell at coordinate (r, c), return a list of grid coordinates result where
 * result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific
 * and Atlantic oceans.
 *
 * https://leetcode.com/problems/pacific-atlantic-water-flow/description/
 *
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
  /*
    pacific    
    [1, 2, 2, 3, 5],
    [3, 2, 3, 4, 4],
    [2, 4, 5, 3, 1],
    [6, 7, 1, 4, 5],
    [5, 1, 1, 2, 4]    
            atlantic
            */
  // pacific touches top-left, atlantic touches bottom-right
  // brute force approach, go to each element in the cells
  // o(m * n)

  // in each cell we will do DFS/BFS to trace path towards both oceans
  // which another o(m * n)

  // hence this approach will be O((m * n)^2)

  // there are more efficient approach.

  // we know all row[0] and col[0] touches pacific
  // we can reverse trace cells that touches pacific

  // from pacific cells, perform BFS and mark isVisited + canReach pacific
  // it only need mark visited as 1 time because its water flowing logic

  let ROWSLEN = heights.length;
  let COLSLEN = heights[0].length;

  let pacificResult = Array.from(
    { length: ROWSLEN },
    (_, r) =>
      Array.from({ length: COLSLEN }, (_, c) => [r === 0 || c === 0, false]), // [canReachPacific, isVisited]
  );

  let atlanticResult = Array.from(
    { length: ROWSLEN },
    (_, r) =>
      Array.from({ length: COLSLEN }, (_, c) => [
        c === COLSLEN - 1 || r === ROWSLEN,
        false,
      ]), // [canReachPacific, isVisited]
  );

  // pacific || atlantic
  function dfs(r, c, seaType, adjacentNodeVal) {
    // base cases
    const isOutOfBounds = r < 0 || r > ROWSLEN - 1 || c < 0 || c > COLSLEN - 1;
    let isVisited = false;
    if (seaType === "pacific") {
      isVisited = pacificResult[r]?.[c]?.[1];
    }
    if (seaType === "atlantic") {
      isVisited = atlanticResult[r]?.[c]?.[1];
    }

    if (isOutOfBounds || isVisited) {
      // stop traverse
      return;
    }

    // process current cell as visited
    pacificResult[r][c][1] = true; // to check will this update the reference based if i update isVisited = true

    if (adjacentNodeVal <= heights[r][c]) {
      // meaning water can flow from r c to previous cell.

      //   if (r === 4 && c === 2) {
      //     console.log("hit");
      //   }
      pacificResult[r][c][0] = true; // can flow
    } else {
      // not possible to traverse to this from this way, target cell possibly cannot flow to pacific.
      //   no need to check further

      return;
    }

    // next, start traverse 4 direction
    dfs(r + 1, c, seaType, heights[r][c]);
    dfs(r, c + 1, seaType, heights[r][c]);
    dfs(r - 1, c, seaType, heights[r][c]);
    dfs(r, c - 1, seaType, heights[r][c]);
  }

  // we go through pacific border and traverse, mark pacific related cells
  let pacificRows = heights[0];

  for (let rowI = 0; rowI < ROWSLEN; rowI++) {
    if (rowI === 0) {
      // they guaranteed to be base case so we can initialze them first i suppose
      // Top border cells
      for (let colI = 0; colI < COLSLEN; colI++) {
        dfs(rowI, colI, "pacific", heights[rowI][colI]);
      }
    } else {
      // left border cells.
      dfs(rowI, 0, "pacific", heights[rowI][colI]);
    }
  }

  console.table(pacificResult);

  return pacificResult;
  // then we go through Atlantic border do the same
};

export { pacificAtlantic };
