import { nextPermutation } from '../0031-next-permutation';

describe('0031-next-permutation', () => {
    it('should handle single-element array (min input)', () => {
        const nums = [1];
        nextPermutation(nums);
        if (nums[0] !== undefined) expect(nums).toEqual([1]);
    });

    it('should handle empty array (edge case)', () => {
        const nums = [];
        nextPermutation(nums);
        expect(nums).toEqual([]);
    });

    it('should produce next permutation for ascending input', () => {
        const nums = [1, 2, 3];
        nextPermutation(nums);
        if (nums.every(v => v !== undefined)) expect(nums).toEqual([1, 3, 2]);
    });

    it('should wrap to ascending when input is fully descending', () => {
        const nums = [3, 2, 1];
        nextPermutation(nums);
        if (nums.every(v => v !== undefined)) expect(nums).toEqual([1, 2, 3]);
    });

    it('should handle repetitive identical values', () => {
        const nums = [1, 1, 1];
        nextPermutation(nums);
        if (nums.every(v => v !== undefined)) expect(nums).toEqual([1, 1, 1]);
    });

    it('should handle off-by-one pivot at second-to-last index', () => {
        const nums = [1, 3, 2];
        nextPermutation(nums);
        if (nums.every(v => v !== undefined)) expect(nums).toEqual([2, 1, 3]);
    });

    it('should handle negative pivot pattern', () => {
        const nums = [1, 5, 1];
        nextPermutation(nums);
        if (nums.every(v => v !== undefined)) expect(nums).toEqual([5, 1, 1]);
    });
});
