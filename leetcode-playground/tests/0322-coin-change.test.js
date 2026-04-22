import { coinChange } from '../0322-coin-change.js';

describe('0322-coin-change', () => {
  it("coinChange([2, 7, 11, 15], 9)", () => {
    const result = coinChange([2, 7, 11, 15], 9);
    expect(result).toEqual(2);
  });

  it("coinChange([3, 2, 4], 6)", () => {
    const result = coinChange([3, 2, 4], 6);
    expect(result).toEqual(2);
  });

  it("coinChange([3, 3], 6)", () => {
    const result = coinChange([3, 3], 6);
    expect(result).toEqual(2);
  });

  it("coinChange([1, 2], 3)", () => {
    const result = coinChange([1, 2], 3);
    expect(result).toEqual(2);
  });

  it("coinChange([0, 4, 3, 0], 0)", () => {
    const result = coinChange([0, 4, 3, 0], 0);
    expect(result).toEqual(0);
  });
});
