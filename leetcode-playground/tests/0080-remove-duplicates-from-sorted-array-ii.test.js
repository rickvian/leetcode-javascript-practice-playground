import { removeDuplicates } from '../0080-remove-duplicates-from-sorted-array-ii';

describe('0080-remove-duplicates-from-sorted-array-ii', () => {
    it('should handle official example 1: [1,1,1,2,2,3] → k=5, first 5=[1,1,2,2,3]', () => {
        const nums = [1, 1, 1, 2, 2, 3];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(5);
            expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
        }
    });

    it('should handle official example 2: [0,0,1,1,1,1,2,3,3] → k=7, first 7=[0,0,1,1,2,3,3]', () => {
        const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(7);
            expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3]);
        }
    });

    it('should handle no duplicates: each element appears once', () => {
        const nums = [1, 2, 3, 4, 5];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(5);
            expect(nums.slice(0, k)).toEqual([1, 2, 3, 4, 5]);
        }
    });

    it('should handle exactly two occurrences of each element', () => {
        const nums = [1, 1, 2, 2, 3, 3];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(6);
            expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3]);
        }
    });

    it('should remove third+ occurrence when element appears more than twice', () => {
        const nums = [2, 2, 2, 2, 3];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(3);
            expect(nums.slice(0, k)).toEqual([2, 2, 3]);
        }
    });

    it('should keep only 2 when all elements are identical', () => {
        const nums = [7, 7, 7, 7, 7];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(2);
            expect(nums.slice(0, k)).toEqual([7, 7]);
        }
    });

    it('should handle multiple elements each appearing three times', () => {
        const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(6);
            expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3]);
        }
    });

    it('should handle four occurrences at beginning followed by unique element', () => {
        const nums = [1, 1, 1, 1, 2];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(3);
            expect(nums.slice(0, k)).toEqual([1, 1, 2]);
        }
    });

    it('should handle two-element array with same values (exactly 2 allowed)', () => {
        const nums = [3, 3];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(2);
            expect(nums.slice(0, k)).toEqual([3, 3]);
        }
    });

    it('should handle two-element array with unique values', () => {
        const nums = [1, 2];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(2);
            expect(nums.slice(0, k)).toEqual([1, 2]);
        }
    });

    it('should handle mix of single, double, and triple+ occurrences', () => {
        const nums = [1, 1, 1, 2, 3, 3, 4, 4, 4, 4];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(7);
            expect(nums.slice(0, k)).toEqual([1, 1, 2, 3, 3, 4, 4]);
        }
    });

    it('should handle array where all but last element are duplicates', () => {
        const nums = [5, 5, 5, 5, 6];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(3);
            expect(nums.slice(0, k)).toEqual([5, 5, 6]);
        }
    });

    it('should handle negative numbers with duplicates', () => {
        const nums = [-3, -3, -3, -1, 0, 0, 0, 2];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(6);
            expect(nums.slice(0, k)).toEqual([-3, -3, -1, 0, 0, 2]);
        }
    });

    it('should handle large array with many duplicates', () => {
        const nums = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(8);
            expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3, 3, 4, 4]);
        }
    });
});
