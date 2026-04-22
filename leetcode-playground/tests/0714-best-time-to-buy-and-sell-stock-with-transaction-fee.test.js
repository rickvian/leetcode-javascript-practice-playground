import { maxProfit } from '../0714-best-time-to-buy-and-sell-stock-with-transaction-fee.js';

describe('0714-best-time-to-buy-and-sell-stock-with-transaction-fee', () => {
  it("maxProfit([2, 7, 11, 15], 9)", () => {
    const result = maxProfit([2, 7, 11, 15], 9);
    expect(result).toEqual(4);
  });

  it("maxProfit([3, 2, 4], 6)", () => {
    const result = maxProfit([3, 2, 4], 6);
    expect(result).toEqual(0);
  });

  it("maxProfit([3, 3], 6)", () => {
    const result = maxProfit([3, 3], 6);
    expect(result).toEqual(0);
  });

  it("maxProfit([-1, -2, -3, -4, -5], -8)", () => {
    const result = maxProfit([-1, -2, -3, -4, -5], -8);
    expect(result).toEqual(28);
  });

  it("maxProfit([1, 2], 3)", () => {
    const result = maxProfit([1, 2], 3);
    expect(result).toEqual(0);
  });

  it("maxProfit([0, 4, 3, 0], 0)", () => {
    const result = maxProfit([0, 4, 3, 0], 0);
    expect(result).toEqual(4);
  });
});
