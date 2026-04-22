import { findMinArrowShots } from '../0452-minimum-number-of-arrows-to-burst-balloons.js';

describe('0452-minimum-number-of-arrows-to-burst-balloons', () => {
  it("findMinArrowShots([[1, 2], [3, 4]])", () => {
    const result = findMinArrowShots([[1, 2], [3, 4]]);
    expect(result).toEqual(2);
  });

  it("findMinArrowShots([[1]])", () => {
    const result = findMinArrowShots([[1]]);
    expect(result).toEqual(1);
  });

  it("findMinArrowShots([[]])", () => {
    const result = findMinArrowShots([[]]);
    expect(result).toEqual(1);
  });

  it("findMinArrowShots([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = findMinArrowShots([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(3);
  });
});
