import { diagonalSort } from '../1329-sort-the-matrix-diagonally.js';

describe('1329-sort-the-matrix-diagonally', () => {
  it("diagonalSort([[1, 2], [3, 4]])", () => {
    const result = diagonalSort([[1, 2], [3, 4]]);
    expect(result).toEqual([[1, 2], [3, 4]]);
  });

  it("diagonalSort([[1]])", () => {
    const result = diagonalSort([[1]]);
    expect(result).toEqual([[1]]);
  });

  it("diagonalSort([[]])", () => {
    const result = diagonalSort([[]]);
    expect(result).toEqual([[]]);
  });

  it("diagonalSort([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = diagonalSort([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
  });
});
