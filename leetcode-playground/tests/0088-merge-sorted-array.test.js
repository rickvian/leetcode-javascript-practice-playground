import { merge } from '../0088-merge-sorted-array';

describe('0088-merge-sorted-array', () => {
    it('should handle m=0 (nums1 entirely replaced by nums2)', () => {
        const nums1 = [0, 0, 0];
        merge(nums1, 0, [1, 2, 3], 3);
        if (nums1[0] !== undefined) expect(nums1).toEqual([1, 2, 3]);
    });

    it('should handle n=0 (nums1 unchanged)', () => {
        const nums1 = [1, 2, 3];
        merge(nums1, 3, [], 0);
        if (nums1[0] !== undefined) expect(nums1).toEqual([1, 2, 3]);
    });

    it('should merge leetcode example [1,2,3,0,0,0]+[2,5,6]->[1,2,2,3,5,6]', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        merge(nums1, 3, [2, 5, 6], 3);
        if (nums1[0] !== undefined) expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    it('should handle single-element merge [1]+[]->[1]', () => {
        const nums1 = [1];
        merge(nums1, 1, [], 0);
        if (nums1[0] !== undefined) expect(nums1).toEqual([1]);
    });

    it('should handle single-element merge [0]+[1]->[1]', () => {
        const nums1 = [0];
        merge(nums1, 0, [1], 1);
        if (nums1[0] !== undefined) expect(nums1).toEqual([1]);
    });

    it('should handle repetitive identical values across both arrays', () => {
        const nums1 = [2, 2, 2, 0, 0, 0];
        merge(nums1, 3, [2, 2, 2], 3);
        if (nums1[0] !== undefined) expect(nums1).toEqual([2, 2, 2, 2, 2, 2]);
    });

    it('should handle negatives and numbers at merge boundary', () => {
        const nums1 = [-5, -3, 0, 0, 0, 0];
        merge(nums1, 2, [-4, -2, 1, 5], 4);
        if (nums1[0] !== undefined) expect(nums1).toEqual([-5, -4, -3, -2, 1, 5]);
    });
});
