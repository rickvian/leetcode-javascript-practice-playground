import { maxSubArrayLen } from '../0325-maximum-size-subarray-sum-equals-k.js';

describe('0325-maximum-size-subarray-sum-equals-k', () => {
  it("maxSubArrayLen([2, 7, 11, 15], 9)", () => {
    const result = maxSubArrayLen([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("maxSubArrayLen([3, 2, 4], 6)", () => {
    const result = maxSubArrayLen([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("maxSubArrayLen([3, 3], 6)", () => {
    const result = maxSubArrayLen([3, 3], 6);
    expect(result).toEqual(2);
  });

  it("maxSubArrayLen([-1, -2, -3, -4, -5], -8)", () => {
    const result = maxSubArrayLen([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("maxSubArrayLen([1, 2], 3)", () => {
    const result = maxSubArrayLen([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("maxSubArrayLen([0, 4, 3, 0], 0)", () => {
    const result = maxSubArrayLen([0, 4, 3, 0], 0);
    expect(result).toEqual(1);
  });
});
