import { smallestRangeI } from '../0908-smallest-range-i.js';

describe('0908-smallest-range-i', () => {
  it("smallestRangeI([2, 7, 11, 15], 9)", () => {
    const result = smallestRangeI([2, 7, 11, 15], 9);
    expect(result).toEqual(0);
  });

  it("smallestRangeI([3, 2, 4], 6)", () => {
    const result = smallestRangeI([3, 2, 4], 6);
    expect(result).toEqual(0);
  });

  it("smallestRangeI([3, 3], 6)", () => {
    const result = smallestRangeI([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("smallestRangeI([-1, -2, -3, -4, -5], -8)", () => {
    const result = smallestRangeI([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(20);
  });

  it("smallestRangeI([1, 2], 3)", () => {
    const result = smallestRangeI([1, 2], 3);
    expect(result).toEqual(0);
  });

  it("smallestRangeI([0, 4, 3, 0], 0)", () => {
    const result = smallestRangeI([0, 4, 3, 0], 0);
    expect(result).toEqual(4);
  });
});
