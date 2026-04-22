import { maxProfit } from '../0188-best-time-to-buy-and-sell-stock-iv.js';

describe('0188-best-time-to-buy-and-sell-stock-iv', () => {
  it("maxProfit(2, [3, 2, 6, 5, 0, 3])", () => {
    const result = maxProfit(2, [3, 2, 6, 5, 0, 3]);
    expect(result).toEqual(7);
  });

  it("maxProfit(2, [2, 1])", () => {
    const result = maxProfit(2, [2, 1]);
    expect(result).toEqual(0);
  });

  it("maxProfit(0, [3, 2, 6])", () => {
    const result = maxProfit(0, [3, 2, 6]);
    expect(result).toEqual(0);
  });

  it("maxProfit(1, [1, 2, 3])", () => {
    const result = maxProfit(1, [1, 2, 3]);
    expect(result).toEqual(2);
  });

  it("maxProfit(3, [1, 2, 3, 4, 5])", () => {
    const result = maxProfit(3, [1, 2, 3, 4, 5]);
    expect(result).toEqual(4);
  });

  it("maxProfit(1, [7, 6, 4, 3, 1])", () => {
    const result = maxProfit(1, [7, 6, 4, 3, 1]);
    expect(result).toEqual(0);
  });
});
