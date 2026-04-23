import { canDivideIntoSubsequences } from '../1121-divide-array-into-increasing-sequences.js';

describe('1121-divide-array-into-increasing-sequences', () => {
  it("canDivideIntoSubsequences([2, 7, 11, 15], 9)", () => {
    const result = canDivideIntoSubsequences([2, 7, 11, 15], 9);
    expect(result).toEqual(false);
  });

  it("canDivideIntoSubsequences([3, 2, 4], 6)", () => {
    const result = canDivideIntoSubsequences([3, 2, 4], 6);
    expect(result).toEqual(false);
  });

  it("canDivideIntoSubsequences([3, 3], 6)", () => {
    const result = canDivideIntoSubsequences([3, 3], 6);
    expect(result).toEqual(false);
  });

  it("canDivideIntoSubsequences([-1, -2, -3, -4, -5], -8)", () => {
    const result = canDivideIntoSubsequences([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(true);
  });

  it("canDivideIntoSubsequences([1, 2], 3)", () => {
    const result = canDivideIntoSubsequences([1, 2], 3);
    expect(result).toEqual(false);
  });

  it("canDivideIntoSubsequences([0, 4, 3, 0], 0)", () => {
    const result = canDivideIntoSubsequences([0, 4, 3, 0], 0);
    expect(result).toEqual(true);
  });
});
