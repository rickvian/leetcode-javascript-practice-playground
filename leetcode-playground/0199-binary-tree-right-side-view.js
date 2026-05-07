/**
 * Given the root of a binary tree, return the values of nodes visible from the right side, ordered top to bottom.
 *
 * https://leetcode.com/problems/binary-tree-right-side-view/description/
 *
 * @param {TreeNode} root
 * @return {number[]}
 */
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var rightSideView = function(root) {
    // implement
};

export { TreeNode, rightSideView }
