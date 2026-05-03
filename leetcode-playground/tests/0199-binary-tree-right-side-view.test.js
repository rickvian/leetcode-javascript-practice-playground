import { TreeNode, rightSideView } from '../0199-binary-tree-right-side-view';

describe('0199-binary-tree-right-side-view', () => {
    it('should handle empty tree', () => {
        expect(rightSideView(null)).toEqual([]);
    });

    it('should handle single node tree', () => {
        const root = new TreeNode(1);
        expect(rightSideView(root)).toEqual([1]);
    });

    it('should handle right-only tree (all nodes visible)', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        expect(rightSideView(root)).toEqual([1, 2, 3]);
    });

    it('should handle left-only tree (left nodes visible from right)', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        expect(rightSideView(root)).toEqual([1, 2, 3]);
    });

    it('should handle LeetCode example 1: balanced tree', () => {
        // Tree: [1,2,3,null,5,null,4]
        //       1
        //      / \
        //     2   3
        //      \   \
        //       5   4
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.right = new TreeNode(5);
        root.right = new TreeNode(3);
        root.right.right = new TreeNode(4);
        expect(rightSideView(root)).toEqual([1, 3, 4]);
    });

    it('should handle tree where rightmost node at level is on left subtree', () => {
        //       1
        //      / \
        //     2   3
        //    /
        //   4
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(4);
        root.right = new TreeNode(3);
        expect(rightSideView(root)).toEqual([1, 3, 4]);
    });

    it('should handle LeetCode example 2: skewed tree', () => {
        // Tree: [1,null,2]
        //       1
        //        \
        //         2
        const root = new TreeNode(1, null, new TreeNode(2));
        expect(rightSideView(root)).toEqual([1, 2]);
    });

    it('should handle tree with multiple levels and complex structure', () => {
        //         1
        //        / \
        //       2   3
        //      / \
        //     4   5
        //    /
        //   6
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(4);
        root.left.left.left = new TreeNode(6);
        root.left.right = new TreeNode(5);
        root.right = new TreeNode(3);
        expect(rightSideView(root)).toEqual([1, 3, 5, 6]);
    });

    it('should handle tree where right subtree is deeper', () => {
        //       1
        //      / \
        //     2   3
        //          \
        //           4
        //            \
        //             5
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.right = new TreeNode(3);
        root.right.right = new TreeNode(4);
        root.right.right.right = new TreeNode(5);
        expect(rightSideView(root)).toEqual([1, 3, 4, 5]);
    });

    it('should handle tree with all nodes at same level having right child', () => {
        //       1
        //      / \
        //     2   3
        //    / \ / \
        //   4 5 6  7
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right = new TreeNode(3);
        root.right.left = new TreeNode(6);
        root.right.right = new TreeNode(7);
        expect(rightSideView(root)).toEqual([1, 3, 7]);
    });

    it('should handle tree with negative values', () => {
        const root = new TreeNode(-1);
        root.left = new TreeNode(-2);
        root.right = new TreeNode(-3);
        root.left.left = new TreeNode(-4);
        expect(rightSideView(root)).toEqual([-1, -3, -4]);
    });

    it('should handle tree with duplicate values', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(1);
        root.right = new TreeNode(1);
        root.left.left = new TreeNode(1);
        expect(rightSideView(root)).toEqual([1, 1, 1]);
    });

    it('should handle single left child at each level', () => {
        //       1
        //      /
        //     2
        //    /
        //   3
        //  /
        // 4
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.left.left.left = new TreeNode(4);
        expect(rightSideView(root)).toEqual([1, 2, 3, 4]);
    });

    it('should handle tree where each level has both children but right child deeper', () => {
        //         1
        //        / \
        //       2   3
        //      / \   \
        //     4   5   6
        //            /
        //           7
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(4);
        root.left.right = new TreeNode(5);
        root.right = new TreeNode(3);
        root.right.right = new TreeNode(6);
        root.right.right.left = new TreeNode(7);
        expect(rightSideView(root)).toEqual([1, 3, 6, 7]);
    });
});
