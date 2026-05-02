import { TreeNode, flatten } from '../0114-flatten-binary-tree-to-linked-list';

describe('0114-flatten-binary-tree-to-linked-list', () => {
    const flattenedToArray = (node) => {
        const result = [];
        while (node) {
            result.push(node.val);
            node = node.right;
        }
        return result;
    };

    const preorderToArray = (node) => {
        if (!node) return [];
        return [node.val, ...preorderToArray(node.left), ...preorderToArray(node.right)];
    };

    it('should handle empty tree (null)', () => {
        if (flatten !== undefined) {
            flatten(null);
            expect(true).toBe(true);
        }
    });

    it('should handle single node tree', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            flatten(root);
            expect(flattenedToArray(root)).toEqual([1]);
            expect(root.left).toBeNull();
            expect(root.right).toBeNull();
        }
    });

    it('should handle two-node left child', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            const expected = preorderToArray(root);
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
            expect(root.right.val).toBe(2);
        }
    });

    it('should handle two-node right child', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.right = new TreeNode(2);
            flatten(root);
            expect(flattenedToArray(root)).toEqual([1, 2]);
            expect(root.left).toBeNull();
            expect(root.right.val).toBe(2);
        }
    });

    it('should handle already right-only list (no-op)', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.right = new TreeNode(2);
            root.right.right = new TreeNode(3);
            const originalRight = root.right;
            flatten(root);
            expect(flattenedToArray(root)).toEqual([1, 2, 3]);
            expect(root.right).toBe(originalRight);
        }
    });

    it('should handle left-only chain', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.left.left = new TreeNode(3);
            const expected = [1, 2, 3];
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
        }
    });

    it('should handle right-only chain', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.right = new TreeNode(2);
            root.right.right = new TreeNode(3);
            flatten(root);
            expect(flattenedToArray(root)).toEqual([1, 2, 3]);
            expect(root.left).toBeNull();
        }
    });

    it('official example 1: balanced tree [1,2,5,3,4,null,6]', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(5);
            root.left.left = new TreeNode(3);
            root.left.right = new TreeNode(4);
            root.right.right = new TreeNode(6);
            const expected = preorderToArray(root);
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
        }
    });

    it('official example 2: empty tree []', () => {
        if (flatten !== undefined) {
            flatten(null);
            expect(true).toBe(true);
        }
    });

    it('should flatten complex tree with multiple levels', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(5);
            root.left.left = new TreeNode(3);
            root.left.right = new TreeNode(4);
            root.right.right = new TreeNode(6);
            root.left.left.left = new TreeNode(7);
            const expected = preorderToArray(root);
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
        }
    });

    it('should flatten tree with only left subtree', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.left.left = new TreeNode(3);
            root.left.right = new TreeNode(4);
            const expected = [1, 2, 3, 4];
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
        }
    });

    it('should flatten tree with only right subtree', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.right = new TreeNode(2);
            root.right.left = new TreeNode(3);
            root.right.right = new TreeNode(4);
            const expected = [1, 2, 3, 4];
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
        }
    });

    it('should flatten three-node tree: root with left and right', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            const expected = [1, 2, 3];
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
        }
    });

    it('should flatten deep left-heavy tree', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.left.left = new TreeNode(3);
            root.left.left.left = new TreeNode(4);
            root.left.left.left.left = new TreeNode(5);
            const expected = [1, 2, 3, 4, 5];
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
        }
    });

    it('should flatten tree with mixed structure and right subtree at end', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.left.right = new TreeNode(3);
            root.right = new TreeNode(4);
            const expected = [1, 2, 3, 4];
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
        }
    });

    it('should flatten complete binary tree', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(7);
            const expected = [1, 2, 4, 5, 3, 6, 7];
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
        }
    });

    it('should flatten tree with right child and left subtree', () => {
        if (flatten !== undefined) {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.left.left = new TreeNode(3);
            root.right = new TreeNode(4);
            root.right.left = new TreeNode(5);
            const expected = [1, 2, 3, 4, 5];
            flatten(root);
            expect(flattenedToArray(root)).toEqual(expected);
            expect(root.left).toBeNull();
        }
    });
});
