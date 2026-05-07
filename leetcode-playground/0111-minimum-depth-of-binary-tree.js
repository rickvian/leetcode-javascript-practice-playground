/**
 * Given a binary tree, find its minimum depth. The minimum depth is the number of nodes
 * along the shortest path from the root node down to the nearest leaf node.
 *
 * https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
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

var minDepth = function(root) {
    // implement
};

export { minDepth, TreeNode }
