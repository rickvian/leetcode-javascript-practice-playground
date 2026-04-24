import { kidsWithCandies } from '../1431-kids-with-the-greatest-number-of-candies.js';

describe('1431-kids-with-the-greatest-number-of-candies', () => {
  it("kidsWithCandies([2, 7, 11, 15], 9)", () => {
    const result = kidsWithCandies([2, 7, 11, 15], 9);
    expect(result).toEqual([false, true, true, true]);
  });

  it("kidsWithCandies([3, 2, 4], 6)", () => {
    const result = kidsWithCandies([3, 2, 4], 6);
    expect(result).toEqual([true, true, true]);
  });

  it("kidsWithCandies([3, 3], 6)", () => {
    const result = kidsWithCandies([3, 3], 6);
    expect(result).toEqual([true, true]);
  });

  it("kidsWithCandies([-1, -2, -3, -4, -5], -8)", () => {
    const result = kidsWithCandies([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual([false, false, false, false, false]);
  });

  it("kidsWithCandies([1, 2], 3)", () => {
    const result = kidsWithCandies([1, 2], 3);
    expect(result).toEqual([true, true]);
  });

  it("kidsWithCandies([0, 4, 3, 0], 0)", () => {
    const result = kidsWithCandies([0, 4, 3, 0], 0);
    expect(result).toEqual([false, true, false, false]);
  });
});
