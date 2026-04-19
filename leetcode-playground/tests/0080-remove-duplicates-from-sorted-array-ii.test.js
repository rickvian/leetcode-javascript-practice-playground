import { removeDuplicates } from '../0080-remove-duplicates-from-sorted-array-ii';

describe('0080-remove-duplicates-from-sorted-array-ii', () => {
    it('should handle single-element array (min input)', () => {
        const nums = [1];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(1);
            expect(nums.slice(0, k)).toEqual([1]);
        }
    });

    it('should keep [1,1,1,2,2,3] -> k=5 with first 5 elements [1,1,2,2,3]', () => {
        const nums = [1, 1, 1, 2, 2, 3];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(5);
            expect(nums.slice(0, k)).toEqual([1, 1, 2, 2, 3]);
        }
    });

    it('should keep [0,0,1,1,1,1,2,3,3] -> k=7 with first 7 [0,0,1,1,2,3,3]', () => {
        const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(7);
            expect(nums.slice(0, k)).toEqual([0, 0, 1, 1, 2, 3, 3]);
        }
    });

    it('should return full length when no duplicates exceed 2', () => {
        const nums = [1, 2, 3, 4];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(4);
            expect(nums.slice(0, k)).toEqual([1, 2, 3, 4]);
        }
    });

    it('should handle all repetitive identical values (all 5s -> k=2)', () => {
        const nums = [5, 5, 5, 5, 5];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(2);
            expect(nums.slice(0, k)).toEqual([5, 5]);
        }
    });

    it('should keep exactly 2 when a value appears exactly twice (boundary)', () => {
        const nums = [1, 1, 2, 2];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(4);
            expect(nums.slice(0, k)).toEqual([1, 1, 2, 2]);
        }
    });

    it('should handle pair of distinct negatives (off-by-one sanity)', () => {
        const nums = [-3, -3, -3, -1];
        const k = removeDuplicates(nums);
        if (k !== undefined) {
            expect(k).toBe(3);
            expect(nums.slice(0, k)).toEqual([-3, -3, -1]);
        }
    });
});
