import { stoneGameII } from '../1140-stone-game-ii.js';

describe('1140-stone-game-ii', () => {
  it("stoneGameII([1, 2, 3, 4, 5])", () => {
    const result = stoneGameII([1, 2, 3, 4, 5]);
    expect(result).toEqual(8);
  });

  it("stoneGameII([])", () => {
    const result = stoneGameII([]);
    expect(result).toEqual(0);
  });

  it("stoneGameII([1])", () => {
    const result = stoneGameII([1]);
    expect(result).toEqual(1);
  });

  it("stoneGameII([1, 1])", () => {
    const result = stoneGameII([1, 1]);
    expect(result).toEqual(2);
  });

  it("stoneGameII([3, 1, 4, 1, 5])", () => {
    const result = stoneGameII([3, 1, 4, 1, 5]);
    expect(result).toEqual(8);
  });

  it("stoneGameII([-1, 0, 1])", () => {
    const result = stoneGameII([-1, 0, 1]);
    expect(result).toEqual(-1);
  });
});
