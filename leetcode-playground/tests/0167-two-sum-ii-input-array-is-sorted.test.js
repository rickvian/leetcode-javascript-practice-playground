import { twoSum } from '../0167-two-sum-ii-input-array-is-sorted.js';

describe('0167-two-sum-ii-input-array-is-sorted', () => {
    it('should handle LeetCode example 1', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
    });

    it('should handle LeetCode example 2', () => {
        expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
    });

    it('should handle LeetCode example 3', () => {
        expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
    });

    it('should handle answer at first two indices', () => {
        expect(twoSum([1, 2, 3, 4, 5], 3)).toEqual([1, 2]);
    });

    it('should handle answer at last two indices', () => {
        expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([4, 5]);
    });

    it('should handle answer indices far apart', () => {
        expect(twoSum([1, 2, 3, 4, 5, 10, 20], 21)).toEqual([1, 7]);
    });

    it('should handle negative numbers summing to positive target', () => {
        expect(twoSum([-3, -1, 0, 2, 5, 9], 4)).toEqual([2, 5]);
    });

    it('should verify 1-indexed result', () => {
        expect(twoSum([5, 25, 75], 100)).toEqual([2, 3]);
    });
});
