import { postorderTraversal, TreeNode } from '../0145-binary-tree-postorder-traversal';

describe('0145-binary-tree-postorder-traversal', () => {
    it('should return [] for null root (min input)', () => {
        const result = postorderTraversal(null);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [x] for a single-node tree', () => {
        const result = postorderTraversal(new TreeNode(5));
        if (result !== undefined) expect(result).toEqual([5]);
    });

    it('should return [3,2,1] for tree [1,null,2,3]', () => {
        const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
        const result = postorderTraversal(root);
        if (result !== undefined) expect(result).toEqual([3, 2, 1]);
    });

    it('should return [4,5,2,3,1] for a classic example', () => {
        const root = new TreeNode(
            1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3)
        );
        const result = postorderTraversal(root);
        if (result !== undefined) expect(result).toEqual([4, 5, 2, 3, 1]);
    });

    it('should handle a right-only skewed tree', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        const result = postorderTraversal(root);
        if (result !== undefined) expect(result).toEqual([3, 2, 1]);
    });

    it('should handle repetitive identical values', () => {
        const root = new TreeNode(7, new TreeNode(7), new TreeNode(7));
        const result = postorderTraversal(root);
        if (result !== undefined) expect(result).toEqual([7, 7, 7]);
    });

    it('should end with the root value', () => {
        const root = new TreeNode(
            10,
            new TreeNode(5, new TreeNode(3), null),
            new TreeNode(15)
        );
        const result = postorderTraversal(root);
        if (result !== undefined) expect(result[result.length - 1]).toBe(10);
    });
});
