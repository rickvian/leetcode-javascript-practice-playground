import { countBattleships } from '../0419-battleships-in-a-board.js';

describe('0419-battleships-in-a-board', () => {
  it("countBattleships([1, 2, 3])", () => {
    const result = countBattleships([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("countBattleships([])", () => {
    const result = countBattleships([]);
    expect(result).toEqual(0);
  });

  it("countBattleships([0])", () => {
    const result = countBattleships([0]);
    expect(result).toEqual(0);
  });

  it("countBattleships([-1, 0, 1])", () => {
    const result = countBattleships([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
