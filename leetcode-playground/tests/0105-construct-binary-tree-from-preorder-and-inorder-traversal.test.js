import { buildTree, TreeNode } from '../0105-construct-binary-tree-from-preorder-and-inorder-traversal';

describe('0105-construct-binary-tree-from-preorder-and-inorder-traversal', () => {
    it('should build tree with root=3, left=9, right=20(left=15, right=7)', () => {
        const result = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
        expect(result.val).toBe(3);
        expect(result.left.val).toBe(9);
        expect(result.right.val).toBe(20);
        expect(result.right.left.val).toBe(15);
        expect(result.right.right.val).toBe(7);
    });

    it('should return tree with root=-1 for preorder=[-1], inorder=[-1]', () => {
        const result = buildTree([-1], [-1]);
        expect(result.val).toBe(-1);
        expect(result.left).toBeNull();
        expect(result.right).toBeNull();
    });

    it('should return null for empty preorder and inorder arrays', () => {
        expect(buildTree([], [])).toBeNull();
    });

    it('should build tree with root=1, left=2 for preorder=[1,2], inorder=[2,1]', () => {
        const result = buildTree([1, 2], [2, 1]);
        expect(result.val).toBe(1);
        expect(result.left.val).toBe(2);
        expect(result.right).toBeNull();
    });

    it('should build tree with root=1, right=2 for preorder=[1,2], inorder=[1,2]', () => {
        const result = buildTree([1, 2], [1, 2]);
        expect(result.val).toBe(1);
        expect(result.left).toBeNull();
        expect(result.right.val).toBe(2);
    });
});
