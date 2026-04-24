import { constrainedSubsetSum } from '../1425-constrained-subsequence-sum.js';

describe('1425-constrained-subsequence-sum', () => {
  it("constrainedSubsetSum([2, 7, 11, 15], 9)", () => {
    const result = constrainedSubsetSum([2, 7, 11, 15], 9);
    expect(result).toEqual(35);
  });

  it("constrainedSubsetSum([3, 2, 4], 6)", () => {
    const result = constrainedSubsetSum([3, 2, 4], 6);
    expect(result).toEqual(9);
  });

  it("constrainedSubsetSum([3, 3], 6)", () => {
    const result = constrainedSubsetSum([3, 3], 6);
    expect(result).toEqual(6);
  });

  it("constrainedSubsetSum([-1, -2, -3, -4, -5], -8)", () => {
    const result = constrainedSubsetSum([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-1);
  });

  it("constrainedSubsetSum([1, 2], 3)", () => {
    const result = constrainedSubsetSum([1, 2], 3);
    expect(result).toEqual(3);
  });

  it("constrainedSubsetSum([0, 4, 3, 0], 0)", () => {
    const result = constrainedSubsetSum([0, 4, 3, 0], 0);
    expect(result).toEqual(4);
  });
});
