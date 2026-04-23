import { canReach } from '../1306-jump-game-iii.js';

describe('1306-jump-game-iii', () => {
  it("canReach([2, 7, 11, 15], 9)", () => {
    const result = canReach([2, 7, 11, 15], 9);
    expect(result).toEqual(false);
  });

  it("canReach([3, 2, 4], 6)", () => {
    const result = canReach([3, 2, 4], 6);
    expect(result).toEqual(false);
  });

  it("canReach([3, 3], 6)", () => {
    const result = canReach([3, 3], 6);
    expect(result).toEqual(false);
  });

  it("canReach([-1, -2, -3, -4, -5], -8)", () => {
    const result = canReach([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(false);
  });

  it("canReach([1, 2], 3)", () => {
    const result = canReach([1, 2], 3);
    expect(result).toEqual(false);
  });

  it("canReach([0, 4, 3, 0], 0)", () => {
    const result = canReach([0, 4, 3, 0], 0);
    expect(result).toEqual(true);
  });
});
