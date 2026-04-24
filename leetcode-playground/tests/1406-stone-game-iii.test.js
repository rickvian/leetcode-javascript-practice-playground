import { stoneGameIII } from '../1406-stone-game-iii.js';

describe('1406-stone-game-iii', () => {
  it("stoneGameIII([1, 2, 3, 4, 5])", () => {
    const result = stoneGameIII([1, 2, 3, 4, 5]);
    expect(result).toEqual("Bob");
  });

  it("stoneGameIII([])", () => {
    const result = stoneGameIII([]);
    expect(result).toEqual("Tie");
  });

  it("stoneGameIII([1])", () => {
    const result = stoneGameIII([1]);
    expect(result).toEqual("Alice");
  });

  it("stoneGameIII([1, 1])", () => {
    const result = stoneGameIII([1, 1]);
    expect(result).toEqual("Alice");
  });

  it("stoneGameIII([3, 1, 4, 1, 5])", () => {
    const result = stoneGameIII([3, 1, 4, 1, 5]);
    expect(result).toEqual("Alice");
  });

  it("stoneGameIII([-1, 0, 1])", () => {
    const result = stoneGameIII([-1, 0, 1]);
    expect(result).toEqual("Tie");
  });
});
