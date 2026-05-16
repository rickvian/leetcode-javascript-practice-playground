/**
 * You have a graph of n nodes labeled from 0 to n - 1. You are given an integer n
 * and a list of edges where edges[i] = [ai, bi] indicates that there is an undirected
 * edge between nodes ai and bi in the graph. Return true if the edges of the given
 * graph make up a valid tree, and false otherwise.
 *
 * https://leetcode.com/problems/graph-valid-tree/description/
 *
 * @param {number} n - Number of nodes
 * @param {number[][]} edges - Array of undirected edges
 * @return {boolean}
 */
var validTree = function (n, edges) {
  // build dependency for faster lookup as we traverse
  let adj = {}; // [node]: [...nodes]
  for (let i = 0; i < n; i++) adj[i] = [];

  for (let [n1, n2] of edges) {
    // set 2 way dependency
    adj[n1].push(n2);
    adj[n2].push(n1);
  }

  let visit = new Set();

  function dfs(current, prevValue) {
    // base case
    if (visit.has(current)) {
      // circular detected
      return false;
    }

    // otherwise, clear

    visit.add(current);

    // begin traversal
    for (let adjacentNode of adj[current]) {
      // edge case - skip traverse prev value
      if (adjacentNode === prevValue) {
        continue;
      }

      // valid next traversal
      if (!dfs(adjacentNode, current)) {
        // it returned false, circular detected inside, return false immediately
        return false;
      } // else let the loop continues
    }

    // otherwise all good
    return true;
  }

  return dfs(0, -1) && visit.size === n;
};

export { validTree };
