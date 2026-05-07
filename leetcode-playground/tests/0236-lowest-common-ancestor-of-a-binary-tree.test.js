import { TreeNode, lowestCommonAncestor } from '../0236-lowest-common-ancestor-of-a-binary-tree';

describe('0236-lowest-common-ancestor-of-a-binary-tree', () => {
    it('should handle LeetCode example 1: p=5, q=1, LCA is root 3', () => {
        const root = new TreeNode(3);
        const p = new TreeNode(5);
        const q = new TreeNode(1);
        root.left = p;
        root.right = q;
        p.left = new TreeNode(6);
        const n2 = new TreeNode(2);
        p.right = n2;
        q.left = new TreeNode(0);
        q.right = new TreeNode(8);
        n2.left = new TreeNode(7);
        n2.right = new TreeNode(4);
        expect(lowestCommonAncestor(root, p, q).val).toEqual(3);
    });

    it('should handle LeetCode example 2: p=5, q=4, LCA is 5 (ancestor of other)', () => {
        const root = new TreeNode(3);
        const p = new TreeNode(5);
        const q1 = new TreeNode(1);
        root.left = p;
        root.right = q1;
        p.left = new TreeNode(6);
        const n2 = new TreeNode(2);
        p.right = n2;
        q1.left = new TreeNode(0);
        q1.right = new TreeNode(8);
        n2.left = new TreeNode(7);
        const q = new TreeNode(4);
        n2.right = q;
        expect(lowestCommonAncestor(root, p, q).val).toEqual(5);
    });

    it('should handle LeetCode example 3: two-node tree, p=root, q=child', () => {
        const p = new TreeNode(1);
        const q = new TreeNode(2);
        p.left = q;
        expect(lowestCommonAncestor(p, p, q).val).toEqual(1);
    });

    it('should return root as LCA when nodes are in different subtrees', () => {
        const root = new TreeNode(1);
        const p = new TreeNode(2);
        const q = new TreeNode(3);
        root.left = p;
        root.right = q;
        expect(lowestCommonAncestor(root, p, q).val).toEqual(1);
    });

    it('should return ancestor when one node is ancestor of the other', () => {
        const root = new TreeNode(1);
        const p = new TreeNode(2);
        const child = new TreeNode(3);
        root.left = p;
        p.left = child;
        expect(lowestCommonAncestor(root, p, child).val).toEqual(2);
    });

    it('should handle nodes in deep left subtree sharing a common ancestor', () => {
        const root = new TreeNode(3);
        const a = new TreeNode(5);
        const b = new TreeNode(1);
        root.left = a;
        root.right = b;
        const p = new TreeNode(6);
        const q = new TreeNode(7);
        a.left = p;
        const n2 = new TreeNode(2);
        a.right = n2;
        n2.left = q;
        expect(lowestCommonAncestor(root, p, q).val).toEqual(5);
    });

    it('should handle right-only tree where LCA is parent of both', () => {
        const root = new TreeNode(1);
        const mid = new TreeNode(2);
        const p = new TreeNode(3);
        const q = new TreeNode(4);
        root.right = mid;
        mid.left = p;
        mid.right = q;
        expect(lowestCommonAncestor(root, p, q).val).toEqual(2);
    });
});
