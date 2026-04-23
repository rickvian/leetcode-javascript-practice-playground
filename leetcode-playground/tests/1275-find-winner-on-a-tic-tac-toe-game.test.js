import { tictactoe } from '../1275-find-winner-on-a-tic-tac-toe-game.js';

describe('1275-find-winner-on-a-tic-tac-toe-game', () => {
  it("tictactoe([[1, 2], [3, 4]])", () => {
    const result = tictactoe([[1, 2], [3, 4]]);
    expect(result).toEqual("Pending");
  });

  it("tictactoe([[1]])", () => {
    const result = tictactoe([[1]]);
    expect(result).toEqual("Pending");
  });

  it("tictactoe([[]])", () => {
    const result = tictactoe([[]]);
    expect(result).toEqual("Pending");
  });

  it("tictactoe([[1, 2, 3], [4, 5, 6], [7, 8, 9]])", () => {
    const result = tictactoe([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
    expect(result).toEqual("Pending");
  });
});
