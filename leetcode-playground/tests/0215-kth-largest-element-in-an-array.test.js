import { findKthLargest } from '../0215-kth-largest-element-in-an-array';

describe('0215-kth-largest-element-in-an-array', () => {
    it('should handle LeetCode example 1: [3,2,1,5,6,4], k=2', () => {
        expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toEqual(5);
    });

    it('should handle LeetCode example 2: [3,2,3,1,2,4,5,5,6], k=4', () => {
        expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toEqual(4);
    });

    it('should handle k=1 (maximum element)', () => {
        expect(findKthLargest([1, 2, 3, 4, 5], 1)).toEqual(5);
    });

    it('should handle k=n (minimum element)', () => {
        expect(findKthLargest([1, 2, 3, 4, 5], 5)).toEqual(1);
    });

    it('should handle all duplicate values', () => {
        expect(findKthLargest([5, 5, 5, 5], 2)).toEqual(5);
    });

    it('should handle all negative values', () => {
        expect(findKthLargest([-1, -2, -3, -4, -5], 1)).toEqual(-1);
    });

    it('should handle mix of positive and negative values', () => {
        expect(findKthLargest([-1, 0, 1, 2, 3], 2)).toEqual(2);
    });

    it('should handle single element array', () => {
        expect(findKthLargest([5], 1)).toEqual(5);
    });

    it('should handle two-element array with k=1', () => {
        expect(findKthLargest([2, 1], 1)).toEqual(2);
    });

    it('should handle two-element array with k=2', () => {
        expect(findKthLargest([2, 1], 2)).toEqual(1);
    });

    it('should handle negative and positive mix with k in the middle', () => {
        expect(findKthLargest([-5, -1, 0, 2, 5], 3)).toEqual(0);
    });

    it('should handle array with all negative values at constraint boundary', () => {
        expect(findKthLargest([-100, -50, -20], 1)).toEqual(-20);
    });
});
