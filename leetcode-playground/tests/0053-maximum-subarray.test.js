import { maxSubArray } from '../0053-maximum-subarray';

describe('0053-maximum-subarray', () => {
    it('should find max subarray sum in array with mixed positive and negative numbers', () => {
        expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    });

    it('should return the single element when all numbers are negative', () => {
        expect(maxSubArray([-5, -2, -3, -1])).toBe(-1);
    });

    it('should handle array with all positive numbers', () => {
        expect(maxSubArray([1, 2, 3, 4, 5])).toBe(15);
    });
});
