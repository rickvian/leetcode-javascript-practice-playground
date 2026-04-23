import { twoSumLessThanK } from '../1099-two-sum-less-than-k.js';

describe('1099-two-sum-less-than-k', () => {
  it("twoSumLessThanK([2, 7, 11, 15], 9)", () => {
    const result = twoSumLessThanK([2, 7, 11, 15], 9);
    expect(result).toEqual(-1);
  });

  it("twoSumLessThanK([3, 2, 4], 6)", () => {
    const result = twoSumLessThanK([3, 2, 4], 6);
    expect(result).toEqual(5);
  });

  it("twoSumLessThanK([3, 3], 6)", () => {
    const result = twoSumLessThanK([3, 3], 6);
    expect(result).toEqual(-1);
  });

  it("twoSumLessThanK([-1, -2, -3, -4, -5], -8)", () => {
    const result = twoSumLessThanK([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-1);
  });

  it("twoSumLessThanK([1, 2], 3)", () => {
    const result = twoSumLessThanK([1, 2], 3);
    expect(result).toEqual(-1);
  });

  it("twoSumLessThanK([0, 4, 3, 0], 0)", () => {
    const result = twoSumLessThanK([0, 4, 3, 0], 0);
    expect(result).toEqual(-1);
  });
});
