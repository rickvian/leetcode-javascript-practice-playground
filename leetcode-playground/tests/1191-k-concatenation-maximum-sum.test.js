import { kConcatenationMaxSum } from '../1191-k-concatenation-maximum-sum.js';

describe('1191-k-concatenation-maximum-sum', () => {
  it("kConcatenationMaxSum([2, 7, 11, 15], 9)", () => {
    const result = kConcatenationMaxSum([2, 7, 11, 15], 9);
    expect(result).toEqual(315);
  });

  it("kConcatenationMaxSum([3, 2, 4], 6)", () => {
    const result = kConcatenationMaxSum([3, 2, 4], 6);
    expect(result).toEqual(54);
  });

  it("kConcatenationMaxSum([3, 3], 6)", () => {
    const result = kConcatenationMaxSum([3, 3], 6);
    expect(result).toEqual(36);
  });

  it("kConcatenationMaxSum([-1, -2, -3, -4, -5], -8)", () => {
    const result = kConcatenationMaxSum([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("kConcatenationMaxSum([1, 2], 3)", () => {
    const result = kConcatenationMaxSum([1, 2], 3);
    expect(result).toEqual(9);
  });

  it("kConcatenationMaxSum([0, 4, 3, 0], 0)", () => {
    const result = kConcatenationMaxSum([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
