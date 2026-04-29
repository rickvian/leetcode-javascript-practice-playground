/**
 * Given inorder and postorder traversal arrays, construct and return the binary tree.
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var buildTree = function(inorder, postorder) {
    // implement
};

export { TreeNode, buildTree }
