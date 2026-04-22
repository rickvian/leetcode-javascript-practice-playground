import { findPairs } from '../0532-k-diff-pairs-in-an-array.js';

describe('0532-k-diff-pairs-in-an-array', () => {
  it("findPairs([2, 7, 11, 15], 9)", () => {
    const result = findPairs([2, 7, 11, 15], 9);
    expect(result).toEqual(1);
  });

  it("findPairs([3, 2, 4], 6)", () => {
    const result = findPairs([3, 2, 4], 6);
    expect(result).toEqual(0);
  });

  it("findPairs([3, 3], 6)", () => {
    const result = findPairs([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("findPairs([-1, -2, -3, -4, -5], -8)", () => {
    const result = findPairs([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(0);
  });

  it("findPairs([1, 2], 3)", () => {
    const result = findPairs([1, 2], 3);
    expect(result).toEqual(0);
  });

  it("findPairs([0, 4, 3, 0], 0)", () => {
    const result = findPairs([0, 4, 3, 0], 0);
    expect(result).toEqual(1);
  });
});
