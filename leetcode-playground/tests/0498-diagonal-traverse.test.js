import { findDiagonalOrder } from '../0498-diagonal-traverse.js';

describe('0498-diagonal-traverse', () => {
  it("findDiagonalOrder([[1, 2], [3, 4]])", () => {
    const result = findDiagonalOrder([[1, 2], [3, 4]]);
    expect(result).toEqual([1, 2, 3, 4]);
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
    expect(result).toEqual([1, 2, 4, 7, 5, 3, 6, 8, 9]);
  });
});
