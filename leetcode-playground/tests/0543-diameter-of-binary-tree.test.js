import { diameterOfBinaryTree } from '../0543-diameter-of-binary-tree.js';
import { buildTree } from './helpers/tree.js';

describe('0543-diameter-of-binary-tree', () => {
    it('should return diameter when it passes through root', () => {
        //   1
        //  / \
        // 2   3
        const root = buildTree([1, 2, 3]);
        expect(diameterOfBinaryTree(root)).toBe(2);
    });

    it('should return diameter when it does not pass through root', () => {
        //        1
        //       / \
        //      2   3
        //     / \
        //    4   5
        //   /     \
        //  8       7
        //           \
        //            9
        // Path through root (8 to 3): 4 edges
        // Longest path (8 to 9): 5 edges (8-4-2-5-7-9)
        const root = buildTree([1, 2, 3, 4, 5, null, null, 8, null, null, 7, null, null, null, 9]);
        expect(diameterOfBinaryTree(root)).toBe(5);
    });

    it('should handle single node tree', () => {
        const root = buildTree([1]);
        expect(diameterOfBinaryTree(root)).toBe(0);
    });

    it('should handle two node tree', () => {
        //   1
        //  /
        // 2
        const root = buildTree([1, 2]);
        expect(diameterOfBinaryTree(root)).toBe(1);
    });

    it('should handle linear chain (skewed tree)', () => {
        //   1
        //  /
        // 2
        //  \
        //   3
        //    \
        //     4  (wait - skewed but with a right child on node 3... see diagram)
        // Actually:
        //   1
        //  /
        // 2
        //  \
        //   3
        //    \
        //     4
        const root = buildTree([1, 2, null, null, 3, null, 4]);
        expect(diameterOfBinaryTree(root)).toBe(3);
    });

    it('should handle balanced tree', () => {
        //       1
        //      / \
        //     2   3
        //    / \ / \
        //   4  5 6  7
        const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
        expect(diameterOfBinaryTree(root)).toBe(4);
    });

    it('should handle tree with long right subtree', () => {
        //     1
        //    / \
        //   2   3
        //      / \
        //     4   5
        //        / \
        //       6   7
        const root = buildTree([1, 2, 3, null, null, 4, 5, null, null, 6, 7]);
        expect(diameterOfBinaryTree(root)).toBe(4);
    });
});
