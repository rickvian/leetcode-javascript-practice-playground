/**
 * A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge.
 * A node can only appear in the sequence at most once. Note that the path does not need to pass
 * through the root. The path sum is the sum of the node's values in the path.
 * Given the root of a binary tree, return the maximum path sum of any non-empty path.
 *
 * https://leetcode.com/problems/binary-tree-maximum-path-sum/description/
 *
 * @param {TreeNode} root
 * @return {number}
 */
class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

var maxPathSum = function (root) {
  // to put simple/
  //   1
  // 2    3
  //   4    5
  // we can split, but only once, say we split at 1, meaning we can consider it
  // start from 2, 1, 3, then at 3 no more split.
  // we can compare both choice WITH split or without split, then store the max

  let maximumPath = root.val; // initial maximum

  // dfs will perform
  // check max WITH split, and update the maximumPath
  // check max without split, and return to parent to check, so parent can check
  // which one is better, with split / without split

  function dfs(node) {
    // base case

    if (!node) {
      return 0;
    }

    // else, have value

    // gather information on left and right

    let leftMaxWithoutSplit = dfs(node.left);
    let rightMaxWithoutSplit = dfs(node.right);
    // edge case check,
    // left or right can be negative, say

    //   1
    // -4   -5

    // max will returned -4
    // so the other choice is NOT to include subtree at all,
    // which is 0
    leftMaxWithoutSplit = Math.max(leftMaxWithoutSplit, 0);
    rightMaxWithoutSplit = Math.max(rightMaxWithoutSplit, 0);

    // now compare max

    //      1
    //  2      3

    // max WITH split is basically, leftMaxWithoutSplit + rightMaxWithoutSplit + itself.
    let currentSplitValue =
      node.val + leftMaxWithoutSplit + rightMaxWithoutSplit;

    // check if the path is bigger or not
    maximumPath = Math.max(maximumPath, currentSplitValue);

    // at this point, if they are bigger, then basically we found the max

    // now we need to return maximum WITHOUT split, from left and right side, just return the bigger one
    // so parent can compute his version when he split
    return node.val + Math.max(leftMaxWithoutSplit, rightMaxWithoutSplit);
  }

  dfs(root);
  return maximumPath;
};

export { maxPathSum, TreeNode };
