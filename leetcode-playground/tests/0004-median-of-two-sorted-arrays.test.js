import { findMedianSortedArrays } from '../0004-median-of-two-sorted-arrays.js';

describe('0004-median-of-two-sorted-arrays', () => {
  it("findMedianSortedArrays([1, 2, 3], [4, 5, 6])", () => {
    const result = findMedianSortedArrays([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(3.5);
  });

  it("findMedianSortedArrays([1], [1])", () => {
    const result = findMedianSortedArrays([1], [1]);
    expect(result).toEqual(1);
  });

  it("findMedianSortedArrays([1, 3], [2])", () => {
    const result = findMedianSortedArrays([1, 3], [2]);
    expect(result).toEqual(2);
  });

  it("findMedianSortedArrays([1, 2], [3, 4])", () => {
    const result = findMedianSortedArrays([1, 2], [3, 4]);
    expect(result).toEqual(2.5);
  });
});
