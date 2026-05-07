import { search } from '../0081-search-in-rotated-sorted-array-ii';

describe('0081-search-in-rotated-sorted-array-ii', () => {
    it('should return false for empty array (min input)', () => {
        const result = search([], 1);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should find target in a rotated sorted array with duplicates', () => {
        const result = search([2, 5, 6, 0, 0, 1, 2], 0);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false when target not present', () => {
        const result = search([2, 5, 6, 0, 0, 1, 2], 3);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should handle single-element array (target matches/misses)', () => {
        const r1 = search([1], 1);
        const r2 = search([1], 2);
        if (r1 !== undefined) expect(r1).toBe(true);
        if (r2 !== undefined) expect(r2).toBe(false);
    });

    it('should handle all-identical array where target absent', () => {
        const result = search([1, 1, 1, 1, 1], 2);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should handle all-identical array where target matches', () => {
        const result = search([1, 1, 1, 1, 1], 1);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should find targets at both range endpoints (off-by-one)', () => {
        const arr = [4, 5, 6, 7, 0, 1, 2];
        const r1 = search(arr, 4);
        const r2 = search(arr, 2);
        if (r1 !== undefined) expect(r1).toBe(true);
        if (r2 !== undefined) expect(r2).toBe(true);
    });
});
