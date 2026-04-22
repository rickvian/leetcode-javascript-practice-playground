import { findKthNumber } from '../0668-kth-smallest-number-in-multiplication-table.js';

describe('0668-kth-smallest-number-in-multiplication-table', () => {
  it("findKthNumber([1, 2, 3])", () => {
    const result = findKthNumber([1, 2, 3]);
    expect(result).toEqual(1);
  });

  it("findKthNumber([])", () => {
    const result = findKthNumber([]);
    expect(result).toEqual(1);
  });

  it("findKthNumber([0])", () => {
    const result = findKthNumber([0]);
    expect(result).toEqual(1);
  });

  it("findKthNumber([-1, 0, 1])", () => {
    const result = findKthNumber([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
