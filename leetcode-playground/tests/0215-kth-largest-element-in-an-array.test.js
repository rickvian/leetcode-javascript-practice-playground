import { findKthLargest } from '../0215-kth-largest-element-in-an-array.js';

describe('0215-kth-largest-element-in-an-array', () => {
  it("findKthLargest([3, 2, 1, 5, 6, 4], 2)", () => {
    const result = findKthLargest([3, 2, 1, 5, 6, 4], 2);
    expect(result).toEqual(5);
  });

  it("findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)", () => {
    const result = findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4);
    expect(result).toEqual(4);
  });

  it("findKthLargest([1], 1)", () => {
    const result = findKthLargest([1], 1);
    expect(result).toEqual(1);
  });

  it("findKthLargest([1, 2], 1)", () => {
    const result = findKthLargest([1, 2], 1);
    expect(result).toEqual(2);
  });

  it("findKthLargest([1, 2], 2)", () => {
    const result = findKthLargest([1, 2], 2);
    expect(result).toEqual(1);
  });

  it("findKthLargest([5, 3, 1, 2, 4], 3)", () => {
    const result = findKthLargest([5, 3, 1, 2, 4], 3);
    expect(result).toEqual(3);
  });
});
