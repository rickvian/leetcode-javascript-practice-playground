import { sortedSquares } from '../0977-squares-of-a-sorted-array.js';

describe('0977-squares-of-a-sorted-array', () => {
  it("sortedSquares([1, 2, 3, 4, 5])", () => {
    const result = sortedSquares([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 4, 9, 16, 25]);
  });

  it("sortedSquares([])", () => {
    const result = sortedSquares([]);
    expect(result).toEqual([]);
  });

  it("sortedSquares([1])", () => {
    const result = sortedSquares([1]);
    expect(result).toEqual([1]);
  });

  it("sortedSquares([1, 1])", () => {
    const result = sortedSquares([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("sortedSquares([3, 1, 4, 1, 5])", () => {
    const result = sortedSquares([3, 1, 4, 1, 5]);
    expect(result).toEqual([1, 1, 9, 16, 25]);
  });

  it("sortedSquares([-1, 0, 1])", () => {
    const result = sortedSquares([-1, 0, 1]);
    expect(result).toEqual([0, 1, 1]);
  });
});
