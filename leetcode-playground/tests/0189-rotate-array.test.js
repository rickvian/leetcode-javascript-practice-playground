import { rotate } from '../0189-rotate-array';

describe('0189-rotate-array', () => {
    it('should handle LeetCode example 1', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        rotate(nums, 3);
        expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });

    it('should handle LeetCode example 2', () => {
        const nums = [-1, -100, 3, 99];
        rotate(nums, 2);
        expect(nums).toEqual([3, 99, -1, -100]);
    });

    it('should handle k=0 (no change)', () => {
        const nums = [1, 2, 3, 4, 5];
        rotate(nums, 0);
        expect(nums).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle k equals array length (no change)', () => {
        const nums = [1, 2, 3, 4, 5];
        rotate(nums, 5);
        expect(nums).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle k larger than array length (k mod n)', () => {
        const nums = [1, 2, 3, 4, 5];
        rotate(nums, 12); // 12 % 5 = 2
        expect(nums).toEqual([4, 5, 1, 2, 3]);
    });

    it('should handle single-element array with k=0', () => {
        const nums = [1];
        rotate(nums, 0);
        expect(nums).toEqual([1]);
    });

    it('should handle single-element array with k > 0', () => {
        const nums = [5];
        rotate(nums, 3);
        expect(nums).toEqual([5]);
    });

    it('should handle negative values with positive k', () => {
        const nums = [-5, -3, -1, 2, 4];
        rotate(nums, 2);
        expect(nums).toEqual([2, 4, -5, -3, -1]);
    });

    it('should handle all negative values', () => {
        const nums = [-9, -8, -7, -6];
        rotate(nums, 1);
        expect(nums).toEqual([-6, -9, -8, -7]);
    });

    it('should handle mixed positive and negative with large k', () => {
        const nums = [1, -2, 3, -4, 5];
        rotate(nums, 7); // 7 % 5 = 2
        expect(nums).toEqual([-4, 5, 1, -2, 3]);
    });

    it('should handle two-element array', () => {
        const nums = [1, 2];
        rotate(nums, 1);
        expect(nums).toEqual([2, 1]);
    });

    it('should handle two-element array with k larger than length', () => {
        const nums = [10, 20];
        rotate(nums, 5); // 5 % 2 = 1
        expect(nums).toEqual([20, 10]);
    });

    it('should handle all same elements', () => {
        const nums = [7, 7, 7, 7];
        rotate(nums, 2);
        expect(nums).toEqual([7, 7, 7, 7]);
    });

    it('should handle larger array with moderate k', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        rotate(nums, 4);
        expect(nums).toEqual([7, 8, 9, 10, 1, 2, 3, 4, 5, 6]);
    });

    it('should handle k=1 on odd-length array', () => {
        const nums = [1, 2, 3, 4, 5];
        rotate(nums, 1);
        expect(nums).toEqual([5, 1, 2, 3, 4]);
    });

    it('should handle k=1 on even-length array', () => {
        const nums = [1, 2, 3, 4];
        rotate(nums, 1);
        expect(nums).toEqual([4, 1, 2, 3]);
    });
});
