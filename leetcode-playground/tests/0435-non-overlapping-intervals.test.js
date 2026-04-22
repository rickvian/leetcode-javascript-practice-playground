import { eraseOverlapIntervals } from '../0435-non-overlapping-intervals.js';

describe('0435-non-overlapping-intervals', () => {
  it("eraseOverlapIntervals([[1, 2], [3, 4]])", () => {
    const result = eraseOverlapIntervals([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("eraseOverlapIntervals([[1]])", () => {
    const result = eraseOverlapIntervals([[1]]);
    expect(result).toEqual(0);
  });

  it("eraseOverlapIntervals([[]])", () => {
    const result = eraseOverlapIntervals([[]]);
    expect(result).toEqual(0);
  });

  it("eraseOverlapIntervals([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = eraseOverlapIntervals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});
