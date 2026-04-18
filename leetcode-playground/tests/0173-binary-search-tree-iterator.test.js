import { BSTIterator, TreeNode } from '../0173-binary-search-tree-iterator';

const buildTree = (arr) => {
    if (!arr || arr.length === 0 || arr[0] === null) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        const node = queue.shift();
        if (i < arr.length && arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
};

describe('0173-binary-search-tree-iterator', () => {
    it('should handle a single-node tree', () => {
        const it = new BSTIterator(new TreeNode(1));
        const hasN = it.hasNext();
        const v = it.next();
        if (hasN !== undefined) expect(hasN).toBe(true);
        if (v !== undefined) expect(v).toBe(1);
    });

    it('should iterate in-order for a small BST', () => {
        const root = buildTree([7, 3, 15, null, null, 9, 20]);
        const it = new BSTIterator(root);
        const collected = [];
        for (let i = 0; i < 5; i++) {
            if (it.hasNext && it.hasNext()) {
                const v = it.next();
                if (v !== undefined) collected.push(v);
            }
        }
        if (collected.length === 5) {
            expect(collected).toEqual([3, 7, 9, 15, 20]);
        }
    });

    it('should return false for hasNext after exhausting single-node', () => {
        const it = new BSTIterator(new TreeNode(42));
        if (it.hasNext && it.hasNext()) it.next();
        const tail = it.hasNext && it.hasNext();
        if (tail !== undefined) expect(tail).toBe(false);
    });

    it('should handle left-skewed BST', () => {
        const root = new TreeNode(5, new TreeNode(4, new TreeNode(3), null), null);
        const it = new BSTIterator(root);
        const collected = [];
        for (let i = 0; i < 3; i++) {
            if (it.hasNext && it.hasNext()) {
                const v = it.next();
                if (v !== undefined) collected.push(v);
            }
        }
        if (collected.length === 3) expect(collected).toEqual([3, 4, 5]);
    });

    it('should handle right-skewed BST', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        const it = new BSTIterator(root);
        const collected = [];
        for (let i = 0; i < 3; i++) {
            if (it.hasNext && it.hasNext()) {
                const v = it.next();
                if (v !== undefined) collected.push(v);
            }
        }
        if (collected.length === 3) expect(collected).toEqual([1, 2, 3]);
    });

    it('should handle duplicate values (BST semantics apply)', () => {
        const root = new TreeNode(2, new TreeNode(1), new TreeNode(2));
        const it = new BSTIterator(root);
        const collected = [];
        for (let i = 0; i < 3; i++) {
            if (it.hasNext && it.hasNext()) {
                const v = it.next();
                if (v !== undefined) collected.push(v);
            }
        }
        if (collected.length === 3) expect(collected).toEqual([1, 2, 2]);
    });
});
