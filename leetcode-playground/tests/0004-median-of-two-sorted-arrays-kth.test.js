import { findMedianSortedArrays } from '../0004-median-of-two-sorted-arrays-kth';

describe('0004-median-of-two-sorted-arrays-kth', () => {
  // Basic cases
  it('should return median for even total length', () => {
    expect(findMedianSortedArrays([1, 3], [2, 4])).toBe(2.5);
  });

  it('should return median for odd total length', () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });

  // One empty array
  it('should handle empty nums1', () => {
    expect(findMedianSortedArrays([], [1, 2, 3])).toBe(2);
  });

  it('should handle empty nums2', () => {
    expect(findMedianSortedArrays([1, 2, 3], [])).toBe(2);
  });

  // Single element arrays
  it('should handle two single-element arrays', () => {
    expect(findMedianSortedArrays([1], [2])).toBe(1.5);
  });

  it('should handle one single-element array', () => {
    expect(findMedianSortedArrays([3], [1, 2, 4, 5])).toBe(3);
  });

  // Heavily skewed sizes (m much smaller than n)
  it('should handle very different array sizes', () => {
    expect(findMedianSortedArrays([1, 2], [3, 4, 5, 6, 7, 8, 9, 10, 11, 12])).toBe(6.5);
  });

  // Duplicates
  it('should handle arrays with all identical values', () => {
    expect(findMedianSortedArrays([2, 2, 2], [2, 2, 2])).toBe(2);
  });

  it('should handle arrays with repeated values', () => {
    expect(findMedianSortedArrays([1, 1, 1], [1, 1, 1, 1])).toBe(1);
  });

  // Non-overlapping ranges
  it('should handle non-overlapping arrays (A entirely before B)', () => {
    expect(findMedianSortedArrays([1, 2, 3], [4, 5, 6])).toBe(3.5);
  });

  it('should handle non-overlapping arrays (B entirely before A)', () => {
    expect(findMedianSortedArrays([4, 5, 6], [1, 2, 3])).toBe(3.5);
  });

  // Negative numbers
  it('should handle negative numbers', () => {
    expect(findMedianSortedArrays([-5, -3, -1], [-4, -2, 0])).toBe(-2.5);
  });

  // Large values at boundaries
  it('should handle single element each', () => {
    expect(findMedianSortedArrays([100000], [-100000])).toBe(0);
  });
});
