import { tallestBillboard } from '../0956-tallest-billboard.js';

describe('0956-tallest-billboard', () => {
  it("tallestBillboard([1, 2, 3, 4, 5])", () => {
    const result = tallestBillboard([1, 2, 3, 4, 5]);
    expect(result).toEqual(7);
  });

  it("tallestBillboard([])", () => {
    const result = tallestBillboard([]);
    expect(result).toEqual(0);
  });

  it("tallestBillboard([1])", () => {
    const result = tallestBillboard([1]);
    expect(result).toEqual(0);
  });

  it("tallestBillboard([1, 1])", () => {
    const result = tallestBillboard([1, 1]);
    expect(result).toEqual(1);
  });

  it("tallestBillboard([3, 1, 4, 1, 5])", () => {
    const result = tallestBillboard([3, 1, 4, 1, 5]);
    expect(result).toEqual(7);
  });

  it("tallestBillboard([-1, 0, 1])", () => {
    const result = tallestBillboard([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
