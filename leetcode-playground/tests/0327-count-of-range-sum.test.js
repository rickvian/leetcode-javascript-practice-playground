import { countRangeSum } from '../0327-count-of-range-sum.js';

describe('0327-count-of-range-sum', () => {
  it("countRangeSum([1, 2, 3])", () => {
    const result = countRangeSum([1, 2, 3]);
    expect(result).toEqual(0);
  });

  it("countRangeSum([])", () => {
    const result = countRangeSum([]);
    expect(result).toEqual(0);
  });

  it("countRangeSum([0])", () => {
    const result = countRangeSum([0]);
    expect(result).toEqual(0);
  });

  it("countRangeSum([-1, 0, 1])", () => {
    const result = countRangeSum([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
