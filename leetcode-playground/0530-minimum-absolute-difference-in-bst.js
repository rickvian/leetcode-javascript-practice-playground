/**
 * Given the root of a BST, return the minimum absolute difference between values of any two different nodes.
 *
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
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

var getMinimumDifference = function(root) {
    // implement
};

export { TreeNode, getMinimumDifference }
