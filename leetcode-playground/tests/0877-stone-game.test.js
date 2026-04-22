import { stoneGame } from '../0877-stone-game.js';

describe('0877-stone-game', () => {
  it("stoneGame([1, 2, 3, 4, 5])", () => {
    const result = stoneGame([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("stoneGame([])", () => {
    const result = stoneGame([]);
    expect(result).toEqual(true);
  });

  it("stoneGame([1])", () => {
    const result = stoneGame([1]);
    expect(result).toEqual(true);
  });

  it("stoneGame([1, 1])", () => {
    const result = stoneGame([1, 1]);
    expect(result).toEqual(true);
  });

  it("stoneGame([3, 1, 4, 1, 5])", () => {
    const result = stoneGame([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("stoneGame([-1, 0, 1])", () => {
    const result = stoneGame([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
