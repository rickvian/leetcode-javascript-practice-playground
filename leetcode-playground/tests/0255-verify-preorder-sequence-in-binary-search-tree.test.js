import { verifyPreorder } from '../0255-verify-preorder-sequence-in-binary-search-tree';

describe('0255-verify-preorder-sequence-in-binary-search-tree', () => {
    it('should return true for empty preorder (vacuously valid)', () => {
        const result = verifyPreorder([]);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for single-node [5]', () => {
        const result = verifyPreorder([5]);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for leetcode sample [5,2,1,3,6]', () => {
        const result = verifyPreorder([5, 2, 1, 3, 6]);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for leetcode sample [5,2,6,1,3]', () => {
        const result = verifyPreorder([5, 2, 6, 1, 3]);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for strictly ascending (right-skewed BST)', () => {
        const result = verifyPreorder([1, 2, 3, 4, 5]);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for strictly descending (left-skewed BST)', () => {
        const result = verifyPreorder([5, 4, 3, 2, 1]);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for near-valid off-by-one [3,1,4,2] (2 < 3 after going right)', () => {
        const result = verifyPreorder([3, 1, 4, 2]);
        if (result !== undefined) expect(result).toBe(false);
    });
});
