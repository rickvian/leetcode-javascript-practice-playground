import { maxSumAfterPartitioning } from '../1043-partition-array-for-maximum-sum.js';

describe('1043-partition-array-for-maximum-sum', () => {
  it("maxSumAfterPartitioning([2, 7, 11, 15], 9)", () => {
    const result = maxSumAfterPartitioning([2, 7, 11, 15], 9);
    expect(result).toEqual(60);
  });

  it("maxSumAfterPartitioning([3, 2, 4], 6)", () => {
    const result = maxSumAfterPartitioning([3, 2, 4], 6);
    expect(result).toEqual(12);
  });

  it("maxSumAfterPartitioning([3, 3], 6)", () => {
    const result = maxSumAfterPartitioning([3, 3], 6);
    expect(result).toEqual(6);
  });

  it("maxSumAfterPartitioning([-1, -2, -3, -4, -5], -8)", () => {
    const result = maxSumAfterPartitioning([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("maxSumAfterPartitioning([1, 2], 3)", () => {
    const result = maxSumAfterPartitioning([1, 2], 3);
    expect(result).toEqual(4);
  });

  it("maxSumAfterPartitioning([0, 4, 3, 0], 0)", () => {
    const result = maxSumAfterPartitioning([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
