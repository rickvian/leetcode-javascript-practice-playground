import { solveSudoku } from '../0037-sudoku-solver.js';

describe('0037-sudoku-solver', () => {
  it("solveSudoku([1, 2, 3])", () => {
    const result = solveSudoku([1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("solveSudoku([])", () => {
    const result = solveSudoku([]);
    expect(result).toEqual([]);
  });

  it("solveSudoku([0])", () => {
    const result = solveSudoku([0]);
    expect(result).toEqual([0]);
  });

  it("solveSudoku([-1, 0, 1])", () => {
    const result = solveSudoku([-1, 0, 1]);
    expect(result).toEqual([-1, 0, 1]);
  });
});
