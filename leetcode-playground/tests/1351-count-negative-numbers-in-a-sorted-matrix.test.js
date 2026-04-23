import { countNegatives } from '../1351-count-negative-numbers-in-a-sorted-matrix.js';

describe('1351-count-negative-numbers-in-a-sorted-matrix', () => {
  it("countNegatives([[1, 2], [3, 4]])", () => {
    const result = countNegatives([[1, 2], [3, 4]]);
    expect(result).toEqual(0);
  });

  it("countNegatives([[1]])", () => {
    const result = countNegatives([[1]]);
    expect(result).toEqual(0);
  });

  it("countNegatives([[]])", () => {
    const result = countNegatives([[]]);
    expect(result).toEqual(0);
  });

  it("countNegatives([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = countNegatives([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(0);
  });
});
