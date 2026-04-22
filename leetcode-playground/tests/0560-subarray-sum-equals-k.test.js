import { subarraySum } from '../0560-subarray-sum-equals-k.js';

describe('0560-subarray-sum-equals-k', () => {
  it("subarraySum([2, 7, 11, 15], 9)", () => {
    const result = subarraySum([2, 7, 11, 15], 9);
    expect(result).toEqual(1);
  });

  it("subarraySum([3, 2, 4], 6)", () => {
    const result = subarraySum([3, 2, 4], 6);
    expect(result).toEqual(1);
  });

  it("subarraySum([3, 3], 6)", () => {
    const result = subarraySum([3, 3], 6);
    expect(result).toEqual(1);
  });

  it("subarraySum([-1, -2, -3, -4, -5], -8)", () => {
    const result = subarraySum([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("subarraySum([1, 2], 3)", () => {
    const result = subarraySum([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("subarraySum([0, 4, 3, 0], 0)", () => {
    const result = subarraySum([0, 4, 3, 0], 0);
    expect(result).toEqual(2);
  });
});
