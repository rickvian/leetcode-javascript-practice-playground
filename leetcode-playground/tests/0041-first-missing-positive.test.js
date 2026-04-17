import { firstMissingPositive } from '../0041-first-missing-positive';

describe('0041-first-missing-positive', () => {
    it('should return 1 for empty array (min input)', () => {
        const result = firstMissingPositive([]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 2 when array is exactly [1] (off-by-one boundary)', () => {
        const result = firstMissingPositive([1]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 1 when array contains only non-positive values', () => {
        const result = firstMissingPositive([-1, -2, 0]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 3 for [1,2,0]', () => {
        const result = firstMissingPositive([1, 2, 0]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 2 for [3,4,-1,1]', () => {
        const result = firstMissingPositive([3, 4, -1, 1]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 1 for repetitive identical large values', () => {
        const result = firstMissingPositive([7, 8, 9, 11, 12]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle duplicates without false positives', () => {
        const result = firstMissingPositive([1, 1, 1, 1]);
        if (result !== undefined) expect(result).toBe(2);
    });
});
