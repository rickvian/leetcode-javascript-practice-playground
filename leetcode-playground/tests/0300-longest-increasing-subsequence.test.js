import { lengthOfLIS } from '../0300-longest-increasing-subsequence.js';

describe('0300-longest-increasing-subsequence', () => {
  it("lengthOfLIS([1, 2, 3, 4, 5])", () => {
    const result = lengthOfLIS([1, 2, 3, 4, 5]);
    expect(result).toEqual(5);
  });

  it("lengthOfLIS([])", () => {
    const result = lengthOfLIS([]);
    expect(result).toEqual(0);
  });

  it("lengthOfLIS([1])", () => {
    const result = lengthOfLIS([1]);
    expect(result).toEqual(1);
  });

  it("lengthOfLIS([1, 1])", () => {
    const result = lengthOfLIS([1, 1]);
    expect(result).toEqual(1);
  });

  it("lengthOfLIS([3, 1, 4, 1, 5])", () => {
    const result = lengthOfLIS([3, 1, 4, 1, 5]);
    expect(result).toEqual(3);
  });

  it("lengthOfLIS([-1, 0, 1])", () => {
    const result = lengthOfLIS([-1, 0, 1]);
    expect(result).toEqual(3);
  });
});
