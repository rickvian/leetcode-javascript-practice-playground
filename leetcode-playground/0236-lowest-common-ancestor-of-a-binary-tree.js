/**
 * Given a binary tree, find the lowest common ancestor of two given nodes p and q.
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
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
    // implement
};

export { TreeNode, lowestCommonAncestor }
