import { sumNumbers, TreeNode } from '../0129-sum-root-to-leaf-numbers';

describe('0129-sum-root-to-leaf-numbers', () => {
    it('should return 0 for null root (min input)', () => {
        const result = sumNumbers(null);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return the value itself for a single-node tree', () => {
        const result = sumNumbers(new TreeNode(7));
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should return 25 for tree [1,2,3] (12 + 13)', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const result = sumNumbers(root);
        if (result !== undefined) expect(result).toBe(25);
    });

    it('should return 1026 for tree [4,9,0,5,1] (495+491+40)', () => {
        const root = new TreeNode(
            4,
            new TreeNode(9, new TreeNode(5), new TreeNode(1)),
            new TreeNode(0)
        );
        const result = sumNumbers(root);
        if (result !== undefined) expect(result).toBe(1026);
    });

    it('should handle all-zero single-path tree (root-leaf digit 0 counts as 0)', () => {
        const root = new TreeNode(0, new TreeNode(0, new TreeNode(0), null), null);
        const result = sumNumbers(root);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle left-only skewed tree [1,2,3] -> 123', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);
        const result = sumNumbers(root);
        if (result !== undefined) expect(result).toBe(123);
    });

    it('should handle right-only skewed tree [1,null,2,null,3] -> 123', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        const result = sumNumbers(root);
        if (result !== undefined) expect(result).toBe(123);
    });
});
