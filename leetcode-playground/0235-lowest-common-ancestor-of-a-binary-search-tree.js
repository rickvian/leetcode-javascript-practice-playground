/**
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) node
 * of two given nodes in the BST.
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 *
 * @param {TreeNode} root - Root of the BST
 * @param {TreeNode} p - First node
 * @param {TreeNode} q - Second node
 * @return {TreeNode}
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var lowestCommonAncestor = function(root, p, q) {

};

export { lowestCommonAncestor, TreeNode }
