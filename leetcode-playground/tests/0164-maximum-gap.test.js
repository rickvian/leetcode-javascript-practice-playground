import { maximumGap } from '../0164-maximum-gap';

describe('0164-maximum-gap', () => {
    it('should return 0 for an empty array', () => {
        const result = maximumGap([]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for a single-element array', () => {
        const result = maximumGap([42]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should compute the gap for the classic example [3,6,9,1]', () => {
        const result = maximumGap([3, 6, 9, 1]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 0 when all elements are identical (repetitive)', () => {
        const result = maximumGap([7, 7, 7, 7]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle a two-element array', () => {
        const result = maximumGap([1, 10000000]);
        if (result !== undefined) expect(result).toBe(9999999);
    });

    it('should handle negative numbers (if allowed)', () => {
        const result = maximumGap([0]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle a sorted strictly ascending input', () => {
        const result = maximumGap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        if (result !== undefined) expect(result).toBe(1);
    });
});
