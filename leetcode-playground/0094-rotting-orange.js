/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {

  // [x] [v] []
  // [v] [v] []
  // [v] [] [v]

  // intuition, we perform Bfs on rotting orange per minute,
  // we traverse fresh oranges touched by the rotten one, put it in queue
  // we traverse closest ones, process them first, hence breath first search.

  // when do we stop? 

  if (!grid || grid.length === 0) return 0;

  let orangeQueue = []; // BFS use queue.
  let freshOrangeCount = 0;

  let [rowsLen, colsLen] = [grid.length, grid[0].length]

  // Gather all rotten oranges and put it into stack
  // gather all information of fresh orange count, this will be used to track whether orange is rotten or not.
  for (let rowI = 0; rowI < rowsLen; rowI++) {
    for (let colI = 0; colI < colsLen; colI++) {

      if (grid[rowI][colI] === 1) {
        freshOrangeCount++
      }
      if (grid[rowI][colI] === 2) {
        // orange is rotten, put into queue
        orangeQueue.push([rowI, colI]);
      }

    }
  }

  // by now we should have all rotten orange coordinates, and total fresh orange in all grid.

  // now perform Bfs upon all rotten orange,
  // we want to check adjacent fresh orange, turn it into rotten orange,
  // put it into queue to process next.


  // when searching BFS we will look to 4 directions
  let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  let time = 0// minute

  // when we still have orange queue
  while (orangeQueue.length > 0 && freshOrangeCount > 0) { // freshOrangeCount > 0 is optimization so you don't need to process last batch of orange queue.
    let orangeQueueThisMinute = orangeQueue.length

    for (let i = 0; i < orangeQueueThisMinute; i++) {
      // iterate over all orange to process in this minute.

      let [r, c] = orangeQueue.shift() // current orange to process.

      for (let [dr, dc] of directions) { // search through all direction
        let [row, col] = [r + dr, c + dc]

        // ensure the target is within boundary, and fresh ready for infect
        if (row >= 0 && row < rowsLen && col >= 0 && col < colsLen && grid[row][col] === 1) {
          grid[row][col] = 2 // make it rotten
          orangeQueue.push([row, col]) // push the index into the queue, for next process
          freshOrangeCount--
        }

      }
    }
    // after all direction of rotten orange processed and rotted, time passes 1 minute
    time++
  }

  if (freshOrangeCount === 0) {
    return time
  } else {
    return -1 // not all orange can be rotten
  }

};
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