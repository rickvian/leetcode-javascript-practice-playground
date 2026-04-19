import { singleNumber } from '../0136-single-number';

describe('0136-single-number', () => {
    it('should return the only value for a single-element array (min input)', () => {
        const result = singleNumber([42]);
        if (result !== undefined) expect(result).toBe(42);
    });

    it('should return 1 for [2,2,1]', () => {
        const result = singleNumber([2, 2, 1]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 4 for [4,1,2,1,2]', () => {
        const result = singleNumber([4, 1, 2, 1, 2]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 1 for [1] (edge: lone odd-count element = itself)', () => {
        const result = singleNumber([1]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle negative numbers', () => {
        const result = singleNumber([-1, -1, -2]);
        if (result !== undefined) expect(result).toBe(-2);
    });

    it('should handle zero as the single element', () => {
        const result = singleNumber([1, 1, 0, 2, 2]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle boundary 32-bit integer', () => {
        const result = singleNumber([2147483647, 1, 1]);
        if (result !== undefined) expect(result).toBe(2147483647);
    });
});
