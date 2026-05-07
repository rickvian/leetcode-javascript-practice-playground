/**
 * Given the roots of two binary trees root and subRoot, return true if there is a subtree
 * of root with the same structure and node values of subRoot and false otherwise.
 *
 * https://leetcode.com/problems/subtree-of-another-tree/description/
 *
 * @param {TreeNode} root - The root node of the main binary tree
 * @param {TreeNode} subRoot - The root node of the subtree to search for
 * @return {boolean}
 */

import { TreeNode } from TreeNode

var isSubtree = function (root, subRoot) {
    if (subRoot === null) return true // null is always subtree of any tree

    // else, subroot is not null:
    if (root === null) return false // not null will never be subtree of null.

    if (isSameTree(root, subRoot)) return true

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)

    function isSameTree(tree1, tree2) {
        if (tree1 === null && tree2 === null) return true

        // potential get one as null, one is not, so they not the same
        if (tree1 === null || tree2 === null) return false

        return (tree1.val === tree2.val) && isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
    }
};

export { isSubtree };
