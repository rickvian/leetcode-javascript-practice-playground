import { findTargetSumWays } from '../0494-target-sum.js';

describe('0494-target-sum', () => {
  it("findTargetSumWays([2, 7, 11, 15], 9)", () => {
    const result = findTargetSumWays([2, 7, 11, 15], 9);
    expect(result).toEqual(1);
  });

  it("findTargetSumWays([3, 2, 4], 6)", () => {
    const result = findTargetSumWays([3, 2, 4], 6);
    expect(result).toEqual(0);
  });

  it("findTargetSumWays([3, 3], 6)", () => {
    const result = findTargetSumWays([3, 3], 6);
    expect(result).toEqual(1);
  });

  it("findTargetSumWays([-1, -2, -3, -4, -5], -8)", () => {
    const result = findTargetSumWays([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("findTargetSumWays([1, 2], 3)", () => {
    const result = findTargetSumWays([1, 2], 3);
    expect(result).toEqual(1);
  });

  it("findTargetSumWays([0, 4, 3, 0], 0)", () => {
    const result = findTargetSumWays([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
