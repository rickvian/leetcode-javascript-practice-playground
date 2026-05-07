import { recoverTree, TreeNode } from '../0099-recover-binary-search-tree';

const inorder = (node, out = []) => {
    if (!node) return out;
    inorder(node.left, out);
    out.push(node.val);
    inorder(node.right, out);
    return out;
};

describe('0099-recover-binary-search-tree', () => {
    it('should do nothing for null root (min input)', () => {
        const root = null;
        recoverTree(root);
        expect(root).toBeNull();
    });

    it('should do nothing for a single-node tree', () => {
        const root = new TreeNode(1);
        recoverTree(root);
        expect(root.val).toBe(1);
    });

    it('should recover swapped adjacent nodes [1,3,null,null,2]', () => {
        const root = new TreeNode(1, null, new TreeNode(3, new TreeNode(2), null));
        recoverTree(root);
        const ordered = inorder(root);
        if (ordered[0] !== undefined) {
            const sorted = [...ordered].sort((a, b) => a - b);
            expect(ordered).toEqual(sorted);
        }
    });

    it('should recover swapped non-adjacent nodes [3,1,4,null,null,2]', () => {
        const root = new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2), null));
        recoverTree(root);
        const ordered = inorder(root);
        if (ordered[0] !== undefined) {
            const sorted = [...ordered].sort((a, b) => a - b);
            expect(ordered).toEqual(sorted);
        }
    });

    it('should handle negative values swapped ([-1, -3, null] in BST shape)', () => {
        const root = new TreeNode(-1, new TreeNode(-3, null, new TreeNode(-2)), null);
        recoverTree(root);
        const ordered = inorder(root);
        if (ordered[0] !== undefined) {
            const sorted = [...ordered].sort((a, b) => a - b);
            expect(ordered).toEqual(sorted);
        }
    });

    it('should preserve the set of values after recovery', () => {
        const root = new TreeNode(3, new TreeNode(1), new TreeNode(4, new TreeNode(2), null));
        const originalValues = inorder(root).sort((a, b) => a - b);
        recoverTree(root);
        const afterValues = inorder(root).sort((a, b) => a - b);
        expect(afterValues).toEqual(originalValues);
    });

    it('should recover two leaves swapped in a balanced BST', () => {
        const root = new TreeNode(5,
            new TreeNode(2, new TreeNode(1), new TreeNode(6)),
            new TreeNode(7, new TreeNode(3), new TreeNode(8)));
        recoverTree(root);
        const ordered = inorder(root);
        if (ordered[0] !== undefined) {
            const sorted = [...ordered].sort((a, b) => a - b);
            expect(ordered).toEqual(sorted);
        }
    });
});
