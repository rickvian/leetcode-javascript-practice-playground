import { majorityElement } from '../0169-majority-element';

describe('0169-majority-element', () => {
    it('should handle single element', () => {
        expect(majorityElement([1])).toEqual(1);
    });

    it('should handle all elements the same', () => {
        expect(majorityElement([1, 1, 1, 1])).toEqual(1);
    });

    it('should handle majority element appears exactly floor(n/2)+1 times', () => {
        expect(majorityElement([3, 2, 3])).toEqual(3);
    });

    it('should handle majority element at the start', () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
    });

    it('should handle majority element scattered throughout', () => {
        expect(majorityElement([1, 2, 3, 2, 2, 2, 4])).toEqual(2);
    });

    it('should handle LeetCode official example 1', () => {
        expect(majorityElement([3, 2, 3])).toEqual(3);
    });

    it('should handle LeetCode official example 2', () => {
        expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
    });

    it('should handle negative numbers', () => {
        expect(majorityElement([-1, -1, -2, -2, -1])).toEqual(-1);
    });

    it('should handle mixed positive and negative', () => {
        expect(majorityElement([5, -3, 5, 5, 2, 5])).toEqual(5);
    });

    it('should handle large numbers', () => {
        expect(majorityElement([1000000, 999999, 1000000, 1000000])).toEqual(1000000);
    });

    it('should handle two-element array with majority at index 0', () => {
        expect(majorityElement([1, 2])).toEqual(1);
    });

    it('should handle two-element array with majority at index 1', () => {
        expect(majorityElement([2, 1])).toEqual(2);
    });
});
