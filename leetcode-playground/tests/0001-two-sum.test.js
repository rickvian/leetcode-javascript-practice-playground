import { twoSum } from '../0001-two-sum';

describe('0001-two-sum', () => {
    it('should return [0, 1] for nums = [2, 7, 11, 15], target = 9', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    it('should return [1, 2] for nums = [3, 2, 4], target = 6', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it('should return [0, 1] for nums = [3, 3], target = 6', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    it('should handle negative numbers', () => {
        expect(twoSum([-1, -2, -3, 5, 10], 7)).toEqual([3, 4]);
    });

    it('should work with mixed positive and negative numbers', () => {
        expect(twoSum([2, -3, 4, 5], 2)).toEqual([0, 3]);
    });

    it('should handle minimum constraint (length = 2)', () => {
        expect(twoSum([1, 2], 3)).toEqual([0, 1]);
    });
});
