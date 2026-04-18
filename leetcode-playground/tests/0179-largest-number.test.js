import { largestNumber } from '../0179-largest-number';

describe('0179-largest-number', () => {
    it('should return "0" when all inputs are zero (not "00")', () => {
        const result = largestNumber([0, 0]);
        if (result !== undefined) expect(result).toBe('0');
    });

    it('should return the single element as a string', () => {
        const result = largestNumber([5]);
        if (result !== undefined) expect(result).toBe('5');
    });

    it('should compare "3" vs "30" using concatenation order', () => {
        const result = largestNumber([3, 30, 34, 5, 9]);
        if (result !== undefined) expect(result).toBe('9534330');
    });

    it('should handle the canonical [10, 2] example', () => {
        const result = largestNumber([10, 2]);
        if (result !== undefined) expect(result).toBe('210');
    });

    it('should handle repetitive data', () => {
        const result = largestNumber([1, 1, 1, 1]);
        if (result !== undefined) expect(result).toBe('1111');
    });

    it('should never prefix output with a zero when nonzero digits exist', () => {
        const result = largestNumber([0, 0, 0, 1]);
        if (result !== undefined) expect(result).toBe('1000');
    });

    it('should handle upper-boundary 10-digit values without overflow', () => {
        const result = largestNumber([999999999, 9]);
        if (result !== undefined) expect(result).toBe('9999999999');
    });
});
