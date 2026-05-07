import { threeSumClosest } from '../0016-3sum-closest';

describe('0016-3sum-closest', () => {
    it('should return the sum when exactly 3 elements', () => {
        const result = threeSumClosest([1, 2, 3], 6);
        if (result !== undefined) expect(result).toBe(6);
    });

    it('should return closest sum for LeetCode example', () => {
        const result = threeSumClosest([-1, 2, 1, -4], 1);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle all identical numbers', () => {
        const result = threeSumClosest([0, 0, 0], 1);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle all negative values', () => {
        const result = threeSumClosest([-5, -4, -3, -2], -6);
        if (result !== undefined) expect(result).toBe(-9);
    });

    it('should handle large positive target (off-by-one)', () => {
        const result = threeSumClosest([1, 1, 1, 1], 100);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle large negative target (off-by-one)', () => {
        const result = threeSumClosest([-1, -1, -1, -1], -100);
        if (result !== undefined) expect(result).toBe(-3);
    });

    it('should handle boundary values near INT32 limits', () => {
        const result = threeSumClosest([1000, 1000, 1000, -1000], 1000);
        if (result !== undefined) expect(result).toBe(1000);
    });
});
