import { zigzagLevelOrder } from '../0103-binary-tree-zigzag-level-order-traversal';

// TreeNode helper class for testing
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

describe('0103-binary-tree-zigzag-level-order-traversal', () => {
    // Edge Cases: Empty/Minimum
    describe('Edge Cases - Empty/Minimum', () => {
        it('should return empty array for null root', () => {
            expect(zigzagLevelOrder(null)).toEqual([]);
        });

        it('should return single element for single node tree', () => {
            const root = new TreeNode(1);
            expect(zigzagLevelOrder(root)).toEqual([[1]]);
        });

        it('should return single element with value 0 for node with zero', () => {
            const root = new TreeNode(0);
            expect(zigzagLevelOrder(root)).toEqual([[0]]);
        });
    });

    // Happy Path Cases
    describe('Happy Path - Standard Trees', () => {
        it('should handle tree with 2 levels (left-right zigzag)', () => {
            // Tree:     1
            //         /   \
            //        2     3
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [3, 2]
            ]);
        });

        it('should handle tree with 3 levels (proper zigzag)', () => {
            // Tree:        1
            //           /     \
            //          2       3
            //         / \     / \
            //        4   5   6   7
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(7);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [3, 2],
                [4, 5, 6, 7]
            ]);
        });

        it('should handle tree with 4 levels', () => {
            // Tree:           1
            //              /     \
            //             2       3
            //            / \     / \
            //           4   5   6   7
            //          /
            //         8
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(7);
            root.left.left.left = new TreeNode(8);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [3, 2],
                [4, 5, 6, 7],
                [8]
            ]);
        });
    });

    // Unbalanced Trees
    describe('Edge Cases - Unbalanced Trees', () => {
        it('should handle left-heavy tree (all left children)', () => {
            // Tree:   1
            //         /
            //        2
            //       /
            //      3
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.left.left = new TreeNode(3);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [2],
                [3]
            ]);
        });

        it('should handle right-heavy tree (all right children)', () => {
            // Tree:   1
            //          \
            //           2
            //            \
            //             3
            const root = new TreeNode(1);
            root.right = new TreeNode(2);
            root.right.right = new TreeNode(3);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [2],
                [3]
            ]);
        });

        it('should handle zigzag with single child at different levels', () => {
            // Tree:     1
            //          /
            //         2
            //          \
            //           3
            //          /
            //         4
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.left.right = new TreeNode(3);
            root.left.right.left = new TreeNode(4);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [2],
                [3],
                [4]
            ]);
        });
    });

    // Type Nuance Cases
    describe('Edge Cases - Type Nuance', () => {
        it('should handle negative numbers', () => {
            const root = new TreeNode(-1);
            root.left = new TreeNode(-2);
            root.right = new TreeNode(-3);

            expect(zigzagLevelOrder(root)).toEqual([
                [-1],
                [-3, -2]
            ]);
        });

        it('should handle large numbers', () => {
            const root = new TreeNode(1000000);
            root.left = new TreeNode(999999);
            root.right = new TreeNode(1000001);

            expect(zigzagLevelOrder(root)).toEqual([
                [1000000],
                [1000001, 999999]
            ]);
        });

        it('should handle mix of positive and negative numbers', () => {
            const root = new TreeNode(0);
            root.left = new TreeNode(-5);
            root.right = new TreeNode(5);
            root.left.left = new TreeNode(-10);
            root.left.right = new TreeNode(-1);
            root.right.left = new TreeNode(1);
            root.right.right = new TreeNode(10);

            expect(zigzagLevelOrder(root)).toEqual([
                [0],
                [5, -5],
                [-10, -1, 1, 10]
            ]);
        });

        it('should handle duplicate values in tree', () => {
            const root = new TreeNode(1);
            root.left = new TreeNode(1);
            root.right = new TreeNode(1);
            root.left.left = new TreeNode(1);
            root.left.right = new TreeNode(1);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [1, 1],
                [1, 1]
            ]);
        });
    });

    // Complex Tree Structures
    describe('Complex Tree Structures', () => {
        it('should handle wide tree (many nodes at one level)', () => {
            // Tree:             1
            //        / | | | | | \
            //       2  3 4 5 6 7  8
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(7);
            root.left.left.left = new TreeNode(8);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [3, 2],
                [4, 5, 6, 7],
                [8]
            ]);
        });

        it('should handle deeper tree (5 levels)', () => {
            // Tree:               1
            //                  /     \
            //                 2       3
            //                / \     / \
            //               4   5   6   7
            //              /   / \
            //             8   9  10
            //            /
            //           11
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(7);
            root.left.left.left = new TreeNode(8);
            root.left.right.left = new TreeNode(9);
            root.left.right.right = new TreeNode(10);
            root.left.left.left.left = new TreeNode(11);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [3, 2],
                [4, 5, 6, 7],
                [10, 9, 8],
                [11]
            ]);
        });

        it('should handle full binary tree with all nodes present', () => {
            // Tree:           1
            //              /     \
            //             2       3
            //            / \     / \
            //           4   5   6   7
            //          / \ / \ / \ / \
            //         8 9 10 11 12 13 14 15
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(7);
            root.left.left.left = new TreeNode(8);
            root.left.left.right = new TreeNode(9);
            root.left.right.left = new TreeNode(10);
            root.left.right.right = new TreeNode(11);
            root.right.left.left = new TreeNode(12);
            root.right.left.right = new TreeNode(13);
            root.right.right.left = new TreeNode(14);
            root.right.right.right = new TreeNode(15);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [3, 2],
                [4, 5, 6, 7],
                [15, 14, 13, 12, 11, 10, 9, 8]
            ]);
        });
    });

    // Boundary/Range Limit Cases
    describe('Boundary/Range Limit Cases', () => {
        it('should handle single left child at each level', () => {
            const root = new TreeNode(1);
            let current = root;
            for (let i = 2; i <= 5; i++) {
                current.left = new TreeNode(i);
                current = current.left;
            }

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [2],
                [3],
                [4],
                [5]
            ]);
        });

        it('should handle single right child at each level', () => {
            const root = new TreeNode(1);
            let current = root;
            for (let i = 2; i <= 5; i++) {
                current.right = new TreeNode(i);
                current = current.right;
            }

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [2],
                [3],
                [4],
                [5]
            ]);
        });

        it('should correctly alternate direction for each level', () => {
            // Verify zigzag pattern: left-to-right on level 0, right-to-left on level 1, etc.
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(7);
            root.left.left.left = new TreeNode(8);
            root.left.left.right = new TreeNode(9);
            root.left.right.left = new TreeNode(10);
            root.left.right.right = new TreeNode(11);
            root.right.left.left = new TreeNode(12);
            root.right.left.right = new TreeNode(13);
            root.right.right.left = new TreeNode(14);
            root.right.right.right = new TreeNode(15);

            const result = zigzagLevelOrder(root);

            // Level 0: left-to-right
            expect(result[0]).toEqual([1]);
            // Level 1: right-to-left
            expect(result[1]).toEqual([3, 2]);
            // Level 2: left-to-right
            expect(result[2]).toEqual([4, 5, 6, 7]);
            // Level 3: right-to-left
            expect(result[3]).toEqual([15, 14, 13, 12, 11, 10, 9, 8]);
        });
    });

    // No Happy-Path Bias Cases
    describe('Adversarial / Corner Cases', () => {
        it('should handle tree with only one level but multiple children', () => {
            const root = new TreeNode(10);
            root.left = new TreeNode(20);
            root.right = new TreeNode(30);

            expect(zigzagLevelOrder(root)).toEqual([
                [10],
                [30, 20]
            ]);
        });

        it('should handle tree where right subtree is deeper than left', () => {
            // Tree:     1
            //          / \
            //         2   3
            //             |
            //             4
            //             |
            //             5
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.right.right = new TreeNode(4);
            root.right.right.right = new TreeNode(5);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [3, 2],
                [4],
                [5]
            ]);
        });

        it('should handle tree where left subtree is deeper than right', () => {
            // Tree:     1
            //          / \
            //         2   3
            //         |
            //         4
            //         |
            //         5
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.left.left = new TreeNode(5);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [3, 2],
                [4],
                [5]
            ]);
        });

        it('should handle alternating left-right pattern', () => {
            // Tree:     1
            //          / \
            //         2   3
            //        /     \
            //       4       5
            //      /         \
            //     6           7
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.right.right = new TreeNode(5);
            root.left.left.left = new TreeNode(6);
            root.right.right.right = new TreeNode(7);

            expect(zigzagLevelOrder(root)).toEqual([
                [1],
                [3, 2],
                [4, 5],
                [7, 6]
            ]);
        });
    });
});
