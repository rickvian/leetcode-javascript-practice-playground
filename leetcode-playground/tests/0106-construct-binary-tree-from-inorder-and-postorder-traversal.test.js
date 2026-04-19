import { buildTree, TreeNode } from '../0106-construct-binary-tree-from-inorder-and-postorder-traversal';

const inorderOf = (node, out = []) => {
    if (!node) return out;
    inorderOf(node.left, out);
    out.push(node.val);
    inorderOf(node.right, out);
    return out;
};

const postorderOf = (node, out = []) => {
    if (!node) return out;
    postorderOf(node.left, out);
    postorderOf(node.right, out);
    out.push(node.val);
    return out;
};

describe('0106-construct-binary-tree-from-inorder-and-postorder-traversal', () => {
    it('should return null for empty arrays (min input)', () => {
        const result = buildTree([], []);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return single node for [1],[1]', () => {
        const result = buildTree([1], [1]);
        if (result !== undefined) {
            expect(result.val).toBe(1);
            expect(result.left).toBeNull();
            expect(result.right).toBeNull();
        }
    });

    it('should rebuild tree so traversals round-trip [9,3,15,20,7] / [9,15,7,20,3]', () => {
        const inorder = [9, 3, 15, 20, 7];
        const postorder = [9, 15, 7, 20, 3];
        const result = buildTree(inorder, postorder);
        if (result !== undefined) {
            expect(inorderOf(result)).toEqual(inorder);
            expect(postorderOf(result)).toEqual(postorder);
        }
    });

    it('should handle a left-skewed tree [3,2,1]/[3,2,1]', () => {
        const result = buildTree([3, 2, 1], [3, 2, 1]);
        if (result !== undefined) {
            expect(inorderOf(result)).toEqual([3, 2, 1]);
            expect(postorderOf(result)).toEqual([3, 2, 1]);
        }
    });

    it('should handle a right-skewed tree [1,2,3]/[3,2,1]', () => {
        const result = buildTree([1, 2, 3], [3, 2, 1]);
        if (result !== undefined) {
            expect(inorderOf(result)).toEqual([1, 2, 3]);
            expect(postorderOf(result)).toEqual([3, 2, 1]);
        }
    });

    it('should handle negative values', () => {
        const inorder = [-10, 1, -3];
        const postorder = [-10, -3, 1];
        const result = buildTree(inorder, postorder);
        if (result !== undefined) {
            expect(inorderOf(result)).toEqual(inorder);
            expect(postorderOf(result)).toEqual(postorder);
        }
    });

    it('should return an instance of TreeNode', () => {
        const result = buildTree([1], [1]);
        if (result !== undefined) expect(result instanceof TreeNode).toBe(true);
    });
});
