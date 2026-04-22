import { solveNQueens } from '../0051-n-queens.js';

describe('0051-n-queens', () => {
  it("solveNQueens(1)", () => {
    const result = solveNQueens(1);
    expect(result).toEqual([["Q"]]);
  });

  it("solveNQueens(4)", () => {
    const result = solveNQueens(4);
    expect(result).toEqual([[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]]);
  });

  it("solveNQueens(5)", () => {
    const result = solveNQueens(5);
    expect(result).toEqual([["Q....", "..Q..", "....Q", ".Q...", "...Q."], ["Q....", "...Q.", ".Q...", "....Q", "..Q.."], [".Q...", "...Q.", "Q....", "..Q..", "....Q"], [".Q...", "....Q", "..Q..", "Q....", "...Q."], ["..Q..", "Q....", "...Q.", ".Q...", "....Q"], ["..Q..", "....Q", ".Q...", "...Q.", "Q...."], ["...Q.", "Q....", "..Q..", "....Q", ".Q..."], ["...Q.", ".Q...", "....Q", "..Q..", "Q...."], ["....Q", ".Q...", "...Q.", "Q....", "..Q.."], ["....Q", "..Q..", "Q....", "...Q.", ".Q..."]]);
  });

  it("solveNQueens(6)", () => {
    const result = solveNQueens(6);
    expect(result).toEqual([[".Q....", "...Q..", ".....Q", "Q.....", "..Q...", "....Q."], ["..Q...", ".....Q", ".Q....", "....Q.", "Q.....", "...Q.."], ["...Q..", "Q.....", "....Q.", ".Q....", ".....Q", "..Q..."], ["....Q.", "..Q...", "Q.....", ".....Q", "...Q..", ".Q...."]]);
  });
});
