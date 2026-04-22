import { TicTacToe } from '../0348-design-tic-tac-toe.js';

describe('0348-design-tic-tac-toe', () => {
  it("sequence 1", () => {
    const obj = new TicTacToe();
    expect(obj.move(1, 1, 1)).toEqual(0);
  });
});
