import { searchRange } from '../0034-find-first-and-last-position-of-element-in-sorted-array.js';

describe('0034-find-first-and-last-position-of-element-in-sorted-array', () => {
  it("searchRange([2, 7, 11, 15], 9)", () => {
    const result = searchRange([2, 7, 11, 15], 9);
    expect(result).toEqual([-1, -1]);
  });

  it("searchRange([3, 2, 4], 6)", () => {
    const result = searchRange([3, 2, 4], 6);
    expect(result).toEqual([-1, -1]);
  });

  it("searchRange([3, 3], 6)", () => {
    const result = searchRange([3, 3], 6);
    expect(result).toEqual([-1, -1]);
  });

  it("searchRange([-1, -2, -3, -4, -5], -8)", () => {
    const result = searchRange([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual([-1, -1]);
  });

  it("searchRange([1, 2], 3)", () => {
    const result = searchRange([1, 2], 3);
    expect(result).toEqual([-1, -1]);
  });

  it("searchRange([0, 4, 3, 0], 0)", () => {
    const result = searchRange([0, 4, 3, 0], 0);
    expect(result).toEqual([0, 0]);
  });
});
