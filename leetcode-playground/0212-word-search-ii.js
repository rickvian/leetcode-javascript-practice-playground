/**
 * Given an m x n board of characters and a list of strings words, return all words on the board.
 * Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells
 * are horizontally or vertically neighboring. The same letter cell may not be used more than once
 * in a word.
 *
 * https://leetcode.com/problems/word-search-ii/description/
 *
 * Approach: Trie + Backtracking DFS
 * ---------------------------------
 * Naive approach: run Word Search I independently for each word → O(W * M*N * 4^L).
 * This is too slow when W (word count) is large.
 *
 * Better: build a Trie from all words first, then run a single DFS pass over the board.
 * At each cell we walk the Trie in lockstep with the DFS — if the current character has
 * no Trie child we prune the entire subtree immediately, avoiding redundant work shared
 * across words that start with the same prefix.
 *
 * Key optimizations:
 *  1. Store the full word string on the terminal TrieNode (avoids string concatenation
 *     during DFS — no need to track the accumulated path separately).
 *  2. Null out `node.word` after the first match to prevent duplicate results when the
 *     same word is reachable via multiple board paths.
 *  3. Mark cells visited inline with a boolean matrix (cheaper than character mutation).
 *
 * Complexity:
 *  - Let M = board rows, N = board cols, W = number of words, L = max word length,
 *    A = alphabet size (26).
 *  - Trie build:   O(W * L) time,  O(W * L) space.
 *  - DFS:          O(M * N * 4^L) — for each of the M*N start cells the DFS explores
 *                  at most 4 directions L levels deep. In practice the Trie prunes
 *                  branches aggressively, making the average case far cheaper.
 *  - Total time:   O(W*L + M*N * 4^L)
 *  - Total space:  O(W*L) for the Trie + O(M*N) for the visited matrix + O(L) call stack.
 *
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

// Each node holds up-to-26 children (one per letter) and optionally the full word
// string when this node represents the end of a word inserted into the Trie.
class TrieNode {
  children = {};
  word = null; // non-null only at a terminal node; holds the complete word string
}

var findWords = function (board, words) {
  let ROWS = board.length;
  let COLS = board[0].length;

  // Tracks which cells are on the current DFS path to enforce the "no reuse" rule.
  let visited = Array.from({ length: ROWS }, () =>
    Array.from({ length: COLS }, () => false),
  );

  let result = [];
  let root = new TrieNode();

  // Insert one word into the Trie character by character.
  // After the loop, mark the terminal node with the full word so DFS can collect it
  // without any string reconstruction.
  function buildTrieWord(word) {
    let curr = root;

    for (let c of word) {
      if (!curr.children[c]) {
        curr.children[c] = new TrieNode();
      }
      curr = curr.children[c];
    }

    curr.word = word; // store full word here — no string concatenation needed during DFS
  }

  for (let word of words) {
    buildTrieWord(word);
  }

  // DFS explores board[r][c] while simultaneously descending the Trie from `node`.
  // If the current cell's letter has no matching child in the Trie we return early —
  // this is the core pruning step that makes the multi-word search efficient.
  function dfs(r, c, node) {
    if (
      r === ROWS ||
      c === COLS ||
      r < 0 ||
      c < 0 ||
      visited[r][c] ||
      !node.children[board[r][c]] // no trie path for this char — prune before recursing
    ) {
      return;
    }

    const nextNode = node.children[board[r][c]]; // advance Trie pointer to match current cell

    if (nextNode.word) {
      result.push(nextNode.word);
      nextNode.word = null; // prune: prevents duplicate pushes from alternate paths
    }

    // Mark before recursing, unmark after — standard backtracking pattern.
    visited[r][c] = true;

    dfs(r + 1, c, nextNode); // down
    dfs(r, c + 1, nextNode); // right
    dfs(r - 1, c, nextNode); // up
    dfs(r, c - 1, nextNode); // left

    visited[r][c] = false; // backtrack: restore cell for other DFS paths
  }

  // Launch DFS from every cell; the Trie handles multi-word matching in one pass.
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLS; j++) {
      dfs(i, j, root);
    }
  }

  return result;
};

export { findWords };
