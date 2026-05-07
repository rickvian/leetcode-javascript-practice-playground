/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

  // [R2] [F1] [F1]
  // [F1] [F1] [  ]
  // [  ] [F1] [F1]


  // neighbour infect, process adjacent orange.
  // collect fresh orange count, useful for us to know when to stop when processing rotting expansion

  let freshOrangeCount = 0;

  let orangeQueue = []; // queue of rotten orange [row, index] to process rotting neighbour
  let [rowLen, colLen] = [grid.length, grid[0].length]

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        freshOrangeCount++
      }
      if (grid[i][j] === 2) {
        orangeQueue.push([i, j]);
      }
    }
  }

  // now process rotting orange in queue, we infect all orange in 4 direction
  // those infected orange need will be queued to processed in next minute.
  let time = 0
  let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]]
  while (orangeQueue.length > 0 && freshOrangeCount > 0) { // when no fresh orange left, skips process last rotten batches
    // [0,1], [1,0]

    const countOrangeToProcess = orangeQueue.length // snapshot of queue before start

    for (let i = 0; i < countOrangeToProcess; i++) { // does it use moving bucket?
      // shift orange from queue, start process itt 4 direction
      const [orangeRow, orangeCol] = orangeQueue.shift()

      for (let [dr, dc] of directions) {
        const [row, col] = [orangeRow + dr, orangeCol + dc]

        // check if adjacent orange valid for infect
        if (row >= 0 && col >= 0 && row < rowLen && col < colLen && grid[row][col] === 1) {
          grid[row][col] = 2 // rot it
          orangeQueue.push([row, col]) // push to queue for next minute processing.
          freshOrangeCount--
        }
      } // all direction processed
    } // orange queue processed

    time++
  }

  if (freshOrangeCount === 0) {
    return time
  } else {
    // not all can be processed
    return -1
  }


};

// brute force way:
// loop, every minute, check all orange
// check all direction for that orange,
// turn it into rotten if it is adjacent to rotten orange
// in next minute to the same

// we will count total of rotten oranges.

// process MXN oranges, 4 direction
// for every minute it has to process again mxn4 direction, at worts case if rot spreads slowly through the board, it took m x n time in minute (imagine orange all in edges.)

// this BFS efficient way:
// Time Complexity: O(N x M)
// The time complexity is proportional to the number of cells in the grid, where $N$ is the number of rows and $M$ is the number of columns.
// Initialization: You traverse the entire grid once to find the initial rotten oranges and count the fresh ones.This takes O(N xM).
// BFS Traversal: Each cell is added to the queue at most once.For every cell removed from the queue, we check its 4 neighbors. 
// Since each cell is processed a constant number of times(4 checks), the total operations for the BFS are also O(N x M)
// Total: O(N x M) + O(N x M) = O(N x M).

// Space Complexity: O(N x M)
// The space complexity is determined by the data structures used to store information during the process.
// Queue Size: In the worst -case scenario(e.g., all oranges are rotten at the start or they rot in a way that many are added to the queue simultaneously), the queue can hold up to $N \times M$ elements.
// In - place Modification: Since you are modifying the input grid directly to mark oranges as rotten (grid[row][col] = 2), you aren't using extra space for a "visited" set. 
// If you were not allowed to modify the input, you would need an additional O(NxM) matrix to track state, but the overall complexity class would remain the same.

export { orangesRotting }