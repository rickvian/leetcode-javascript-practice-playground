import { TreeNode, BSTIterator } from '../0173-binary-search-tree-iterator';

describe('0173-binary-search-tree-iterator', () => {
    it('should handle single-node tree', () => {
        const root = new TreeNode(1);
        const iterator = new BSTIterator(root);
        expect(iterator.hasNext()).toBeTruthy();
        expect(iterator.next()).toEqual(1);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle left-only tree', () => {
        const root = new TreeNode(3, new TreeNode(2, new TreeNode(1)));
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(1);
        expect(iterator.next()).toEqual(2);
        expect(iterator.next()).toEqual(3);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle right-only tree', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(1);
        expect(iterator.next()).toEqual(2);
        expect(iterator.next()).toEqual(3);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should return values in ascending in-order for balanced tree', () => {
        const root = new TreeNode(7,
            new TreeNode(3, new TreeNode(1), new TreeNode(5)),
            new TreeNode(15, new TreeNode(9), new TreeNode(20))
        );
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(1);
        expect(iterator.next()).toEqual(3);
        expect(iterator.next()).toEqual(5);
        expect(iterator.next()).toEqual(7);
        expect(iterator.next()).toEqual(9);
        expect(iterator.next()).toEqual(15);
        expect(iterator.next()).toEqual(20);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle hasNext correctly during iteration', () => {
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        const iterator = new BSTIterator(root);
        expect(iterator.hasNext()).toBeTruthy();
        iterator.next();
        expect(iterator.hasNext()).toBeTruthy();
        iterator.next();
        expect(iterator.hasNext()).toBeTruthy();
        iterator.next();
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle tree with duplicate values', () => {
        const root = new TreeNode(5, new TreeNode(3), new TreeNode(5));
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(3);
        expect(iterator.next()).toEqual(5);
        expect(iterator.next()).toEqual(5);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle tree with negative values', () => {
        const root = new TreeNode(0, new TreeNode(-1), new TreeNode(1));
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(-1);
        expect(iterator.next()).toEqual(0);
        expect(iterator.next()).toEqual(1);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle two-node tree with left child', () => {
        const root = new TreeNode(2, new TreeNode(1));
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(1);
        expect(iterator.next()).toEqual(2);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle two-node tree with right child', () => {
        const root = new TreeNode(1, null, new TreeNode(2));
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(1);
        expect(iterator.next()).toEqual(2);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle larger tree with multiple levels', () => {
        const root = new TreeNode(10,
            new TreeNode(5, new TreeNode(3, new TreeNode(1), new TreeNode(4)), new TreeNode(7)),
            new TreeNode(15, new TreeNode(12), new TreeNode(20))
        );
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(1);
        expect(iterator.next()).toEqual(3);
        expect(iterator.next()).toEqual(4);
        expect(iterator.next()).toEqual(5);
        expect(iterator.next()).toEqual(7);
        expect(iterator.next()).toEqual(10);
        expect(iterator.next()).toEqual(12);
        expect(iterator.next()).toEqual(15);
        expect(iterator.next()).toEqual(20);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle tree from LeetCode example 1', () => {
        const root = new TreeNode(7, new TreeNode(3), new TreeNode(15, new TreeNode(9), new TreeNode(20)));
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(3);
        expect(iterator.next()).toEqual(7);
        expect(iterator.next()).toEqual(9);
        expect(iterator.hasNext()).toBeTruthy();
        expect(iterator.next()).toEqual(15);
        expect(iterator.hasNext()).toBeTruthy();
        expect(iterator.next()).toEqual(20);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle tree where hasNext is called multiple times', () => {
        const root = new TreeNode(1, null, new TreeNode(2));
        const iterator = new BSTIterator(root);
        expect(iterator.hasNext()).toBeTruthy();
        expect(iterator.hasNext()).toBeTruthy();
        expect(iterator.next()).toEqual(1);
        expect(iterator.hasNext()).toBeTruthy();
        expect(iterator.hasNext()).toBeTruthy();
        expect(iterator.next()).toEqual(2);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle tree with all elements less than root', () => {
        const root = new TreeNode(4, new TreeNode(3, new TreeNode(2, new TreeNode(1))));
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(1);
        expect(iterator.next()).toEqual(2);
        expect(iterator.next()).toEqual(3);
        expect(iterator.next()).toEqual(4);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle tree with all elements greater than root', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4))));
        const iterator = new BSTIterator(root);
        expect(iterator.next()).toEqual(1);
        expect(iterator.next()).toEqual(2);
        expect(iterator.next()).toEqual(3);
        expect(iterator.next()).toEqual(4);
        expect(iterator.hasNext()).toBeFalsy();
    });

    it('should handle next() calls alternating with hasNext()', () => {
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(3));
        const iterator = new BSTIterator(root);
        expect(iterator.hasNext()).toBeTruthy();
        expect(iterator.next()).toEqual(1);
        expect(iterator.hasNext()).toBeTruthy();
        expect(iterator.next()).toEqual(2);
        expect(iterator.hasNext()).toBeTruthy();
        expect(iterator.next()).toEqual(3);
        expect(iterator.hasNext()).toBeFalsy();
    });
});
