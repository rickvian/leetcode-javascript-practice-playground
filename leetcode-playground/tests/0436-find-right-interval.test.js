import { findRightInterval } from '../0436-find-right-interval.js';

describe('0436-find-right-interval', () => {
  it("findRightInterval([[1, 2], [3, 4]])", () => {
    const result = findRightInterval([[1, 2], [3, 4]]);
    expect(result).toEqual([1, -1]);
  });

  it("findRightInterval([[1]])", () => {
    const result = findRightInterval([[1]]);
    expect(result).toEqual([-1]);
  });

  it("findRightInterval([[]])", () => {
    const result = findRightInterval([[]]);
    expect(result).toEqual([-1]);
  });

  it("findRightInterval([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = findRightInterval([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([1, 2, -1]);
  });
});
