import { findMissingRanges } from '../0163-missing-ranges.js';

describe('0163-missing-ranges', () => {
  it("findMissingRanges([1, 2, 3])", () => {
    const result = findMissingRanges([1, 2, 3]);
    expect(result).toEqual([]);
  });

  it("findMissingRanges([])", () => {
    const result = findMissingRanges([]);
    expect(result).toEqual([]);
  });

  it("findMissingRanges([0])", () => {
    const result = findMissingRanges([0]);
    expect(result).toEqual([]);
  });

  it("findMissingRanges([-1, 0, 1])", () => {
    const result = findMissingRanges([-1, 0, 1]);
    expect(result).toEqual([]);
  });
});
