/**
 * 79. Word Search
 * https://leetcode.com/problems/word-search/
 * Difficulty: Medium
 *
 * Given an m x n grid of characters board and a string word, return true if word exists
 * in the grid.
 *
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent
 * cells are horizontally or vertically neighboring. The same letter cell may not be used
 * more than once.
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 *
 * @complexity
 * Time:  O(m * n * 3^L)
 *   m * n  — outer loops try every cell as a potential start
 *   3^L    — DFS branching per start: first step has 4 choices, every deeper step has ≤3
 *            (the incoming cell is marked visited, cutting one branch)
 *            → 4 * 3^(L-1)  =  (4/3) * 3^L  →  O(3^L),  where L = word.length
 *   combined: O(m * n) × O(3^L)  →  O(m * n * 3^L)
 * Space: O(L) — call stack depth is at most L; board is mutated in-place, no extra DS
 */
var exist = function (board, word) {
  function backtrack(x, y, k) {
    // k is our position in word — mismatch means this cell can't continue the path
    if (board[x][y] !== word[k]) {
      return false;
    } else if (k === word.length - 1) {
      return true; // matched every character
    }

    // corrupt the cell temporarily so the same cell isn't reused in this DFS path
    // e.g. board[1][1]='A' → '-', future directions won't match 'A' here again
    board[x][y] = "-";

    for (const direction of [   // 4 branches at depth 0, ≤3 at each deeper level → 4 * 3^(L-1)
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ]) {
      const [i, j] = [x + direction[0], y + direction[1]];
      if (i >= 0 && i < board.length && j >= 0 && j < board[0].length) {
        if (backtrack(i, j, k + 1)) {
          return true;
        }
      }
    }

    // backtrack: restore the cell so other DFS paths can use it as a candidate
    board[x][y] = word[k];

    return false;
  }

  // any cell could be the start of the word — try all of them
  for (let i = 0; i < board.length; i++) {       // O(m)
    for (let j = 0; j < board[0].length; j++) {  // O(n)  →  O(m * n) combined
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};

//! alternative syntax
/**
 * @complexity  (same algorithm as backtrack above)
 * Time:  O(m * n * 3^L)
 *   m * n  — outer loops seed every cell as a start candidate
 *   3^L    — per start: 4 choices at depth 0, ≤3 at each deeper level (visited cell excluded)
 *            → 4 * 3^(L-1)  →  O(3^L),  L = word.length
 * Space: O(L) — recursion depth bounded by word length; in-place board mutation, no extra DS
 */
var exist = function (board, word) {
  const ROWS = board.length;
  const COLS = board[0].length;

  // i is our cursor in word — passing an index avoids slicing and keeps state minimal
  function dfs(r, c, i) {
    // consumed every character — the full word was matched along this path
    if (i === word.length) return true;

    // out of bounds, or cell doesn't match the next expected character
    if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== word[i]) {
      return false;
    }

    // mark visited: overwrite so this cell won't match again within the same DFS path
    // e.g. word="ABA", board[0][0]='A' → '#', middle 'B' search can't loop back here
    const currentChar = board[r][c];
    board[r][c] = "#";

    const found =                   // 4 branches at depth 0, ≤3 thereafter → 4 * 3^(L-1)
      dfs(r + 1, c, i + 1) ||
      dfs(r - 1, c, i + 1) ||
      dfs(r, c + 1, i + 1) ||
      dfs(r, c - 1, i + 1);

    // backtrack: restore so this cell is available to other starting paths
    board[r][c] = currentChar;

    return found;
  }

  // any cell could be word[0] — try each as a starting point
  for (let r = 0; r < ROWS; r++) {       // O(m)
    for (let c = 0; c < COLS; c++) {     // O(n)  →  O(m * n) combined
      if (dfs(r, c, 0)) return true;
    }
  }

  return false;
};

export { exist };
