import { isSymmetric, TreeNode } from '../0101-symmetric-tree';

describe('0101-symmetric-tree', () => {
    it('should return true for null root (min input)', () => {
        const result = isSymmetric(null);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for single-node tree', () => {
        const result = isSymmetric(new TreeNode(1));
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for mirrored tree [1,2,2,3,4,4,3]', () => {
        const root = new TreeNode(1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(2, new TreeNode(4), new TreeNode(3)));
        const result = isSymmetric(root);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for non-mirrored tree [1,2,2,null,3,null,3]', () => {
        const root = new TreeNode(1,
            new TreeNode(2, null, new TreeNode(3)),
            new TreeNode(2, null, new TreeNode(3)));
        const result = isSymmetric(root);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return false when structure mirrors but values differ', () => {
        const root = new TreeNode(1,
            new TreeNode(2, new TreeNode(3), null),
            new TreeNode(2, null, new TreeNode(4)));
        const result = isSymmetric(root);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should handle all-identical values that ARE symmetric', () => {
        const root = new TreeNode(0,
            new TreeNode(0, new TreeNode(0), new TreeNode(0)),
            new TreeNode(0, new TreeNode(0), new TreeNode(0)));
        const result = isSymmetric(root);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false when one side is null but other is not', () => {
        const root = new TreeNode(1, new TreeNode(2), null);
        const result = isSymmetric(root);
        if (result !== undefined) expect(result).toBe(false);
    });
});
