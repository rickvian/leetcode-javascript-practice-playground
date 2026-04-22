import { fallingSquares } from '../0699-falling-squares.js';

describe('0699-falling-squares', () => {
  it("fallingSquares([[1, 2], [2, 3], [6, 1]])", () => {
    const result = fallingSquares([[1, 2], [2, 3], [6, 1]]);
    expect(result).toEqual([2, 5, 5]);
  });

  it("fallingSquares([[100, 100], [200, 100]])", () => {
    const result = fallingSquares([[100, 100], [200, 100]]);
    expect(result).toEqual([100, 100]);
  });

  it("fallingSquares([[1, 5], [2, 2], [7, 5]])", () => {
    const result = fallingSquares([[1, 5], [2, 2], [7, 5]]);
    expect(result).toEqual([5, 7, 7]);
  });

  it("fallingSquares([[1, 1]])", () => {
    const result = fallingSquares([[1, 1]]);
    expect(result).toEqual([1]);
  });

  it("fallingSquares([[1, 2], [3, 1]])", () => {
    const result = fallingSquares([[1, 2], [3, 1]]);
    expect(result).toEqual([2, 2]);
  });

  it("fallingSquares([[2, 3], [2, 3], [2, 3]])", () => {
    const result = fallingSquares([[2, 3], [2, 3], [2, 3]]);
    expect(result).toEqual([3, 6, 9]);
  });
});
