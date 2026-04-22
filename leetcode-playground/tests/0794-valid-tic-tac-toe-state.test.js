import { validTicTacToe } from '../0794-valid-tic-tac-toe-state.js';

describe('0794-valid-tic-tac-toe-state', () => {
  it("validTicTacToe([\"flower\", \"flow\", \"flight\"])", () => {
    const result = validTicTacToe(["flower", "flow", "flight"]);
    expect(result).toEqual(true);
  });

  it("validTicTacToe([\"a\", \"b\", \"c\"])", () => {
    const result = validTicTacToe(["a", "b", "c"]);
    expect(result).toEqual(true);
  });

  it("validTicTacToe([\"\"])", () => {
    const result = validTicTacToe([""]);
    expect(result).toEqual(true);
  });

  it("validTicTacToe([\"ab\", \"a\", \"abc\"])", () => {
    const result = validTicTacToe(["ab", "a", "abc"]);
    expect(result).toEqual(true);
  });
});
