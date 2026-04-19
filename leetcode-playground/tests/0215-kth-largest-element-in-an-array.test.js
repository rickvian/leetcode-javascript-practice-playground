import { findKthLargest } from '../0215-kth-largest-element-in-an-array';

describe('0215-kth-largest-element-in-an-array', () => {
    it('should return 5 for [3,2,1,5,6,4] and k=2', () => {
        expect(findKthLargest([3, 2, 1, 5, 6, 4], 2)).toBe(5);
    });

    it('should return 4 for [3,2,3,1,2,4,5,5,6] and k=4', () => {
        expect(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)).toBe(4);
    });

    it('should return the only element for single element array', () => {
        expect(findKthLargest([1], 1)).toBe(1);
    });

    it('should return largest (k=1)', () => {
        expect(findKthLargest([5, 3, 1, 4, 2], 1)).toBe(5);
    });

    it('should return smallest (k=n)', () => {
        expect(findKthLargest([5, 3, 1, 4, 2], 5)).toBe(1);
    });

    it('should handle duplicate elements', () => {
        expect(findKthLargest([3, 3, 3, 3], 2)).toBe(3);
    });

    it('should handle negative numbers', () => {
        expect(findKthLargest([-1, -2, -3, -4, -5], 2)).toBe(-2);
    });

    it('should handle mix of positive and negative', () => {
        expect(findKthLargest([-1, 2, 0], 2)).toBe(0);
    });

    it('should handle two elements', () => {
        expect(findKthLargest([2, 1], 2)).toBe(1);
    });

    it('should handle all same values large array', () => {
        expect(findKthLargest([7, 7, 7, 7, 7], 3)).toBe(7);
    });
});
