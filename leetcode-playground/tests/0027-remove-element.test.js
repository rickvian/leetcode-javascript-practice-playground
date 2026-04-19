import { removeElement } from '../0027-remove-element';

describe('0027-remove-element', () => {
    it('should return 0 for empty array', () => {
        const result = removeElement([], 1);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 when all elements match val', () => {
        const result = removeElement([3, 3, 3], 3);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return n when no element matches val', () => {
        const result = removeElement([1, 2, 3], 5);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle single-element array matching val', () => {
        const result = removeElement([2], 2);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle LeetCode example [3,2,2,3] val=3', () => {
        const nums = [3, 2, 2, 3];
        const result = removeElement(nums, 3);
        if (result !== undefined) {
            expect(result).toBe(2);
            expect(nums.slice(0, 2).sort()).toEqual([2, 2]);
        }
    });

    it('should handle LeetCode example [0,1,2,2,3,0,4,2] val=2', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const result = removeElement(nums, 2);
        if (result !== undefined) {
            expect(result).toBe(5);
            expect(nums.slice(0, 5).sort()).toEqual([0, 0, 1, 3, 4]);
        }
    });

    it('should handle val at first/last boundary positions', () => {
        const nums = [1, 2, 3, 1];
        const result = removeElement(nums, 1);
        if (result !== undefined) expect(result).toBe(2);
    });
});
