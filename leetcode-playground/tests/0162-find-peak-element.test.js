import { findPeakElement } from '../0162-find-peak-element';

describe('0162-find-peak-element', () => {
    it('should handle LeetCode example 1', () => {
        expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toEqual(5);
    });

    it('should handle LeetCode example 2', () => {
        expect(findPeakElement([1, 2, 1, 2, 1])).toEqual(3);
    });

    it('should return 0 for single element', () => {
        expect(findPeakElement([5])).toEqual(0);
    });

    it('should return last index for monotonically increasing array', () => {
        expect(findPeakElement([1, 2, 3, 4, 5])).toEqual(4);
    });

    it('should return 0 for monotonically decreasing array', () => {
        expect(findPeakElement([5, 4, 3, 2, 1])).toEqual(0);
    });

    it('should handle array with all equal elements', () => {
        expect(findPeakElement([2, 2, 2, 2])).toEqual(3);
    });

    it('should return first peak for multiple peaks', () => {
        expect(findPeakElement([1, 3, 1, 2, 1])).toEqual(3);
    });

    it('should handle array with peak in middle', () => {
        expect(findPeakElement([1, 2, 3, 2, 1])).toEqual(2);
    });

    it('should handle array with peak at start', () => {
        expect(findPeakElement([5, 4, 3, 2, 1])).toEqual(0);
    });

    it('should handle array with peak at end', () => {
        expect(findPeakElement([1, 2, 3, 4, 5])).toEqual(4);
    });

    it('should handle negative numbers', () => {
        expect(findPeakElement([-5, -3, -1, 0, -2, -4])).toEqual(3);
    });

    it('should handle mixed positive and negative numbers', () => {
        expect(findPeakElement([-1, 5, -2, 3, -1])).toEqual(3);
    });

    it('should handle array with multiple peaks at different positions', () => {
        expect(findPeakElement([1, 3, 1, 4, 1, 5, 1])).toEqual(1);
    });

    it('should handle two-element array with peak at end', () => {
        expect(findPeakElement([1, 2])).toEqual(1);
    });

    it('should handle two-element array with peak at start', () => {
        expect(findPeakElement([2, 1])).toEqual(0);
    });

    it('should handle array with zigzag pattern', () => {
        expect(findPeakElement([1, 3, 2, 4, 3, 5, 2])).toEqual(1);
    });

    it('should handle large numbers', () => {
        expect(findPeakElement([100, 200, 150, 250, 100])).toEqual(3);
    });

    it('should handle array where second element is peak', () => {
        expect(findPeakElement([1, 5, 4, 3, 2])).toEqual(1);
    });

    it('should handle array where second-to-last element is peak', () => {
        expect(findPeakElement([2, 3, 4, 5, 1])).toEqual(3);
    });
});
