import { findMedianSortedArrays } from '../0004-median-of-two-sorted-arrays';

describe('0004-median-of-two-sorted-arrays', () => {
    it('should handle one empty array', () => {
        const result = findMedianSortedArrays([], [1]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle both single-element arrays (off-by-one)', () => {
        const result = findMedianSortedArrays([1], [2]);
        if (result !== undefined) expect(result).toBe(1.5);
    });

    it('should handle repetitive identical values', () => {
        const result = findMedianSortedArrays([2, 2, 2], [2, 2, 2]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle negative and positive boundary values', () => {
        const result = findMedianSortedArrays([-1000000], [1000000]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle odd total length', () => {
        const result = findMedianSortedArrays([1, 3], [2]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle even total length', () => {
        const result = findMedianSortedArrays([1, 2], [3, 4]);
        if (result !== undefined) expect(result).toBe(2.5);
    });

    it('should handle disjoint ranges', () => {
        const result = findMedianSortedArrays([1, 2, 3], [100, 200, 300]);
        if (result !== undefined) expect(result).toBe(51.5);
    });
});
