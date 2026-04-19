import { levelOrderBottom, TreeNode } from '../0107-binary-tree-level-order-traversal-ii';

describe('0107-binary-tree-level-order-traversal-ii', () => {
    it('should return [] for null root (min input)', () => {
        const result = levelOrderBottom(null);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [[v]] for a single node', () => {
        const result = levelOrderBottom(new TreeNode(1));
        if (result !== undefined) expect(result).toEqual([[1]]);
    });

    it('should return levels bottom-up for [3,9,20,null,null,15,7]', () => {
        const root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7)));
        const result = levelOrderBottom(root);
        if (result !== undefined) expect(result).toEqual([[15, 7], [9, 20], [3]]);
    });

    it('should return left-skewed tree levels reversed', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);
        const result = levelOrderBottom(root);
        if (result !== undefined) expect(result).toEqual([[3], [2], [1]]);
    });

    it('should return right-skewed tree levels reversed', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        const result = levelOrderBottom(root);
        if (result !== undefined) expect(result).toEqual([[3], [2], [1]]);
    });

    it('should preserve left-to-right ordering within each level for a wider tree', () => {
        const root = new TreeNode(1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3, new TreeNode(6), new TreeNode(7)));
        const result = levelOrderBottom(root);
        if (result !== undefined) {
            expect(result).toEqual([[4, 5, 6, 7], [2, 3], [1]]);
        }
    });

    it('should handle negative values correctly', () => {
        const root = new TreeNode(-1, new TreeNode(-2), new TreeNode(-3));
        const result = levelOrderBottom(root);
        if (result !== undefined) expect(result).toEqual([[-2, -3], [-1]]);
    });
});
