import { getSum } from '../0371-sum-of-two-integers.js';

describe('0371-sum-of-two-integers', () => {
  it("getSum(1, 1)", () => {
    const result = getSum(1, 1);
    expect(result).toEqual(2);
  });

  it("getSum(0, 0)", () => {
    const result = getSum(0, 0);
    expect(result).toEqual(0);
  });

  it("getSum(3, 7)", () => {
    const result = getSum(3, 7);
    expect(result).toEqual(10);
  });

  it("getSum(100, 1000)", () => {
    const result = getSum(100, 1000);
    expect(result).toEqual(1100);
  });
});
