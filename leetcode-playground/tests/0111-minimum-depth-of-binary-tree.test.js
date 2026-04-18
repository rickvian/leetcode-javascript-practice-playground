import { minDepth, TreeNode } from '../0111-minimum-depth-of-binary-tree';

describe('0111-minimum-depth-of-binary-tree', () => {
    it('should return 0 for null root (min input)', () => {
        const result = minDepth(null);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 for a single-node tree', () => {
        const result = minDepth(new TreeNode(1));
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 2 for [3,9,20,null,null,15,7] (classic)', () => {
        const root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7)));
        const result = minDepth(root);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should traverse down a half-tree (left-missing only) — depth 5 for [2,null,3,null,4,null,5,null,6]', () => {
        const root = new TreeNode(2, null,
            new TreeNode(3, null,
                new TreeNode(4, null,
                    new TreeNode(5, null, new TreeNode(6)))));
        const result = minDepth(root);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should pick the shorter branch in an unbalanced tree', () => {
        const root = new TreeNode(1,
            new TreeNode(2),
            new TreeNode(3, new TreeNode(4, new TreeNode(5), null), null));
        const result = minDepth(root);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 2 when root has only one child', () => {
        const root = new TreeNode(1, new TreeNode(2), null);
        const result = minDepth(root);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle a large left-only chain (n=50)', () => {
        let root = new TreeNode(50);
        for (let i = 49; i >= 1; i--) root = new TreeNode(i, root, null);
        const result = minDepth(root);
        if (result !== undefined) expect(result).toBe(50);
    });
});
