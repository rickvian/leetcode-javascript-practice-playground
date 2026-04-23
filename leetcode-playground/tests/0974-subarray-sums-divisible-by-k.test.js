import { subarraysDivByK } from '../0974-subarray-sums-divisible-by-k.js';

describe('0974-subarray-sums-divisible-by-k', () => {
  it("subarraysDivByK([2, 7, 11, 15], 9)", () => {
    const result = subarraysDivByK([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("subarraysDivByK([3, 2, 4], 6)", () => {
    const result = subarraysDivByK([3, 2, 4], 6);
    expect(result).toEqual(1);
  });

  it("subarraysDivByK([3, 3], 6)", () => {
    const result = subarraysDivByK([3, 3], 6);
    expect(result).toEqual(1);
  });

  it("subarraysDivByK([-1, -2, -3, -4, -5], -8)", () => {
    const result = subarraysDivByK([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("subarraysDivByK([1, 2], 3)", () => {
    const result = subarraysDivByK([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("subarraysDivByK([0, 4, 3, 0], 0)", () => {
    const result = subarraysDivByK([0, 4, 3, 0], 0);
    expect(result).toEqual(6);
  });
});
