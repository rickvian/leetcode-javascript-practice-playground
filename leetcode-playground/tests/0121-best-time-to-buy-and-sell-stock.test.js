import { maxProfit } from '../0121-best-time-to-buy-and-sell-stock.js';

describe('0121-best-time-to-buy-and-sell-stock', () => {
  it("maxProfit([1, 2, 3, 4, 5])", () => {
    const result = maxProfit([1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("maxProfit([])", () => {
    const result = maxProfit([]);
    expect(result).toEqual(0);
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
    expect(result).toEqual(4);
  });

  it("maxProfit([-1, 0, 1])", () => {
    const result = maxProfit([-1, 0, 1]);
    expect(result).toEqual(2);
  });
});
