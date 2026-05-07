/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and
 * '0's (water), return the number of islands. An island is surrounded by water and
 * is formed by connecting adjacent lands horizontally or vertically. You may assume
 * all four edges of the grid are all surrounded by water.
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // Time Complexity: O(m * n) - visit each cell at most once
  // Space Complexity: O(m * n) - visitedNode set + queue in worst case

  // visit all node one by one
  // record visited
  const visitedNode = new Set();

  let islandCount = 0;

  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function bfs(row, col) {
    let queue = [];

    queue.push([row, col]);
    visitedNode.add(`${row}-${col}`);

    while (queue.length > 0) {
      const currentQueueLength = queue.length;
      const newQueue = [];
      // Process batch by index - avoids queue.shift() which is O(n) in JavaScript
      // Index-based approach: O(1) per cell, O(m*n) total vs O(n) per shift = O(m²n²) total
      for (let i = 0; i < currentQueueLength; i++) {
        const toProcess = queue[i];

        for (let [dr, dc] of direction) {
          const [curRow, curCol] = [toProcess[0] + dr, toProcess[1] + dc];

          if (
            curRow >= 0 &&
            curCol >= 0 &&
            curRow < grid.length &&
            curCol < grid[0].length &&
            grid[curRow][curCol] === "1" &&
            !visitedNode.has(`${curRow}-${curCol}`)
          ) {
            visitedNode.add(`${curRow}-${curCol}`);
            newQueue.push([curRow, curCol]);
          }
        }
      }

      queue = newQueue;
    }
  }

  for (let rowI = 0; rowI < grid.length; rowI++) {
    for (let colI = 0; colI < grid[0].length; colI++) {
      if (grid[rowI][colI] === "1" && !visitedNode.has(`${rowI}-${colI}`)) {
        // island , we need to perform breath first search to mark the related island
        islandCount++;
        bfs(rowI, colI);
      }

      // else its just another 0
      visitedNode.add(`${rowI}-${colI}`);
    }
  }

  return islandCount;
};

export { numIslands };
