import { longestOnes } from '../1004-max-consecutive-ones-iii.js';

describe('1004-max-consecutive-ones-iii', () => {
  it("longestOnes([2, 7, 11, 15], 9)", () => {
    const result = longestOnes([2, 7, 11, 15], 9);
    expect(result).toEqual(4);
  });

  it("longestOnes([3, 2, 4], 6)", () => {
    const result = longestOnes([3, 2, 4], 6);
    expect(result).toEqual(3);
  });

  it("longestOnes([3, 3], 6)", () => {
    const result = longestOnes([3, 3], 6);
    expect(result).toEqual(2);
  });

  it("longestOnes([-1, -2, -3, -4, -5], -8)", () => {
    const result = longestOnes([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("longestOnes([1, 2], 3)", () => {
    const result = longestOnes([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("longestOnes([0, 4, 3, 0], 0)", () => {
    const result = longestOnes([0, 4, 3, 0], 0);
    expect(result).toEqual(2);
  });
});
