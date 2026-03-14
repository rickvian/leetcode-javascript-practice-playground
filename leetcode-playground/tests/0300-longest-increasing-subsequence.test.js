import { lengthOfLIS } from '../0300-longest-increasing-subsequence';

describe('0300-longest-increasing-subsequence', () => {
    it('should return LIS length for LeetCode example 1', () => {
        expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toBe(4);
    });

    it('should return LIS length for LeetCode example 2', () => {
        expect(lengthOfLIS([0, 1, 0, 3, 2, 3])).toBe(4);
    });

    it('should return LIS length for LeetCode example 3', () => {
        expect(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])).toBe(1);
    });

    it('should handle single element', () => {
        expect(lengthOfLIS([1])).toBe(1);
    });

    it('should handle already sorted array', () => {
        expect(lengthOfLIS([1, 2, 3, 4, 5])).toBe(5);
    });

    it('should handle reverse sorted array', () => {
        expect(lengthOfLIS([5, 4, 3, 2, 1])).toBe(1);
    });

    it('should handle array with duplicates', () => {
        expect(lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6])).toBe(6);
    });

    it('should handle negative numbers', () => {
        expect(lengthOfLIS([-2, -1, 0, 1, 2])).toBe(5);
    });

    it('should handle mixed positive and negative', () => {
        expect(lengthOfLIS([-1, 3, -1, 4, -1, 5, -1, 6])).toBe(5);
    });

    it('should handle two element increasing', () => {
        expect(lengthOfLIS([1, 2])).toBe(2);
    });

    it('should handle two element decreasing', () => {
        expect(lengthOfLIS([2, 1])).toBe(1);
    });
});
