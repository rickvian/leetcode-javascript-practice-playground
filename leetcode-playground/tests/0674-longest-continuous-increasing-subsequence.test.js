import { findLengthOfLCIS } from '../0674-longest-continuous-increasing-subsequence.js';

describe('0674-longest-continuous-increasing-subsequence', () => {
  it("findLengthOfLCIS([1, 2, 3, 4, 5])", () => {
    const result = findLengthOfLCIS([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("findLengthOfLCIS([])", () => {
    const result = findLengthOfLCIS([]);
    expect(result).toEqual(1);
  });

  it("findLengthOfLCIS([1])", () => {
    const result = findLengthOfLCIS([1]);
    expect(result).toEqual(1);
  });

  it("findLengthOfLCIS([1, 1])", () => {
    const result = findLengthOfLCIS([1, 1]);
    expect(result).toEqual(1);
  });

  it("findLengthOfLCIS([3, 1, 4, 1, 5])", () => {
    const result = findLengthOfLCIS([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("findLengthOfLCIS([-1, 0, 1])", () => {
    const result = findLengthOfLCIS([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
