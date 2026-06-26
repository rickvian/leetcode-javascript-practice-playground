/**
 * 200. Number of Islands
 * https://leetcode.com/problems/number-of-islands/
 * Difficulty: Medium
 *
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water),
 * return the number of islands.
 *
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally
 * or vertically. You may assume all four edges of the grid are all surrounded by water.
 */

/**
 * Approach 1: DFS, mutate grid in place to track visited.
 *
 * @param {character[][]} grid
 * @return {number}
 *
 * @complexity
 * Time: O(m*n) — outer loops touch each cell once; dfs visits each land cell once (sunk to "0" so re-entry returns immediately).
 *   Breakdown: outer scan O(m*n) + total dfs work across all calls O(m*n) = O(2*m*n), drop constant = O(m*n).
 * Space: O(m*n) worst case — recursion stack when grid is one giant island (e.g. all "1"s, snake-shaped traversal).
 */
var numIslands = function (grid) {
  let count = 0;

  // Scan every cell. Each unvisited "1" seeds a new island;
  // dfs floods the rest of that island so it isn't double-counted.
  // e.g. [["1","1","0"],["0","1","0"],["0","0","1"]] => 2 islands
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === "1") {
        count++;
        dfs(i, j);
      }
    }
  }

  function dfs(i, j) {
    // Bounds + water check. Treating "0" as the stop condition lets it double as "visited" marker.
    if (
      i < 0 ||
      i >= grid.length ||
      j < 0 ||
      j >= grid[i].length ||
      grid[i][j] === "0"
    ) {
      return;
    }

    // Sink the land: overwrite "1" -> "0" to mark visited without a separate matrix.
    grid[i][j] = "0";

    // Flood 4-directionally; diagonals don't connect per problem definition.
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  }

  return count;
};

/**
 * Approach 2: DFS with separate visited matrix — leaves input grid untouched.
 *
 * @complexity
 * Time: O(m*n) — each cell visited at most once; direction expansion is O(4) per cell = constant.
 *   Breakdown: outer scan O(m*n) + dfs total O(m*n) + visited alloc O(m*n) = O(3*m*n), drop constants = O(m*n).
 * Space: O(m*n) — visited matrix O(m*n) + recursion stack up to O(m*n) worst case.
 */
var numIslands = function (grid) {
  // Same idea as approach 1 but preserves grid by using a parallel visited[][].
  // Useful when caller can't tolerate input mutation.

  let islands = 0;

  let ROWS = grid.length;
  let COLS = grid[0].length;
  let visited = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => false),
  );

  function dfs(r, c) {
    // Out-of-bounds or already-seen: stop. Note we mark "0" cells as visited too,
    // which is harmless work but avoids extra branching on the caller side.
    if (r < 0 || r >= ROWS || c < 0 || c >= COLS || visited[r][c]) {
      return;
    }

    visited[r][c] = true;

    // Only expand from land. Water cells are visited but don't propagate —
    // they can't bridge two islands so there's nothing to flood.
    if (grid[r][c] === "1") {
      let directions = [
        [0, 1],
        [1, 0],
        [-1, 0],
        [0, -1],
      ];

      for (let [dr, dc] of directions) {
        let [nextR, nextC] = [r + dr, c + dc];
        dfs(nextR, nextC);
      }
    }
  }

  // Outer loop owns the +1 counter; dfs only handles flooding.
  // First "1" we hit in a connected component is the one that bumps `islands`.
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        islands++;
        dfs(i, j);
      }
    }
  }

  return islands;
};

/**
 * Approach 3: BFS — iterative, avoids recursion stack blowup on huge islands.
 *
 * @complexity
 * Time: O(m*n) — each cell enqueued at most once (gated by flipping to "0" before push); 4 neighbor checks per dequeue = constant.
 *   Breakdown: outer scan O(m*n) + bfs total enqueue/dequeue O(m*n) = O(2*m*n), drop constant = O(m*n).
 * Space: O(min(m,n)) typical for BFS frontier on a grid; O(m*n) worst case when frontier spans whole grid.
 *   (No recursion stack — strict win over approach 1 when the largest island is deep.)
 */
var numIslands = function (grid) {
  // BFS from each unvisited "1". Mark visited on enqueue by flipping cell to "0"
  // so neighbors can't re-enqueue it. Head pointer instead of shift() keeps dequeue O(1)
  // — shift() is O(n) in JS arrays and would degrade total work to O((m*n)^2).

  const ROWS = grid.length;
  const COLS = grid[0].length;
  const directions = [
    [0, 1],
    [1, 0],
    [-1, 0],
    [0, -1],
  ];

  let islands = 0;

  function bfs(r, c) {
    const queue = [[r, c]];
    // Mark seed visited BEFORE the loop so a neighbor pointing back at it can't re-enqueue.
    grid[r][c] = "0";
    let head = 0;

    while (head < queue.length) {
      const [cr, cc] = queue[head++];

      for (const [dr, dc] of directions) {
        const nr = cr + dr;
        const nc = cc + dc;

        if (nr < 0 || nr >= ROWS || nc < 0 || nc >= COLS) continue;
        if (grid[nr][nc] !== "1") continue;

        // Critical: mark visited at enqueue time, not dequeue time.
        // Dequeue-time marking lets a cell be enqueued multiple times via different neighbors,
        // blowing up the queue size and total work.
        grid[nr][nc] = "0";
        queue.push([nr, nc]);
      }
    }
  }

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (grid[r][c] === "1") {
        islands++;
        bfs(r, c);
      }
    }
  }

  return islands;
};
