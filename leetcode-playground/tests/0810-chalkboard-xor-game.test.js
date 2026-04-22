import { xorGame } from '../0810-chalkboard-xor-game.js';

describe('0810-chalkboard-xor-game', () => {
  it("xorGame([1, 2, 3, 4, 5])", () => {
    const result = xorGame([1, 2, 3, 4, 5]);
    expect(result).toEqual(false);
  });

  it("xorGame([])", () => {
    const result = xorGame([]);
    expect(result).toEqual(true);
  });

  it("xorGame([1])", () => {
    const result = xorGame([1]);
    expect(result).toEqual(false);
  });

  it("xorGame([1, 1])", () => {
    const result = xorGame([1, 1]);
    expect(result).toEqual(true);
  });

  it("xorGame([3, 1, 4, 1, 5])", () => {
    const result = xorGame([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("xorGame([-1, 0, 1])", () => {
    const result = xorGame([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
