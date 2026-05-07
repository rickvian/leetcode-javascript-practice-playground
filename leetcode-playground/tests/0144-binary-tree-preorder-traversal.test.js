import { preorderTraversal, TreeNode } from '../0144-binary-tree-preorder-traversal';

describe('0144-binary-tree-preorder-traversal', () => {
    it('should return [] for null root (min input)', () => {
        const result = preorderTraversal(null);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [x] for a single-node tree', () => {
        const result = preorderTraversal(new TreeNode(5));
        if (result !== undefined) expect(result).toEqual([5]);
    });

    it('should return [1,2,3] for tree [1,null,2,3]', () => {
        const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
        const result = preorderTraversal(root);
        if (result !== undefined) expect(result).toEqual([1, 2, 3]);
    });

    it('should return [1,2,4,5,3] for a classic example', () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3)
        );
        const result = preorderTraversal(root);
        if (result !== undefined) expect(result).toEqual([1, 2, 4, 5, 3]);
    });

    it('should handle a left-only skewed tree', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);
        const result = preorderTraversal(root);
        if (result !== undefined) expect(result).toEqual([1, 2, 3]);
    });

    it('should handle repetitive identical values', () => {
        const root = new TreeNode(7, new TreeNode(7), new TreeNode(7));
        const result = preorderTraversal(root);
        if (result !== undefined) expect(result).toEqual([7, 7, 7]);
    });

    it('should handle negative and zero values', () => {
        const root = new TreeNode(0, new TreeNode(-1), new TreeNode(-2));
        const result = preorderTraversal(root);
        if (result !== undefined) expect(result).toEqual([0, -1, -2]);
    });
});
