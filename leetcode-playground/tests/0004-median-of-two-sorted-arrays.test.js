import { findMedianSortedArrays } from '../0004-median-of-two-sorted-arrays';

describe('0004-median-of-two-sorted-arrays', () => {
    // Official LeetCode examples
    it('should return 2.0 for [1,3] and [2] (odd total length)', () => {
        expect(findMedianSortedArrays([1, 3], [2])).toBeCloseTo(2.0, 5);
    });

    it('should return 2.5 for [1,2] and [3,4] (even total length)', () => {
        expect(findMedianSortedArrays([1, 2], [3, 4])).toBeCloseTo(2.5, 5);
    });

    // Empty array cases (0 <= m, n <= 1000, m+n >= 1)
    it('should handle nums1 empty with single element nums2', () => {
        expect(findMedianSortedArrays([], [1])).toBeCloseTo(1.0, 5);
    });

    it('should handle nums1 empty with even-length nums2', () => {
        expect(findMedianSortedArrays([], [1, 2])).toBeCloseTo(1.5, 5);
    });

    it('should handle nums2 empty with single element nums1', () => {
        expect(findMedianSortedArrays([3], [])).toBeCloseTo(3.0, 5);
    });

    it('should handle nums2 empty with odd-length nums1', () => {
        expect(findMedianSortedArrays([1, 3, 5], [])).toBeCloseTo(3.0, 5);
    });

    // Single element cases
    it('should return average for two single-element arrays', () => {
        expect(findMedianSortedArrays([1], [2])).toBeCloseTo(1.5, 5);
    });

    it('should return the element for identical single elements', () => {
        expect(findMedianSortedArrays([1], [1])).toBeCloseTo(1.0, 5);
    });

    // Unequal lengths
    it('should handle heavily unequal lengths (large nums1, small nums2)', () => {
        expect(findMedianSortedArrays([1, 2, 3, 4, 5], [6])).toBeCloseTo(3.5, 5);
    });

    it('should handle heavily unequal lengths (small nums1, large nums2)', () => {
        expect(findMedianSortedArrays([1], [2, 3, 4, 5, 6])).toBeCloseTo(3.5, 5);
    });

    // Negative values
    it('should handle all negative values (odd total length)', () => {
        expect(findMedianSortedArrays([-5, -3, -1], [-4, -2])).toBeCloseTo(-3.0, 5);
    });

    it('should handle mixed negative and positive values (even total length)', () => {
        expect(findMedianSortedArrays([-1, 0], [1, 2])).toBeCloseTo(0.5, 5);
    });

    // Duplicates
    it('should handle duplicates within and across arrays', () => {
        // merged: [1,1,1,2,3] → median = 1
        expect(findMedianSortedArrays([1, 1, 3], [1, 2])).toBeCloseTo(1.0, 5);
    });

    // All of one array less than the other
    it('should handle case where all of nums1 is less than all of nums2 (odd)', () => {
        // merged: [1,2,3,4,5] → median = 3
        expect(findMedianSortedArrays([1, 2], [3, 4, 5])).toBeCloseTo(3.0, 5);
    });

    it('should handle case where all of nums1 is less than all of nums2 (even)', () => {
        // merged: [1,2,3,4,5,6] → median = 3.5
        expect(findMedianSortedArrays([1, 2, 3], [4, 5, 6])).toBeCloseTo(3.5, 5);
    });

    // Perfectly interleaved
    it('should handle perfectly interleaved arrays (even total length)', () => {
        // merged: [1,2,3,4,5,6] → median = 3.5
        expect(findMedianSortedArrays([1, 3, 5], [2, 4, 6])).toBeCloseTo(3.5, 5);
    });

    // Large values near constraint boundary (-10^6 to 10^6)
    it('should handle values at negative constraint boundary', () => {
        expect(findMedianSortedArrays([-1000000], [1000000])).toBeCloseTo(0.0, 5);
    });
});
