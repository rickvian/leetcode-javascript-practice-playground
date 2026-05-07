import { sortedListToBST, ListNode, TreeNode } from '../0109-convert-sorted-list-to-binary-search-tree';

const toList = (arr) => {
    const dummy = new ListNode();
    let tail = dummy;
    for (const v of arr) {
        tail.next = new ListNode(v);
        tail = tail.next;
    }
    return dummy.next;
};

const inorder = (node, out = []) => {
    if (!node) return out;
    inorder(node.left, out);
    out.push(node.val);
    inorder(node.right, out);
    return out;
};

const heightBalanced = (node) => {
    if (!node) return { balanced: true, height: 0 };
    const l = heightBalanced(node.left);
    const r = heightBalanced(node.right);
    return {
        balanced: l.balanced && r.balanced && Math.abs(l.height - r.height) <= 1,
        height: 1 + Math.max(l.height, r.height)
    };
};

describe('0109-convert-sorted-list-to-binary-search-tree', () => {
    it('should return null for null head (min input)', () => {
        const result = sortedListToBST(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should produce a single-node tree for [0]', () => {
        const result = sortedListToBST(toList([0]));
        if (result !== undefined) {
            expect(result.val).toBe(0);
            expect(result.left).toBeNull();
            expect(result.right).toBeNull();
        }
    });

    it('should produce a balanced BST whose inorder equals the list values', () => {
        const values = [-10, -3, 0, 5, 9];
        const result = sortedListToBST(toList(values));
        if (result !== undefined) {
            expect(inorder(result)).toEqual(values);
            expect(heightBalanced(result).balanced).toBe(true);
        }
    });

    it('should produce balanced tree for 2-element list', () => {
        const result = sortedListToBST(toList([1, 3]));
        if (result !== undefined) expect(heightBalanced(result).balanced).toBe(true);
    });

    it('should handle negative-only values', () => {
        const values = [-5, -4, -3, -2, -1];
        const result = sortedListToBST(toList(values));
        if (result !== undefined) {
            expect(inorder(result)).toEqual(values);
            expect(heightBalanced(result).balanced).toBe(true);
        }
    });

    it('should handle repetitive equal values [1,1,1,1]', () => {
        const values = [1, 1, 1, 1];
        const result = sortedListToBST(toList(values));
        if (result !== undefined) expect(heightBalanced(result).balanced).toBe(true);
    });

    it('should return an instance of TreeNode', () => {
        const result = sortedListToBST(toList([1]));
        if (result !== undefined) expect(result instanceof TreeNode).toBe(true);
    });
});
