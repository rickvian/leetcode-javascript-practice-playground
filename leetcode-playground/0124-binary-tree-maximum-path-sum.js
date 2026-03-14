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
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var maxPathSum = function(root) {
};

export { maxPathSum, TreeNode };
