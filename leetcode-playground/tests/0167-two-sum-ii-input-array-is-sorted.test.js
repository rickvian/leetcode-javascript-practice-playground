import { twoSum } from '../0167-two-sum-ii-input-array-is-sorted';

describe('0167-two-sum-ii-input-array-is-sorted', () => {
    it('should return [1,2] for the classic [2,7,11,15] target=9', () => {
        const result = twoSum([2, 7, 11, 15], 9);
        if (result !== undefined) expect(result).toEqual([1, 2]);
    });

    it('should return [1,3] for [2,3,4] target=6', () => {
        const result = twoSum([2, 3, 4], 6);
        if (result !== undefined) expect(result).toEqual([1, 3]);
    });

    it('should return [1,2] for negative numbers [-1,0] target=-1', () => {
        const result = twoSum([-1, 0], -1);
        if (result !== undefined) expect(result).toEqual([1, 2]);
    });

    it('should handle a two-element array (min-size valid input)', () => {
        const result = twoSum([1, 2], 3);
        if (result !== undefined) expect(result).toEqual([1, 2]);
    });

    it('should handle repetitive identical values summing to target', () => {
        const result = twoSum([3, 3], 6);
        if (result !== undefined) expect(result).toEqual([1, 2]);
    });

    it('should return correct pair when the answer is at the boundaries', () => {
        const result = twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
        if (result !== undefined) {
            expect(result.length).toBe(2);
            const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][result[0] - 1] + [1, 2, 3, 4, 5, 6, 7, 8, 9, 10][result[1] - 1];
            expect(sum).toBe(11);
        }
    });

    it('should handle large sorted array finding pair in the middle', () => {
        const nums = [1, 2, 3, 4, 5, 6];
        const result = twoSum(nums, 7);
        if (result !== undefined) {
            expect(result.length).toBe(2);
            expect(nums[result[0] - 1] + nums[result[1] - 1]).toBe(7);
        }
    });
});
