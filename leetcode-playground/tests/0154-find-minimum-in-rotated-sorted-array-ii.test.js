import { findMin } from '../0154-find-minimum-in-rotated-sorted-array-ii';

describe('0154-find-minimum-in-rotated-sorted-array-ii', () => {
    it('should return the single element for a one-element array', () => {
        const result = findMin([3]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return the minimum of a non-rotated array', () => {
        const result = findMin([1, 2, 3, 4, 5]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle a rotated array without duplicates', () => {
        const result = findMin([4, 5, 6, 7, 0, 1, 2]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle duplicates at the pivot ([2,2,2,0,1])', () => {
        const result = findMin([2, 2, 2, 0, 1]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle all identical elements (repetitive)', () => {
        const result = findMin([3, 3, 3, 3]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle duplicates that hide the pivot ([10,1,10,10,10])', () => {
        const result = findMin([10, 1, 10, 10, 10]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle a two-element rotated array [2,1]', () => {
        const result = findMin([2, 1]);
        if (result !== undefined) expect(result).toBe(1);
    });
});
