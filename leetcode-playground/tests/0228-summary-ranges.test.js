import { summaryRanges } from '../0228-summary-ranges.js';

describe('0228-summary-ranges', () => {
  it("summaryRanges([1, 2, 3, 4, 5])", () => {
    const result = summaryRanges([1, 2, 3, 4, 5]);
    expect(result).toEqual(["1->5"]);
  });

  it("summaryRanges([])", () => {
    const result = summaryRanges([]);
    expect(result).toEqual([]);
  });

  it("summaryRanges([1])", () => {
    const result = summaryRanges([1]);
    expect(result).toEqual(["1"]);
  });

  it("summaryRanges([1, 1])", () => {
    const result = summaryRanges([1, 1]);
    expect(result).toEqual(["1", "1"]);
  });

  it("summaryRanges([3, 1, 4, 1, 5])", () => {
    const result = summaryRanges([3, 1, 4, 1, 5]);
    expect(result).toEqual(["3", "1", "4", "1", "5"]);
  });

  it("summaryRanges([-1, 0, 1])", () => {
    const result = summaryRanges([-1, 0, 1]);
    expect(result).toEqual(["-1->1"]);
  });
});
