import { StockSpanner } from '../0901-online-stock-span.js';

describe('0901-online-stock-span', () => {
  it("sequence 1", () => {
    const obj = new StockSpanner();
    expect(obj.next(1)).toEqual(1);
  });
});
