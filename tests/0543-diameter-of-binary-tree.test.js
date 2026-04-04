import { diameterOfBinaryTree } from '../0543-diameter-of-binary-tree.js';

// TreeNode definition for tests
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

describe('0543-diameter-of-binary-tree', () => {
    it('should return diameter when it passes through root', () => {
        //       1
        //      / \
        //     2   3
        const root = new TreeNode(1,
            new TreeNode(2),
            new TreeNode(3)
        );
        expect(diameterOfBinaryTree(root)).toBe(2);
    });

    it('should return diameter when it does not pass through root', () => {
        //            1 (Root)
        //           / \
        //          2   3
        //         / \
        //        4   5
        //       /     \
        //      6       7
        //     /         \
        //    8           9

        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(4, new TreeNode(8)),
                new TreeNode(5, null, new TreeNode(7, null, new TreeNode(9)))
            ),
            new TreeNode(3)
        );

        // Path through root (8 to 3): 5 edges
        // Path within left subtree (8 to 9): 6 edges (8-4-2-5-7-9)
        expect(diameterOfBinaryTree(root)).toBe(6);
    });

    it('should handle single node tree', () => {
        const root = new TreeNode(1);
        expect(diameterOfBinaryTree(root)).toBe(0);
    });

    it('should handle two node tree', () => {
        //   1
        //  /
        // 2
        const root = new TreeNode(1, new TreeNode(2));
        expect(diameterOfBinaryTree(root)).toBe(1);
    });

    it('should handle linear chain (skewed tree)', () => {
        //     1
        //    /
        //   2
        //  /
        // 3
        //  \
        //   4
        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(3,
                    null,
                    new TreeNode(4)
                )
            )
        );
        expect(diameterOfBinaryTree(root)).toBe(3);
    });

    it('should handle balanced tree', () => {
        //         1
        //       /   \
        //      2     3
        //     / \   / \
        //    4   5 6   7
        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(4),
                new TreeNode(5)
            ),
            new TreeNode(3,
                new TreeNode(6),
                new TreeNode(7)
            )
        );
        expect(diameterOfBinaryTree(root)).toBe(4);
    });

    it('should handle tree with long right subtree', () => {
        //       1
        //      / \
        //     2   3
        //        / \
        //       4   5
        //          / \
        //         6   7
        const root = new TreeNode(1,
            new TreeNode(2),
            new TreeNode(3,
                new TreeNode(4),
                new TreeNode(5,
                    new TreeNode(6),
                    new TreeNode(7)
                )
            )
        );
        expect(diameterOfBinaryTree(root)).toBe(4);
    });
});
