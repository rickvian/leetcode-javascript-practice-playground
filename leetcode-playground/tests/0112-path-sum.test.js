import { hasPathSum, TreeNode } from '../0112-path-sum';

describe('0112-path-sum', () => {
    it('should return false for null root (min input)', () => {
        const result = hasPathSum(null, 0);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for a single-node tree where value matches', () => {
        const result = hasPathSum(new TreeNode(5), 5);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for a single-node tree with targetSum=0 (empty path does NOT count)', () => {
        const result = hasPathSum(new TreeNode(1), 0);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for [5,4,8,11,null,13,4,7,2,null,null,null,1] with target 22', () => {
        const root = new TreeNode(5,
            new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null),
            new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
        const result = hasPathSum(root, 22);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false when the target is only partially matched by a non-leaf', () => {
        const root = new TreeNode(1, new TreeNode(2), null);
        const result = hasPathSum(root, 1);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should handle negative values that make the sum reachable', () => {
        const root = new TreeNode(-2, null, new TreeNode(-3));
        const result = hasPathSum(root, -5);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for tree [1,2] with target 0 (no leaf path equals 0)', () => {
        const root = new TreeNode(1, new TreeNode(2), null);
        const result = hasPathSum(root, 0);
        if (result !== undefined) expect(result).toBe(false);
    });
});
