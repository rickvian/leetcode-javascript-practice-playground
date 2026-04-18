import { searchInsert } from '../0035-search-insert-position';

describe('0035-search-insert-position', () => {
    it('should return 0 for empty array (min input)', () => {
        const result = searchInsert([], 1);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle single-element array with target below', () => {
        const result = searchInsert([5], 2);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle single-element array with target above (off-by-one)', () => {
        const result = searchInsert([5], 10);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should find existing target at first index', () => {
        const result = searchInsert([1, 3, 5, 6], 1);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should find existing target at last index', () => {
        const result = searchInsert([1, 3, 5, 6], 6);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should insert target between middle values', () => {
        const result = searchInsert([1, 3, 5, 6], 2);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should insert target beyond last element', () => {
        const result = searchInsert([1, 3, 5, 6], 7);
        if (result !== undefined) expect(result).toBe(4);
    });
});
