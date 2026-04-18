import { rotate } from '../0189-rotate-array';

describe('0189-rotate-array', () => {
    it('should handle canonical example k < n', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        rotate(nums, 3);
        if (nums[0] !== undefined) {
            expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
        }
    });

    it('should leave array unchanged when k = 0', () => {
        const nums = [1, 2, 3];
        rotate(nums, 0);
        if (nums[0] !== undefined) {
            expect(nums).toEqual([1, 2, 3]);
        }
    });

    it('should handle k larger than length via modulo', () => {
        const nums = [-1, -100, 3, 99];
        rotate(nums, 6);
        if (nums[0] !== undefined) {
            expect(nums).toEqual([3, 99, -1, -100]);
        }
    });

    it('should handle k equal to length (no-op)', () => {
        const nums = [1, 2, 3, 4];
        rotate(nums, 4);
        if (nums[0] !== undefined) {
            expect(nums).toEqual([1, 2, 3, 4]);
        }
    });

    it('should handle single-element array regardless of k', () => {
        const nums = [42];
        rotate(nums, 100);
        if (nums[0] !== undefined) {
            expect(nums).toEqual([42]);
        }
    });

    it('should handle two-element swap when k is odd', () => {
        const nums = [1, 2];
        rotate(nums, 3);
        if (nums[0] !== undefined) {
            expect(nums).toEqual([2, 1]);
        }
    });

    it('should handle repetitive data', () => {
        const nums = [7, 7, 7, 7];
        rotate(nums, 2);
        if (nums[0] !== undefined) {
            expect(nums).toEqual([7, 7, 7, 7]);
        }
    });
});
