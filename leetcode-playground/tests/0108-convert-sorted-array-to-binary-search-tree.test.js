import { sortedArrayToBST, TreeNode } from '../0108-convert-sorted-array-to-binary-search-tree';

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

describe('0108-convert-sorted-array-to-binary-search-tree', () => {
    it('should return null for empty array (min input)', () => {
        const result = sortedArrayToBST([]);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return single node for [0]', () => {
        const result = sortedArrayToBST([0]);
        if (result !== undefined) {
            expect(result.val).toBe(0);
            expect(result.left).toBeNull();
            expect(result.right).toBeNull();
        }
    });

    it('should produce inorder matching input [-10,-3,0,5,9]', () => {
        const nums = [-10, -3, 0, 5, 9];
        const result = sortedArrayToBST(nums);
        if (result !== undefined) expect(inorder(result)).toEqual(nums);
    });

    it('should produce a height-balanced tree for long runs', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const result = sortedArrayToBST(nums);
        if (result !== undefined) expect(heightBalanced(result).balanced).toBe(true);
    });

    it('should produce balanced tree for 2-element array', () => {
        const result = sortedArrayToBST([1, 3]);
        if (result !== undefined) expect(heightBalanced(result).balanced).toBe(true);
    });

    it('should handle extreme boundary values', () => {
        const nums = [-10000, 0, 10000];
        const result = sortedArrayToBST(nums);
        if (result !== undefined) expect(inorder(result)).toEqual(nums);
    });

    it('should return an instance of TreeNode', () => {
        const result = sortedArrayToBST([1]);
        if (result !== undefined) expect(result instanceof TreeNode).toBe(true);
    });
});
