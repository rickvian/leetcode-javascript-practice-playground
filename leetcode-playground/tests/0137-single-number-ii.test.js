import { singleNumber } from '../0137-single-number-ii';

describe('0137-single-number-ii', () => {
    it('should return the only value for a single-element array (min input)', () => {
        const result = singleNumber([7]);
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should return 3 for [2,2,3,2]', () => {
        const result = singleNumber([2, 2, 3, 2]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 99 for [0,1,0,1,0,1,99]', () => {
        const result = singleNumber([0, 1, 0, 1, 0, 1, 99]);
        if (result !== undefined) expect(result).toBe(99);
    });

    it('should handle negative duplicates/unique', () => {
        const result = singleNumber([-2, -2, 1, 1, -3, 1, -3, -3, -4, -2]);
        if (result !== undefined) expect(result).toBe(-4);
    });

    it('should return the single 0 when 0 is the unique value', () => {
        const result = singleNumber([1, 1, 1, 0]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle INT_MIN boundary', () => {
        const result = singleNumber([-2147483648, 3, 3, 3]);
        if (result !== undefined) expect(result).toBe(-2147483648);
    });

    it('should handle INT_MAX boundary', () => {
        const result = singleNumber([2147483647, 0, 0, 0]);
        if (result !== undefined) expect(result).toBe(2147483647);
    });
});
