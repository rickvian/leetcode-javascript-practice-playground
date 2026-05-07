import { removeDuplicates } from '../0026-remove-duplicates-from-sorted-array';

describe('0026-remove-duplicates-from-sorted-array', () => {
    // Official examples
    it('should return 2 for [1,1,2], first 2 elements [1,2]', () => {
        const nums = [1, 1, 2];
        const k = removeDuplicates(nums);
        expect(k).toBe(2);
        expect(nums.slice(0, k)).toEqual([1, 2]);
    });

    it('should return 5 for [0,0,1,1,1,2,2,3,3,4], first 5 elements [0,1,2,3,4]', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
    });

    // Constraint-derived cases: single element
    it('should return 1 for single-element array [1]', () => {
        const nums = [1];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([1]);
    });

    it('should return 1 for single-element array [5]', () => {
        const nums = [5];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([5]);
    });

    // Constraint-derived cases: all elements identical
    it('should return 1 for all identical [1,1,1]', () => {
        const nums = [1, 1, 1];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([1]);
    });

    it('should return 1 for all identical [2,2,2,2,2]', () => {
        const nums = [2, 2, 2, 2, 2];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([2]);
    });

    // Constraint-derived cases: no duplicates at all
    it('should return 4 for no duplicates [1,2,3,4]', () => {
        const nums = [1, 2, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(4);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
    });

    it('should return 5 for no duplicates [0,1,2,3,4]', () => {
        const nums = [0, 1, 2, 3, 4];
        const k = removeDuplicates(nums);
        expect(k).toBe(5);
        expect(nums.slice(0, k)).toEqual([0, 1, 2, 3, 4]);
    });

    // Two-element arrays
    it('should return 1 for two identical [1,1]', () => {
        const nums = [1, 1];
        const k = removeDuplicates(nums);
        expect(k).toBe(1);
        expect(nums.slice(0, k)).toEqual([1]);
    });

    it('should return 2 for two different [1,2]', () => {
        const nums = [1, 2];
        const k = removeDuplicates(nums);
        expect(k).toBe(2);
        expect(nums.slice(0, k)).toEqual([1, 2]);
    });

    // Duplicates at start
    it('should handle duplicates at start [1,1,1,2,3]', () => {
        const nums = [1, 1, 1, 2, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(3);
        expect(nums.slice(0, k)).toEqual([1, 2, 3]);
    });

    // Duplicates at end
    it('should handle duplicates at end [1,2,3,3,3]', () => {
        const nums = [1, 2, 3, 3, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(3);
        expect(nums.slice(0, k)).toEqual([1, 2, 3]);
    });

    // Duplicates in middle
    it('should handle duplicates in middle [1,2,2,2,3]', () => {
        const nums = [1, 2, 2, 2, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(3);
        expect(nums.slice(0, k)).toEqual([1, 2, 3]);
    });

    // Multiple duplicate patterns
    it('should handle multiple pairs [1,1,2,2,3,3]', () => {
        const nums = [1, 1, 2, 2, 3, 3];
        const k = removeDuplicates(nums);
        expect(k).toBe(3);
        expect(nums.slice(0, k)).toEqual([1, 2, 3]);
    });

    // Large number of unique elements
    it('should handle 10 unique elements', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const k = removeDuplicates(nums);
        expect(k).toBe(10);
        expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    // Negative values
    it('should handle negative values [-2,-1,-1,0,1]', () => {
        const nums = [-2, -1, -1, 0, 1];
        const k = removeDuplicates(nums);
        expect(k).toBe(4);
        expect(nums.slice(0, k)).toEqual([-2, -1, 0, 1]);
    });

    // Zero as value
    it('should handle zero [0,0,1]', () => {
        const nums = [0, 0, 1];
        const k = removeDuplicates(nums);
        expect(k).toBe(2);
        expect(nums.slice(0, k)).toEqual([0, 1]);
    });

    // All zeros except one
    it('should handle mostly zeros [0,0,0,1]', () => {
        const nums = [0, 0, 0, 1];
        const k = removeDuplicates(nums);
        expect(k).toBe(2);
        expect(nums.slice(0, k)).toEqual([0, 1]);
    });

});
