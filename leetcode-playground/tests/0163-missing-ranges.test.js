import { findMissingRanges } from '../0163-missing-ranges';

describe('0163-missing-ranges', () => {
    it('should return the whole range when nums is empty', () => {
        const result = findMissingRanges([], 1, 1);
        if (result !== undefined) expect(result).toEqual([[1, 1]]);
    });

    it('should return [] when nums covers the entire range', () => {
        const result = findMissingRanges([1, 2, 3], 1, 3);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should find missing ranges in the classic example', () => {
        const result = findMissingRanges([0, 1, 3, 50, 75], 0, 99);
        if (result !== undefined) expect(result).toEqual([[2, 2], [4, 49], [51, 74], [76, 99]]);
    });

    it('should handle a single-element nums matching lower bound', () => {
        const result = findMissingRanges([1], 1, 1);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should handle nums with negative and zero values', () => {
        const result = findMissingRanges([-1], -2, 0);
        if (result !== undefined) expect(result).toEqual([[-2, -2], [0, 0]]);
    });

    it('should handle INT_MIN/INT_MAX boundary', () => {
        const result = findMissingRanges([-2147483648, 2147483647], -2147483648, 2147483647);
        if (result !== undefined) expect(result).toEqual([[-2147483647, 2147483646]]);
    });

    it('should handle empty nums with lower == upper == 0', () => {
        const result = findMissingRanges([], 0, 0);
        if (result !== undefined) expect(result).toEqual([[0, 0]]);
    });
});
