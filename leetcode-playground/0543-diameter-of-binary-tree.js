/**
 * Diameter of Binary Tree
 *
 * Given the root of a binary tree, return the length of the diameter of the tree.
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
 * This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 *
 * https://leetcode.com/problems/diameter-of-binary-tree/description/
 *
 * @param {TreeNode} root - Root node of the binary tree
 * @return {number} - Length of the diameter (number of edges)
 */
var diameterOfBinaryTree = function (root) {
    /**
     * Definition for a binary tree node.
     * function TreeNode(val, left, right) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.left = (left===undefined ? null : left)
     *     this.right = (right===undefined ? null : right)
     * }
     */
    /**
     * @param {TreeNode} root
     * @return {number}
     */

    let maxDiameter = 0
    // we want to check the height of left and height of right, plus current one

    function dfs(node) {
        if (node === null) return 0

        // else - node exist
        const heightLeft = dfs(node.left)
        const heightRight = dfs(node.right)

        maxDiameter = Math.max(maxDiameter, heightLeft + heightRight) // diameter is height left + height right

        return 1 + Math.max(heightLeft, heightRight)
    }

    dfs(root) // find the max diameter

    return maxDiameter

    return false
};

export { diameterOfBinaryTree };


