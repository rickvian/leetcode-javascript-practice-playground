import { searchRange } from '../0034-find-first-and-last-position-of-element-in-sorted-array';

describe('0034-find-first-and-last-position-of-element-in-sorted-array', () => {
    it('should return [-1,-1] for empty array', () => {
        const result = searchRange([], 5);
        if (result !== undefined) expect(result).toEqual([-1, -1]);
    });

    it('should handle single-element array when target matches', () => {
        const result = searchRange([5], 5);
        if (result !== undefined) expect(result).toEqual([0, 0]);
    });

    it('should handle single-element array when target is missing', () => {
        const result = searchRange([5], 7);
        if (result !== undefined) expect(result).toEqual([-1, -1]);
    });

    it('should handle target at first index (off-by-one)', () => {
        const result = searchRange([1, 2, 3, 4, 5], 1);
        if (result !== undefined) expect(result).toEqual([0, 0]);
    });

    it('should handle target at last index (off-by-one)', () => {
        const result = searchRange([1, 2, 3, 4, 5], 5);
        if (result !== undefined) expect(result).toEqual([4, 4]);
    });

    it('should handle repetitive identical target values across array', () => {
        const result = searchRange([2, 2, 2, 2, 2], 2);
        if (result !== undefined) expect(result).toEqual([0, 4]);
    });

    it('should handle target not in range', () => {
        const result = searchRange([5, 7, 7, 8, 8, 10], 6);
        if (result !== undefined) expect(result).toEqual([-1, -1]);
    });
});
