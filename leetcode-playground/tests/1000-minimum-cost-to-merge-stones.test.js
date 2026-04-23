import { mergeStones } from '../1000-minimum-cost-to-merge-stones.js';

describe('1000-minimum-cost-to-merge-stones', () => {
  it("mergeStones([2, 7, 11, 15], 9)", () => {
    const result = mergeStones([2, 7, 11, 15], 9);
    expect(result).toEqual(-1);
  });

  it("mergeStones([3, 2, 4], 6)", () => {
    const result = mergeStones([3, 2, 4], 6);
    expect(result).toEqual(-1);
  });

  it("mergeStones([3, 3], 6)", () => {
    const result = mergeStones([3, 3], 6);
    expect(result).toEqual(-1);
  });

  it("mergeStones([-1, -2, -3, -4, -5], -8)", () => {
    const result = mergeStones([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(-1);
  });

  it("mergeStones([1, 2], 3)", () => {
    const result = mergeStones([1, 2], 3);
    expect(result).toEqual(-1);
  });
});
