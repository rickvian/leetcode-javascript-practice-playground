import { maxProfit } from '../0123-best-time-to-buy-and-sell-stock-iii.js';

describe('0123-best-time-to-buy-and-sell-stock-iii', () => {
  it("maxProfit([1, 2, 3, 4, 5])", () => {
    const result = maxProfit([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("maxProfit([1])", () => {
    const result = maxProfit([1]);
    expect(result).toEqual(0);
  });

  it("maxProfit([1, 1])", () => {
    const result = maxProfit([1, 1]);
    expect(result).toEqual(0);
  });

  it("maxProfit([3, 1, 4, 1, 5])", () => {
    const result = maxProfit([3, 1, 4, 1, 5]);
    expect(result).toEqual(7);
  });

  it("maxProfit([-1, 0, 1])", () => {
    const result = maxProfit([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
