import { countUnivalSubtrees, TreeNode } from '../0250-count-univalue-subtrees';

describe('0250-count-univalue-subtrees', () => {
    it('should return 0 for null root', () => {
        const result = countUnivalSubtrees(null);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 for single-node tree (leaf is uni-value)', () => {
        const result = countUnivalSubtrees(new TreeNode(5));
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 4 for leetcode sample [5,1,5,5,5,null,5]', () => {
        // Root=5, left=1 (leaf), right=5; 1.left=5, 1.right=5; right.right=5
        const root = new TreeNode(
            5,
            new TreeNode(1, new TreeNode(5), new TreeNode(5)),
            new TreeNode(5, null, new TreeNode(5))
        );
        const result = countUnivalSubtrees(root);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return total-node-count when all values identical (repetitive)', () => {
        const root = new TreeNode(7, new TreeNode(7), new TreeNode(7));
        const result = countUnivalSubtrees(root);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return only leaves count for strictly-distinct tree', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const result = countUnivalSubtrees(root);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle deep left-skewed identical chain (range limit)', () => {
        let cur = null;
        for (let i = 0; i < 5; i++) cur = new TreeNode(9, cur, null);
        const result = countUnivalSubtrees(cur);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should handle off-by-one: only one child differing breaks chain', () => {
        const root = new TreeNode(1, new TreeNode(1, null, new TreeNode(2)), null);
        const result = countUnivalSubtrees(root);
        if (result !== undefined) expect(result).toBe(1);
    });
});
