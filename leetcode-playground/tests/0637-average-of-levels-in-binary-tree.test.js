import { TreeNode, averageOfLevels } from '../0637-average-of-levels-in-binary-tree';

describe('0637-average-of-levels-in-binary-tree', () => {
    it('should handle LeetCode example 1: balanced tree with mixed values', () => {
        // Tree:     3
        //          / \
        //         9  20
        //           /  \
        //          15   7
        const root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        const result = averageOfLevels(root);
        expect(result[0]).toBeCloseTo(3, 5);
        expect(result[1]).toBeCloseTo(14.5, 5);
        expect(result[2]).toBeCloseTo(11, 5);
    });

    it('should handle LeetCode example 2: single node', () => {
        const root = new TreeNode(1);
        const result = averageOfLevels(root);
        expect(result.length).toBe(1);
        expect(result[0]).toBeCloseTo(1, 5);
    });

    it('should handle single node with zero value', () => {
        const root = new TreeNode(0);
        const result = averageOfLevels(root);
        expect(result.length).toBe(1);
        expect(result[0]).toBeCloseTo(0, 5);
    });

    it('should handle left-only chain', () => {
        // Tree: 1
        //       /
        //      2
        //     /
        //    3
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3)));
        const result = averageOfLevels(root);
        expect(result.length).toBe(3);
        expect(result[0]).toBeCloseTo(1, 5);
        expect(result[1]).toBeCloseTo(2, 5);
        expect(result[2]).toBeCloseTo(3, 5);
    });

    it('should handle right-only chain', () => {
        // Tree: 1
        //        \
        //         2
        //          \
        //           3
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        const result = averageOfLevels(root);
        expect(result.length).toBe(3);
        expect(result[0]).toBeCloseTo(1, 5);
        expect(result[1]).toBeCloseTo(2, 5);
        expect(result[2]).toBeCloseTo(3, 5);
    });

    it('should handle balanced tree with equal values per level', () => {
        // Tree:       1
        //            / \
        //           2   2
        //          / \ / \
        //         3  3 3  3
        const root = new TreeNode(1,
            new TreeNode(2, new TreeNode(3), new TreeNode(3)),
            new TreeNode(2, new TreeNode(3), new TreeNode(3))
        );
        const result = averageOfLevels(root);
        expect(result.length).toBe(3);
        expect(result[0]).toBeCloseTo(1, 5);
        expect(result[1]).toBeCloseTo(2, 5);
        expect(result[2]).toBeCloseTo(3, 5);
    });

    it('should handle partial last level', () => {
        // Tree:      1
        //           / \
        //          2   3
        //         / \
        //        4   5
        const root = new TreeNode(1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3)
        );
        const result = averageOfLevels(root);
        expect(result.length).toBe(3);
        expect(result[0]).toBeCloseTo(1, 5);
        expect(result[1]).toBeCloseTo(2.5, 5);
        expect(result[2]).toBeCloseTo(4.5, 5);
    });

    it('should handle non-integer averages', () => {
        // Tree:   10
        //        /  \
        //       5   15
        const root = new TreeNode(10, new TreeNode(5), new TreeNode(15));
        const result = averageOfLevels(root);
        expect(result.length).toBe(2);
        expect(result[0]).toBeCloseTo(10, 5);
        expect(result[1]).toBeCloseTo(10, 5);
    });

    it('should handle negative values', () => {
        // Tree:    -1
        //         /  \
        //        -2  -3
        const root = new TreeNode(-1, new TreeNode(-2), new TreeNode(-3));
        const result = averageOfLevels(root);
        expect(result.length).toBe(2);
        expect(result[0]).toBeCloseTo(-1, 5);
        expect(result[1]).toBeCloseTo(-2.5, 5);
    });

    it('should handle large values', () => {
        // Tree: 1000000
        //       /     \
        //   2000000  3000000
        const root = new TreeNode(1000000, new TreeNode(2000000), new TreeNode(3000000));
        const result = averageOfLevels(root);
        expect(result.length).toBe(2);
        expect(result[0]).toBeCloseTo(1000000, 5);
        expect(result[1]).toBeCloseTo(2500000, 5);
    });

    it('should handle three-level tree with multiple nodes per level', () => {
        // Tree:       1
        //           /   \
        //          2     3
        //         / \   / \
        //        4   5 6   7
        const root = new TreeNode(1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3, new TreeNode(6), new TreeNode(7))
        );
        const result = averageOfLevels(root);
        expect(result.length).toBe(3);
        expect(result[0]).toBeCloseTo(1, 5);
        expect(result[1]).toBeCloseTo(2.5, 5);
        expect(result[2]).toBeCloseTo(5.5, 5);
    });
});
