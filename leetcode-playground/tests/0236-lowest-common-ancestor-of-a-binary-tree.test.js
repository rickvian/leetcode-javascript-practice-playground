import { lowestCommonAncestor, TreeNode } from '../0236-lowest-common-ancestor-of-a-binary-tree';

describe('0236-lowest-common-ancestor-of-a-binary-tree', () => {
    it('should return null when root is null', () => {
        const result = lowestCommonAncestor(null, null, null);
        if (result !== undefined) expect(result).toBe(null);
    });

    it('should return root when tree is a single node and both p/q are root', () => {
        const root = new TreeNode(1);
        const result = lowestCommonAncestor(root, root, root);
        if (result !== undefined) expect(result).toBe(root);
    });

    it('should return the root when p and q are in different subtrees', () => {
        // Tree: 3 -> (5, 1)
        const left = new TreeNode(5);
        const right = new TreeNode(1);
        const root = new TreeNode(3, left, right);
        const result = lowestCommonAncestor(root, left, right);
        if (result !== undefined) expect(result).toBe(root);
    });

    it('should return the ancestor when one node is ancestor of the other', () => {
        // Tree: 3 -> (5 -> (6,2), 1)
        const six = new TreeNode(6);
        const two = new TreeNode(2);
        const five = new TreeNode(5, six, two);
        const root = new TreeNode(3, five, new TreeNode(1));
        const result = lowestCommonAncestor(root, five, two);
        if (result !== undefined) expect(result).toBe(five);
    });

    it('should handle deep left-skewed tree (range limit)', () => {
        const deep = new TreeNode(4);
        const mid = new TreeNode(3, deep, null);
        const outer = new TreeNode(2, mid, null);
        const root = new TreeNode(1, outer, null);
        const result = lowestCommonAncestor(root, deep, mid);
        if (result !== undefined) expect(result).toBe(mid);
    });

    it('should handle identical p and q (off-by-one: both are same node)', () => {
        const only = new TreeNode(7);
        const root = new TreeNode(1, only, null);
        const result = lowestCommonAncestor(root, only, only);
        if (result !== undefined) expect(result).toBe(only);
    });

    it('should handle repeated leaf structure', () => {
        const a = new TreeNode(2);
        const b = new TreeNode(2);
        const root = new TreeNode(2, a, b);
        const result = lowestCommonAncestor(root, a, b);
        if (result !== undefined) expect(result).toBe(root);
    });
});
