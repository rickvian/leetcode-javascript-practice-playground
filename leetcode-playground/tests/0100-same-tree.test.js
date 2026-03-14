import { isSameTree, TreeNode } from '../0100-same-tree';

describe('0100-same-tree', () => {
    it('should return true for identical trees [1,2,3] vs [1,2,3]', () => {
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(isSameTree(p, q)).toBe(true);
    });

    it('should return false for [1,2] vs [1,null,2] (different structure)', () => {
        const p = new TreeNode(1, new TreeNode(2), null);
        const q = new TreeNode(1, null, new TreeNode(2));
        expect(isSameTree(p, q)).toBe(false);
    });

    it('should return false for [1,2,1] vs [1,1,2] (different node values)', () => {
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(1));
        const q = new TreeNode(1, new TreeNode(1), new TreeNode(2));
        expect(isSameTree(p, q)).toBe(false);
    });

    it('should return true for null vs null', () => {
        expect(isSameTree(null, null)).toBe(true);
    });

    it('should return false for [1] vs null', () => {
        expect(isSameTree(new TreeNode(1), null)).toBe(false);
    });

    it('should return false for null vs [1]', () => {
        expect(isSameTree(null, new TreeNode(1))).toBe(false);
    });

    it('should return false for [1,2,3] vs [1,2,4] (leaf value differs)', () => {
        const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        const q = new TreeNode(1, new TreeNode(2), new TreeNode(4));
        expect(isSameTree(p, q)).toBe(false);
    });
});
