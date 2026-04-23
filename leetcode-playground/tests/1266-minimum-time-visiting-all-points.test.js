import { minTimeToVisitAllPoints } from '../1266-minimum-time-visiting-all-points.js';

describe('1266-minimum-time-visiting-all-points', () => {
  it("minTimeToVisitAllPoints([[1, 2], [3, 4]])", () => {
    const result = minTimeToVisitAllPoints([[1, 2], [3, 4]]);
    expect(result).toEqual(2);
  });

  it("minTimeToVisitAllPoints([[1]])", () => {
    const result = minTimeToVisitAllPoints([[1]]);
    expect(result).toEqual(0);
  });

  it("minTimeToVisitAllPoints([[]])", () => {
    const result = minTimeToVisitAllPoints([[]]);
    expect(result).toEqual(0);
  });

  it("minTimeToVisitAllPoints([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = minTimeToVisitAllPoints([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(6);
  });
});
