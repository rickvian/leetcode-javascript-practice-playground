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

  // we want to gather all rotten oranges and put it into stack
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
  while (orangeQueue.length > 0 && freshOrangeCount > 0) {
    let orangeQueueThisMinute = orangeQueue.length
    for (let i = 0; i < orangeQueueThisMinute; i++) {
      // iterate over all orange in this minute

      let [r, c] = orangeQueue.shift() // current orange to process.

      for (let [dr, dc] of directions) {
        let [row, col] = [r + dr, c + dc]



        if (row >= 0 && row < rowsLen && col >= 0 && col < colsLen && grid[row][col] === 1) {
          // within bounds and fresh orange, can infect

          grid[row][col] = 2 // make it rotten
          orangeQueue.push([row, col]) // push the index into the queue

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

export { orangesRotting }