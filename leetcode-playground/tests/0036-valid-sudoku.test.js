import { isValidSudoku } from '../0036-valid-sudoku.js';

describe('0036-valid-sudoku', () => {
  it("isValidSudoku([1, 2, 3])", () => {
    const result = isValidSudoku([1, 2, 3]);
    expect(result).toEqual(false);
  });

  it("isValidSudoku([0])", () => {
    const result = isValidSudoku([0]);
    expect(result).toEqual(false);
  });

  it("isValidSudoku([-1, 0, 1])", () => {
    const result = isValidSudoku([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
