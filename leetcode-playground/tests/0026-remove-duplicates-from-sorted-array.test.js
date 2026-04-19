import { removeDuplicates } from '../0026-remove-duplicates-from-sorted-array';

describe('0026-remove-duplicates-from-sorted-array', () => {
    it('should return 0 for empty array', () => {
        const result = removeDuplicates([]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 for single-element array', () => {
        const result = removeDuplicates([5]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 1 for array of all identical elements', () => {
        const nums = [2, 2, 2, 2, 2];
        const result = removeDuplicates(nums);
        if (result !== undefined) {
            expect(result).toBe(1);
            expect(nums[0]).toBe(2);
        }
    });

    it('should keep all unique elements in LeetCode example', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const result = removeDuplicates(nums);
        if (result !== undefined) {
            expect(result).toBe(5);
            expect(nums.slice(0, 5)).toEqual([0, 1, 2, 3, 4]);
        }
    });

    it('should return n when all elements already unique', () => {
        const result = removeDuplicates([1, 2, 3, 4, 5]);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should handle a duplicate pair at the start (off-by-one)', () => {
        const nums = [1, 1, 2];
        const result = removeDuplicates(nums);
        if (result !== undefined) {
            expect(result).toBe(2);
            expect(nums.slice(0, 2)).toEqual([1, 2]);
        }
    });

    it('should handle negative sorted values', () => {
        const nums = [-3, -3, -2, -1, -1];
        const result = removeDuplicates(nums);
        if (result !== undefined) expect(result).toBe(3);
    });
});
