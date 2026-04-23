import { removeCoveredIntervals } from '../1288-remove-covered-intervals.js';

describe('1288-remove-covered-intervals', () => {
  it("removeCoveredIntervals([[1, 2], [3, 4]])", () => {
    const result = removeCoveredIntervals([[1, 2], [3, 4]]);
    expect(result).toEqual(2);
  });

  it("removeCoveredIntervals([[1]])", () => {
    const result = removeCoveredIntervals([[1]]);
    expect(result).toEqual(1);
  });

  it("removeCoveredIntervals([[]])", () => {
    const result = removeCoveredIntervals([[]]);
    expect(result).toEqual(1);
  });

  it("removeCoveredIntervals([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = removeCoveredIntervals([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(3);
  });
});
