import { findBestValue } from '../1300-sum-of-mutated-array-closest-to-target.js';

describe('1300-sum-of-mutated-array-closest-to-target', () => {
  it("findBestValue([2, 7, 11, 15], 9)", () => {
    const result = findBestValue([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("findBestValue([3, 2, 4], 6)", () => {
    const result = findBestValue([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("findBestValue([3, 3], 6)", () => {
    const result = findBestValue([3, 3], 6);
    expect(result).toEqual(3);
  });

  it("findBestValue([-1, -2, -3, -4, -5], -8)", () => {
    const result = findBestValue([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-1);
  });

  it("findBestValue([1, 2], 3)", () => {
    const result = findBestValue([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("findBestValue([0, 4, 3, 0], 0)", () => {
    const result = findBestValue([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
