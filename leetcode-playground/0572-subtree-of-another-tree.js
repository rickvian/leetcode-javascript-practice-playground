/**
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree of root
 * with the same structure and node values of subRoot and false otherwise.
 * A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's
 * descendants. The tree tree could also be considered as a subtree of itself.
 *
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 *
 * @param {TreeNode} root - Root of the main tree
 * @param {TreeNode} subRoot - Root of the subtree to find
 * @return {boolean} - True if subRoot is a subtree of root
 */

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var isSubtree = function(root, subRoot) {
    // stub
};

export { TreeNode, isSubtree };
