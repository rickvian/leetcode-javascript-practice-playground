import { maxCoins } from '../0312-burst-balloons.js';

describe('0312-burst-balloons', () => {
  it("maxCoins([1, 2, 3, 4, 5])", () => {
    const result = maxCoins([1, 2, 3, 4, 5]);
    expect(result).toEqual(110);
  });

  it("maxCoins([])", () => {
    const result = maxCoins([]);
    expect(result).toEqual(0);
  });

  it("maxCoins([1])", () => {
    const result = maxCoins([1]);
    expect(result).toEqual(1);
  });

  it("maxCoins([1, 1])", () => {
    const result = maxCoins([1, 1]);
    expect(result).toEqual(2);
  });

  it("maxCoins([3, 1, 4, 1, 5])", () => {
    const result = maxCoins([3, 1, 4, 1, 5]);
    expect(result).toEqual(112);
  });

  it("maxCoins([-1, 0, 1])", () => {
    const result = maxCoins([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
