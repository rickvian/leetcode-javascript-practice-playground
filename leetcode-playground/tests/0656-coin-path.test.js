import { cheapestJump } from '../0656-coin-path.js';

describe('0656-coin-path', () => {
  it("cheapestJump([2, 7, 11, 15], 9)", () => {
    const result = cheapestJump([2, 7, 11, 15], 9);
    expect(result).toEqual([1, 4]);
  });

  it("cheapestJump([3, 2, 4], 6)", () => {
    const result = cheapestJump([3, 2, 4], 6);
    expect(result).toEqual([1, 3]);
  });

  it("cheapestJump([3, 3], 6)", () => {
    const result = cheapestJump([3, 3], 6);
    expect(result).toEqual([1, 2]);
  });

  it("cheapestJump([-1, -2, -3, -4, -5], -8)", () => {
    const result = cheapestJump([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual([]);
  });

  it("cheapestJump([1, 2], 3)", () => {
    const result = cheapestJump([1, 2], 3);
    expect(result).toEqual([1, 2]);
  });

  it("cheapestJump([0, 4, 3, 0], 0)", () => {
    const result = cheapestJump([0, 4, 3, 0], 0);
    expect(result).toEqual([]);
  });
});
