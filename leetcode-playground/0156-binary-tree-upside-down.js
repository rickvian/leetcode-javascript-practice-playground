/**
 * Flip a binary tree where every right child has a sibling left child upside down,
 * returning the new root.
 *
 * https://leetcode.com/problems/binary-tree-upside-down/description/
 *
 * @param {TreeNode} root
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var upsideDownBinaryTree = function(root) {
    // implement
};

export { upsideDownBinaryTree, TreeNode }
