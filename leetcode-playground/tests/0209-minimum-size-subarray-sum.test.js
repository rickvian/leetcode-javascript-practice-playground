import { minSubArrayLen } from '../0209-minimum-size-subarray-sum';

describe('0209-minimum-size-subarray-sum', () => {
    it('should handle LeetCode example 1', () => {
        expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
    });

    it('should handle LeetCode example 2', () => {
        expect(minSubArrayLen(4, [1, 4, 4])).toEqual(1);
    });

    it('should return 0 when no valid subarray exists', () => {
        expect(minSubArrayLen(10, [1, 1, 1, 1])).toEqual(0);
    });

    it('should return array length when entire array is needed', () => {
        expect(minSubArrayLen(15, [1, 2, 3, 4, 5])).toEqual(5);
    });

    it('should return 1 for single element >= target', () => {
        expect(minSubArrayLen(5, [5, 1, 1, 1, 1])).toEqual(1);
    });

    it('should return 1 when first element >= target', () => {
        expect(minSubArrayLen(10, [15, 1, 2, 3])).toEqual(1);
    });

    it('should handle sliding window shrinking', () => {
        expect(minSubArrayLen(10, [2, 3, 1, 2, 4, 3])).toEqual(4);
    });

    it('should handle all positive integers summing to target', () => {
        expect(minSubArrayLen(6, [1, 1, 1, 1, 1, 1])).toEqual(6);
    });

    it('should handle target=1 with all ones', () => {
        expect(minSubArrayLen(1, [1, 1, 1, 1])).toEqual(1);
    });

    it('should return minimum length when multiple windows exist', () => {
        expect(minSubArrayLen(13, [1, 2, 3, 4, 5])).toEqual(4);
    });

    it('should handle large numbers', () => {
        expect(minSubArrayLen(100, [50, 30, 20, 10])).toEqual(3);
    });

    it('should handle target larger than sum of all elements', () => {
        expect(minSubArrayLen(1000, [1, 2, 3])).toEqual(0);
    });

    it('should handle two-element array with sum >= target', () => {
        expect(minSubArrayLen(7, [3, 4])).toEqual(2);
    });

    it('should handle two-element array where first >= target', () => {
        expect(minSubArrayLen(5, [6, 2])).toEqual(1);
    });

    it('should handle alternating large and small numbers', () => {
        expect(minSubArrayLen(15, [10, 1, 10, 1, 5])).toEqual(3);
    });
});
