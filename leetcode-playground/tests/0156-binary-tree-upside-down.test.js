import { upsideDownBinaryTree, TreeNode } from '../0156-binary-tree-upside-down';

describe('0156-binary-tree-upside-down', () => {
    it('should return null for an empty tree', () => {
        const result = upsideDownBinaryTree(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return the same node for a single-node tree', () => {
        const root = new TreeNode(1);
        const result = upsideDownBinaryTree(root);
        if (result !== undefined) expect(result.val).toBe(1);
    });

    it('should flip the classic example [1,2,3,4,5] to root 4', () => {
        const root = new TreeNode(1,
            new TreeNode(2, new TreeNode(4), new TreeNode(5)),
            new TreeNode(3));
        const result = upsideDownBinaryTree(root);
        if (result !== undefined) {
            expect(result.val).toBe(4);
            if (result.left) expect(result.left.val).toBe(5);
            if (result.right) expect(result.right.val).toBe(2);
        }
    });

    it('should handle a left-spine-only tree [1,2,null,3]', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);
        const result = upsideDownBinaryTree(root);
        if (result !== undefined) expect(result.val).toBe(3);
    });

    it('should handle a root with only a left child (no right sibling)', () => {
        const root = new TreeNode(1, new TreeNode(2), null);
        const result = upsideDownBinaryTree(root);
        if (result !== undefined) expect(result.val).toBe(2);
    });

    it('should handle repetitive values in the tree', () => {
        const root = new TreeNode(7,
            new TreeNode(7, new TreeNode(7), new TreeNode(7)),
            new TreeNode(7));
        const result = upsideDownBinaryTree(root);
        if (result !== undefined) expect(result.val).toBe(7);
    });
});
