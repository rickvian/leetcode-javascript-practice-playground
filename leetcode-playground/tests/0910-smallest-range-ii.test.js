import { smallestRangeII } from '../0910-smallest-range-ii.js';

describe('0910-smallest-range-ii', () => {
  it("smallestRangeII([2, 7, 11, 15], 9)", () => {
    const result = smallestRangeII([2, 7, 11, 15], 9);
    expect(result).toEqual(13);
  });

  it("smallestRangeII([3, 2, 4], 6)", () => {
    const result = smallestRangeII([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("smallestRangeII([3, 3], 6)", () => {
    const result = smallestRangeII([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("smallestRangeII([-1, -2, -3, -4, -5], -8)", () => {
    const result = smallestRangeII([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(4);
  });

  it("smallestRangeII([1, 2], 3)", () => {
    const result = smallestRangeII([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("smallestRangeII([0, 4, 3, 0], 0)", () => {
    const result = smallestRangeII([0, 4, 3, 0], 0);
    expect(result).toEqual(4);
  });
});
