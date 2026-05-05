import { TreeNode, getMinimumDifference } from '../0530-minimum-absolute-difference-in-bst';

describe('0530-minimum-absolute-difference-in-bst', () => {
    it('should handle two-node tree (only one pair)', () => {
        const tree = new TreeNode(1, null, new TreeNode(2));
        expect(getMinimumDifference(tree)).toEqual(1);
    });

    it('should handle right-only chain', () => {
        const tree = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        expect(getMinimumDifference(tree)).toEqual(1);
    });

    it('should handle left-only chain', () => {
        const tree = new TreeNode(3, new TreeNode(2, new TreeNode(1)));
        expect(getMinimumDifference(tree)).toEqual(1);
    });

    it('should handle balanced BST', () => {
        const tree = new TreeNode(6,
            new TreeNode(2, new TreeNode(1), new TreeNode(4)),
            new TreeNode(8, new TreeNode(7), new TreeNode(9))
        );
        expect(getMinimumDifference(tree)).toEqual(1);
    });

    it('should handle minimum difference between non-adjacent tree nodes', () => {
        const tree = new TreeNode(12, new TreeNode(3, null, new TreeNode(6)), new TreeNode(13));
        expect(getMinimumDifference(tree)).toEqual(1);
    });

    it('should handle LeetCode example 1', () => {
        const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), null);
        expect(getMinimumDifference(tree)).toEqual(1);
    });

    it('should handle LeetCode example 2', () => {
        const tree = new TreeNode(1, null, new TreeNode(5, new TreeNode(4), new TreeNode(6)));
        expect(getMinimumDifference(tree)).toEqual(1);
    });

    it('should handle tree with values where minimum is not between leaf nodes', () => {
        const tree = new TreeNode(10, new TreeNode(5, new TreeNode(3), new TreeNode(7)), new TreeNode(15));
        expect(getMinimumDifference(tree)).toEqual(2);
    });

    it('should handle three-node unbalanced tree', () => {
        const tree = new TreeNode(20, new TreeNode(10, null, new TreeNode(15)), null);
        expect(getMinimumDifference(tree)).toEqual(5);
    });

    it('should handle tree with large numbers', () => {
        const tree = new TreeNode(1000000, new TreeNode(999999), null);
        expect(getMinimumDifference(tree)).toEqual(1);
    });

    it('should handle negative numbers', () => {
        const tree = new TreeNode(-1, new TreeNode(-2), new TreeNode(0));
        expect(getMinimumDifference(tree)).toEqual(1);
    });

    it('should handle mixed positive and negative', () => {
        const tree = new TreeNode(0, new TreeNode(-50, null, new TreeNode(-25)), new TreeNode(50));
        expect(getMinimumDifference(tree)).toEqual(25);
    });

    it('should handle values with larger gap', () => {
        const tree = new TreeNode(100, new TreeNode(50, new TreeNode(25)), new TreeNode(200));
        expect(getMinimumDifference(tree)).toEqual(25);
    });
});
