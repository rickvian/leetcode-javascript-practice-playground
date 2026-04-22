import { movesToChessboard } from '../0782-transform-to-chessboard.js';

describe('0782-transform-to-chessboard', () => {
  it("movesToChessboard([[1, 2], [3, 4]])", () => {
    const result = movesToChessboard([[1, 2], [3, 4]]);
    expect(result).toEqual(-1);
  });

  it("movesToChessboard([[1]])", () => {
    const result = movesToChessboard([[1]]);
    expect(result).toEqual(0);
  });

  it("movesToChessboard([[]])", () => {
    const result = movesToChessboard([[]]);
    expect(result).toEqual(-1);
  });

  it("movesToChessboard([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = movesToChessboard([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual(-1);
  });
});
