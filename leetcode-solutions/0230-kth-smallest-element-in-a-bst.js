/**
 * 230. Kth Smallest Element in a BST
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 * Difficulty: Medium
 *
 * Given the root of a binary search tree, and an integer k, return the kth smallest value
 * (1-indexed) of all the values of the nodes in the tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 *
 * @complexity
 * Approach 1 — Recursive in-order (with pruning)
 *
 * Time:
 *   - dfs visits at most k nodes before the prune fires (result.length > k)
 *   - each visit does O(1) work → O(k) visits total
 *   - Final: O(k)
 *
 * Space:
 *   - result array holds up to k+1 values → O(k)
 *   - call stack depth = height of tree = O(H), where H = log n (balanced) or n (skewed)
 *   - Final: O(k + H)
 */
var kthSmallest = function (root, k) {
  // In-order traversal of a BST yields values in sorted ascending order
  // so collecting all values and picking index k-1 is equivalent to finding the kth smallest
  const result = [];
  dfs(root);
  return result[k - 1]; // k is 1-indexed, e.g. k=2 on [1,2,3] → result[1] = 2

  function dfs(node) {
    if (!node || result.length > k) return null; // prune: stop once we have k values  →  O(k) nodes visited
    dfs(node.left); // left subtree always smaller in BST
    result.push(node.val); // result grows to at most k+1 entries  →  O(k) space
    dfs(node.right);
  }
};

/**
 * @complexity
 * Approach 2 — Iterative in-order (explicit stack, early exit)
 *
 * Time:
 *   - Each node is pushed onto the stack at most once and popped at most once
 *   - We stop as soon as we've popped k nodes → at most k pops + the dive path to reach them
 *   - Dive path length ≤ H (tree height), and it happens at most k times but each node is
 *     pushed/popped once overall → total node touches = O(k)
 *   - Final: O(k)
 *
 * Space:
 *   - Stack holds at most H nodes at any point (one full leftmost path) → O(H)
 *   - H = O(log n) balanced, O(n) skewed
 *   - Final: O(H)  — better than approach 1 (no result array needed)
 */
// alternative — iterative in-order using explicit stack, stops early at k (no extra array)
var kthSmallest = function (root, k) {
  let n = 0;
  let stack = [];
  let curr = root;

  while (curr || stack.length > 0) {
    // Step 1: DIVE left — push every node down the leftmost path
    // e.g. BST root=3 → stack becomes [3, 1] with curr=null (hit the bottom)
    while (curr !== null) {
      stack.push(curr); // stack grows up to H nodes (leftmost path)  →  O(H) space
      curr = curr.left;
    }

    // Step 2: BACKTRACK — pop the deepest unprocessed node (smallest remaining)
    // In-order property: a popped node is larger than everything we've seen so far
    curr = stack.pop();
    n++;

    // Step 3: early exit — the nth pop is the nth smallest value  →  loop runs k times total  →  O(k)
    if (n === k) return curr.val;

    // Step 4: MOVE RIGHT — explore the right subtree next (its values are larger)
    curr = curr.right;
  }
};
