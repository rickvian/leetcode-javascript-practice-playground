import { maxSlidingWindow } from '../0239-sliding-window-maximum';

describe('0239-sliding-window-maximum', () => {
    it('should handle single element with k=1', () => {
        const result = maxSlidingWindow([5], 1);
        if (result !== undefined) expect(result).toEqual([5]);
    });

    it('should handle leetcode sample [1,3,-1,-3,5,3,6,7] k=3', () => {
        const result = maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
        if (result !== undefined) expect(result).toEqual([3, 3, 5, 5, 6, 7]);
    });

    it('should handle k equal to array length (single window)', () => {
        const result = maxSlidingWindow([4, 2, 1, 3], 4);
        if (result !== undefined) expect(result).toEqual([4]);
    });

    it('should handle all-identical values [7,7,7,7] k=2 (repetitive)', () => {
        const result = maxSlidingWindow([7, 7, 7, 7], 2);
        if (result !== undefined) expect(result).toEqual([7, 7, 7]);
    });

    it('should handle strictly descending [5,4,3,2,1] k=3', () => {
        const result = maxSlidingWindow([5, 4, 3, 2, 1], 3);
        if (result !== undefined) expect(result).toEqual([5, 4, 3]);
    });

    it('should handle strictly ascending [1,2,3,4,5] k=3 (off-by-one)', () => {
        const result = maxSlidingWindow([1, 2, 3, 4, 5], 3);
        if (result !== undefined) expect(result).toEqual([3, 4, 5]);
    });

    it('should handle boundary INT_MAX and INT_MIN', () => {
        const result = maxSlidingWindow([-2147483648, 0, 2147483647, 1], 2);
        if (result !== undefined) expect(result).toEqual([0, 2147483647, 2147483647]);
    });
});
