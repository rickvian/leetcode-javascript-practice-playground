import { findNumberOfLIS } from '../0673-number-of-longest-increasing-subsequence.js';

describe('0673-number-of-longest-increasing-subsequence', () => {
  it("findNumberOfLIS([1, 2, 3, 4, 5])", () => {
    const result = findNumberOfLIS([1, 2, 3, 4, 5]);
    expect(result).toEqual(1);
  });

  it("findNumberOfLIS([])", () => {
    const result = findNumberOfLIS([]);
    expect(result).toEqual(0);
  });

  it("findNumberOfLIS([1])", () => {
    const result = findNumberOfLIS([1]);
    expect(result).toEqual(1);
  });

  it("findNumberOfLIS([1, 1])", () => {
    const result = findNumberOfLIS([1, 1]);
    expect(result).toEqual(2);
  });

  it("findNumberOfLIS([3, 1, 4, 1, 5])", () => {
    const result = findNumberOfLIS([3, 1, 4, 1, 5]);
    expect(result).toEqual(2);
  });

  it("findNumberOfLIS([-1, 0, 1])", () => {
    const result = findNumberOfLIS([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
