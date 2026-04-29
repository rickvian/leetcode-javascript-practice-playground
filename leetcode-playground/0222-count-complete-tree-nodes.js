/**
 * Given the root of a complete binary tree, return the number of nodes in the tree.
 *
 * https://leetcode.com/problems/count-complete-tree-nodes/description/
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

var countNodes = function(root) {
    // implement
};

export { TreeNode, countNodes }
