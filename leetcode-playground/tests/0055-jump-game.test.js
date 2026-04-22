import { canJump } from '../0055-jump-game.js';

describe('0055-jump-game', () => {
  it("canJump([1, 2, 3, 4, 5])", () => {
    const result = canJump([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("canJump([])", () => {
    const result = canJump([]);
    expect(result).toEqual(true);
  });

  it("canJump([1])", () => {
    const result = canJump([1]);
    expect(result).toEqual(true);
  });

  it("canJump([1, 1])", () => {
    const result = canJump([1, 1]);
    expect(result).toEqual(true);
  });

  it("canJump([3, 1, 4, 1, 5])", () => {
    const result = canJump([3, 1, 4, 1, 5]);
    expect(result).toEqual(true);
  });

  it("canJump([-1, 0, 1])", () => {
    const result = canJump([-1, 0, 1]);
    expect(result).toEqual(false);
  });
});
