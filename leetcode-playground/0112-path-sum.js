/**
 * Given the root of a binary tree and an integer targetSum, return true if the tree has a
 * root-to-leaf path such that adding up all the values along the path equals targetSum.
 *
 * https://leetcode.com/problems/path-sum/description/
 *
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var hasPathSum = function(root, targetSum) {
    // implement
};

export { hasPathSum, TreeNode }
