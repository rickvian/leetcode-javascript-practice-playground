import { totalNQueens } from '../0052-n-queens-ii.js';

describe('0052-n-queens-ii', () => {
  it("totalNQueens(1)", () => {
    const result = totalNQueens(1);
    expect(result).toEqual(1);
  });

  it("totalNQueens(4)", () => {
    const result = totalNQueens(4);
    expect(result).toEqual(2);
  });

  it("totalNQueens(5)", () => {
    const result = totalNQueens(5);
    expect(result).toEqual(10);
  });

  it("totalNQueens(6)", () => {
    const result = totalNQueens(6);
    expect(result).toEqual(4);
  });
});
