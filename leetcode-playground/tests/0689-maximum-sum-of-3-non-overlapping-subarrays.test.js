import { maxSumOfThreeSubarrays } from '../0689-maximum-sum-of-3-non-overlapping-subarrays.js';

describe('0689-maximum-sum-of-3-non-overlapping-subarrays', () => {
  it("maxSumOfThreeSubarrays([2, 7, 11, 15], 9)", () => {
    const result = maxSumOfThreeSubarrays([2, 7, 11, 15], 9);
    expect(result).toEqual([0, 9, 18]);
  });

  it("maxSumOfThreeSubarrays([3, 2, 4], 6)", () => {
    const result = maxSumOfThreeSubarrays([3, 2, 4], 6);
    expect(result).toEqual([0, 6, 12]);
  });

  it("maxSumOfThreeSubarrays([3, 3], 6)", () => {
    const result = maxSumOfThreeSubarrays([3, 3], 6);
    expect(result).toEqual([0, 6, 12]);
  });

  it("maxSumOfThreeSubarrays([-1, -2, -3, -4, -5], -8)", () => {
    const result = maxSumOfThreeSubarrays([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual([0, -8, -16]);
  });

  it("maxSumOfThreeSubarrays([1, 2], 3)", () => {
    const result = maxSumOfThreeSubarrays([1, 2], 3);
    expect(result).toEqual([0, 3, 6]);
  });

  it("maxSumOfThreeSubarrays([0, 4, 3, 0], 0)", () => {
    const result = maxSumOfThreeSubarrays([0, 4, 3, 0], 0);
    expect(result).toEqual([0, 0, 0]);
  });
});
