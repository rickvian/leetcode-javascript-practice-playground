/**
 * Given the root of a complete binary tree, return the number of nodes,
 * ideally in O(log^2 n) using the complete-tree property.
 *
 * https://leetcode.com/problems/count-complete-tree-nodes/description/
 *
 * @param {TreeNode|null} root - Root of the complete binary tree
 * @return {number} Total count of nodes in the tree
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

var countNodes = function(root) {
    // implement
};

export { countNodes, TreeNode }
