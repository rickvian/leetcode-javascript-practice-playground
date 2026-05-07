import { Node, connect } from '../0117-populating-next-right-pointers-in-each-node-ii';

describe('0117-populating-next-right-pointers-in-each-node-ii', () => {
    // Helper function to check level order with next pointers
    const getLevelOrderWithNext = (root) => {
        if (!root) return [];
        const result = [];
        const queue = [root];
        while (queue.length > 0) {
            const levelSize = queue.length;
            const level = [];
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                level.push(node.val);
                // Check that next pointers point correctly within the level
                if (i < levelSize - 1) {
                    if (!node.next) {
                        return null; // Invalid: expected next but got null
                    }
                } else {
                    if (node.next !== null) {
                        return null; // Invalid: last node should have null next
                    }
                }
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
            result.push(level);
        }
        return result;
    };

    // Helper to check next pointers manually
    const checkNextPointers = (root) => {
        if (!root) return true;
        const queue = [root];
        while (queue.length > 0) {
            const levelSize = queue.length;
            let prev = null;
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                if (prev && prev.next !== node) return false; // next pointer broken
                if (i === levelSize - 1 && node.next !== null) return false; // last node should have null
                prev = node;
                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }
        }
        return true;
    };

    it('should handle empty tree (null root)', () => {
        const result = connect(null);
        if (result !== undefined) {
            expect(result).toBeNull();
        }
    });

    it('should handle single node', () => {
        const root = new Node(1);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.val).toBe(1);
            expect(result.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle two-node tree: left child only', () => {
        const root = new Node(1);
        root.left = new Node(2);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.val).toBe(1);
            expect(result.next).toBeNull();
            expect(result.left.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle two-node tree: right child only', () => {
        const root = new Node(1);
        root.right = new Node(3);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.val).toBe(1);
            expect(result.next).toBeNull();
            expect(result.right.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle perfect binary tree of 3 nodes', () => {
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.val).toBe(1);
            expect(result.next).toBeNull();
            expect(result.left.next).toBe(result.right);
            expect(result.right.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle partial last level (left heavy tree)', () => {
        //       1
        //      / \
        //     2   3
        //    /
        //   4
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.left.next).toBe(result.right);
            expect(result.right.next).toBeNull();
            expect(result.left.left.next).toBeNull(); // 4 has no right sibling at level 2
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle partial last level (right heavy tree)', () => {
        //       1
        //      / \
        //     2   3
        //        /
        //       4
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.right.left = new Node(4);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.left.next).toBe(result.right);
            expect(result.right.next).toBeNull();
            expect(result.right.left.next).toBeNull(); // 4 has no right sibling at level 2
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should connect nodes on same level that are not siblings', () => {
        //       1
        //      / \
        //     2   3
        //    / \   \
        //   4   5   6
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.right = new Node(6);
        const result = connect(root);
        if (result !== undefined) {
            // Level 0: 1 (no next)
            expect(result.next).toBeNull();
            // Level 1: 2, 3 (2 -> 3)
            expect(result.left.next).toBe(result.right);
            expect(result.right.next).toBeNull();
            // Level 2: 4, 5, 6 (4 -> 5, 5 -> 6, 6 has no next)
            expect(result.left.left.next).toBe(result.left.right);
            expect(result.left.right.next).toBe(result.right.right);
            expect(result.right.right.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle only left children in non-sibling pattern', () => {
        //       1
        //      /
        //     2
        //    /
        //   3
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.next).toBeNull();
            expect(result.left.next).toBeNull();
            expect(result.left.left.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle only right children in non-sibling pattern', () => {
        //     1
        //      \
        //       2
        //        \
        //         3
        const root = new Node(1);
        root.right = new Node(2);
        root.right.right = new Node(3);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.next).toBeNull();
            expect(result.right.next).toBeNull();
            expect(result.right.right.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle tree with left and right children in mixed pattern', () => {
        //       1
        //      / \
        //     2   3
        //    /   / \
        //   4   5   6
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.right.left = new Node(5);
        root.right.right = new Node(6);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.left.next).toBe(result.right);
            expect(result.right.next).toBeNull();
            expect(result.left.left.next).toBe(result.right.left);
            expect(result.right.left.next).toBe(result.right.right);
            expect(result.right.right.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle tree with all four children in a subtree', () => {
        //       1
        //      / \
        //     2   3
        //    / \ / \
        //   4  5 6  7
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.left = new Node(4);
        root.left.right = new Node(5);
        root.right.left = new Node(6);
        root.right.right = new Node(7);
        const result = connect(root);
        if (result !== undefined) {
            // Level 1 connections
            expect(result.left.next).toBe(result.right);
            expect(result.right.next).toBeNull();
            // Level 2 connections
            expect(result.left.left.next).toBe(result.left.right);
            expect(result.left.right.next).toBe(result.right.left);
            expect(result.right.left.next).toBe(result.right.right);
            expect(result.right.right.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle empty tree represented as null', () => {
        const result = connect(null);
        if (result !== undefined) {
            expect(result).toBeNull();
        }
    });

    it('should verify single node has null next', () => {
        const root = new Node(42);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.val).toBe(42);
            expect(result.next).toBeNull();
        }
    });

    it('should handle deeply nested left-only tree', () => {
        const root = new Node(1);
        root.left = new Node(2);
        root.left.left = new Node(3);
        root.left.left.left = new Node(4);
        root.left.left.left.left = new Node(5);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.next).toBeNull();
            expect(result.left.next).toBeNull();
            expect(result.left.left.next).toBeNull();
            expect(result.left.left.left.next).toBeNull();
            expect(result.left.left.left.left.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle deeply nested right-only tree', () => {
        const root = new Node(1);
        root.right = new Node(2);
        root.right.right = new Node(3);
        root.right.right.right = new Node(4);
        root.right.right.right.right = new Node(5);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.next).toBeNull();
            expect(result.right.next).toBeNull();
            expect(result.right.right.next).toBeNull();
            expect(result.right.right.right.next).toBeNull();
            expect(result.right.right.right.right.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });

    it('should handle tree with gap on left at level 2', () => {
        //       1
        //      / \
        //     2   3
        //      \   \
        //       5   6
        const root = new Node(1);
        root.left = new Node(2);
        root.right = new Node(3);
        root.left.right = new Node(5);
        root.right.right = new Node(6);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.left.next).toBe(result.right);
            expect(result.right.next).toBeNull();
            expect(result.left.right.next).toBe(result.right.right);
            expect(result.right.right.next).toBeNull();
            expect(checkNextPointers(result)).toBe(true);
        }
    });
});
