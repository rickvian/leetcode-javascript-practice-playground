import { findDiagonalOrder } from '../1424-diagonal-traverse-ii.js';

describe('1424-diagonal-traverse-ii', () => {
  it("findDiagonalOrder([[1, 2], [3, 4]])", () => {
    const result = findDiagonalOrder([[1, 2], [3, 4]]);
    expect(result).toEqual([1, 3, 2, 4]);
  });

  it("findDiagonalOrder([[1]])", () => {
    const result = findDiagonalOrder([[1]]);
    expect(result).toEqual([1]);
  });

  it("findDiagonalOrder([[]])", () => {
    const result = findDiagonalOrder([[]]);
    expect(result).toEqual([]);
  });

  it("findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual([1, 4, 2, 7, 5, 3, 8, 6, 9]);
  });
});
