/**
 * Given the root of a binary tree, return its maximum depth.
 * A binary tree's maximum depth is the number of nodes along the longest path
 * from the root node down to the farthest leaf node.
 *
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
 *
 * @param {TreeNode} root
 * @return {number}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

var maxDepth = function (root) {
    // so every depth we will add 1 as the depth, 
    // then we want to check left and right which one is deeper, and add it to the depth count

    if (!root) return 0

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

export { maxDepth, TreeNode }
