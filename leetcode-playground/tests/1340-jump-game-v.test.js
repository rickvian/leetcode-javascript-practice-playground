import { maxJumps } from '../1340-jump-game-v.js';

describe('1340-jump-game-v', () => {
  it("maxJumps([2, 7, 11, 15], 9)", () => {
    const result = maxJumps([2, 7, 11, 15], 9);
    expect(result).toEqual(4);
  });

  it("maxJumps([3, 2, 4], 6)", () => {
    const result = maxJumps([3, 2, 4], 6);
    expect(result).toEqual(3);
  });

  it("maxJumps([3, 3], 6)", () => {
    const result = maxJumps([3, 3], 6);
    expect(result).toEqual(1);
  });

  it("maxJumps([-1, -2, -3, -4, -5], -8)", () => {
    const result = maxJumps([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(1);
  });

  it("maxJumps([1, 2], 3)", () => {
    const result = maxJumps([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("maxJumps([0, 4, 3, 0], 0)", () => {
    const result = maxJumps([0, 4, 3, 0], 0);
    expect(result).toEqual(1);
  });
});
