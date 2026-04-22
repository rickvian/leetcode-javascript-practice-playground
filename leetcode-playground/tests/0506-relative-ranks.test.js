import { findRelativeRanks } from '../0506-relative-ranks.js';

describe('0506-relative-ranks', () => {
  it("findRelativeRanks([1, 2, 3, 4, 5])", () => {
    const result = findRelativeRanks([1, 2, 3, 4, 5]);
    expect(result).toEqual(["5", "4", "Bronze Medal", "Silver Medal", "Gold Medal"]);
  });

  it("findRelativeRanks([])", () => {
    const result = findRelativeRanks([]);
    expect(result).toEqual([]);
  });

  it("findRelativeRanks([1])", () => {
    const result = findRelativeRanks([1]);
    expect(result).toEqual(["Gold Medal"]);
  });

  it("findRelativeRanks([1, 1])", () => {
    const result = findRelativeRanks([1, 1]);
    expect(result).toEqual([1, "Gold Medal"]);
  });

  it("findRelativeRanks([3, 1, 4, 1, 5])", () => {
    const result = findRelativeRanks([3, 1, 4, 1, 5]);
    expect(result).toEqual(["Bronze Medal", 1, "Silver Medal", "4", "Gold Medal"]);
  });

  it("findRelativeRanks([-1, 0, 1])", () => {
    const result = findRelativeRanks([-1, 0, 1]);
    expect(result).toEqual(["Bronze Medal", "Silver Medal", "Gold Medal"]);
  });
});
