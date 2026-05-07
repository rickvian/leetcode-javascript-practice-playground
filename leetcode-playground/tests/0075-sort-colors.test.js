import { sortColors } from '../0075-sort-colors';

describe('0075-sort-colors', () => {
    it('should handle single-element array (min input)', () => {
        const nums = [0];
        sortColors(nums);
        if (nums[0] !== undefined) expect(nums).toEqual([0]);
    });

    it('should sort [2,0,2,1,1,0] -> [0,0,1,1,2,2]', () => {
        const nums = [2, 0, 2, 1, 1, 0];
        sortColors(nums);
        if (nums[0] !== undefined) expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
    });

    it('should keep already-sorted input stable', () => {
        const nums = [0, 0, 1, 1, 2, 2];
        sortColors(nums);
        if (nums[0] !== undefined) expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
    });

    it('should reverse fully inverse input [2,1,0]', () => {
        const nums = [2, 1, 0];
        sortColors(nums);
        if (nums[0] !== undefined) expect(nums).toEqual([0, 1, 2]);
    });

    it('should handle repetitive identical values (all 1s stays all 1s)', () => {
        const nums = [1, 1, 1, 1];
        sortColors(nums);
        if (nums[0] !== undefined) expect(nums).toEqual([1, 1, 1, 1]);
    });

    it('should handle only-two-colors inputs', () => {
        const nums = [2, 0, 2, 0];
        sortColors(nums);
        if (nums[0] !== undefined) expect(nums).toEqual([0, 0, 2, 2]);
    });

    it('should handle alternating pattern [0,1,2,0,1,2]', () => {
        const nums = [0, 1, 2, 0, 1, 2];
        sortColors(nums);
        if (nums[0] !== undefined) expect(nums).toEqual([0, 0, 1, 1, 2, 2]);
    });
});
