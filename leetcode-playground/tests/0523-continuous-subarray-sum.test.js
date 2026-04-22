import { checkSubarraySum } from '../0523-continuous-subarray-sum.js';

describe('0523-continuous-subarray-sum', () => {
  it("checkSubarraySum([2, 7, 11, 15], 9)", () => {
    const result = checkSubarraySum([2, 7, 11, 15], 9);
    expect(result).toEqual(true);
  });

  it("checkSubarraySum([3, 2, 4], 6)", () => {
    const result = checkSubarraySum([3, 2, 4], 6);
    expect(result).toEqual(true);
  });

  it("checkSubarraySum([3, 3], 6)", () => {
    const result = checkSubarraySum([3, 3], 6);
    expect(result).toEqual(true);
  });

  it("checkSubarraySum([-1, -2, -3, -4, -5], -8)", () => {
    const result = checkSubarraySum([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(false);
  });

  it("checkSubarraySum([1, 2], 3)", () => {
    const result = checkSubarraySum([1, 2], 3);
    expect(result).toEqual(true);
  });

  it("checkSubarraySum([0, 4, 3, 0], 0)", () => {
    const result = checkSubarraySum([0, 4, 3, 0], 0);
    expect(result).toEqual(false);
  });
});
