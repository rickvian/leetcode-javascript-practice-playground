import { consecutiveNumbersSum } from '../0829-consecutive-numbers-sum.js';

describe('0829-consecutive-numbers-sum', () => {
  it("consecutiveNumbersSum(121)", () => {
    const result = consecutiveNumbersSum(121);
    expect(result).toEqual(3);
  });

  it("consecutiveNumbersSum(-121)", () => {
    const result = consecutiveNumbersSum(-121);
    expect(result).toEqual(0);
  });

  it("consecutiveNumbersSum(10)", () => {
    const result = consecutiveNumbersSum(10);
    expect(result).toEqual(2);
  });

  it("consecutiveNumbersSum(0)", () => {
    const result = consecutiveNumbersSum(0);
    expect(result).toEqual(0);
  });

  it("consecutiveNumbersSum(-1)", () => {
    const result = consecutiveNumbersSum(-1);
    expect(result).toEqual(0);
  });

  it("consecutiveNumbersSum(1534236469)", () => {
    const result = consecutiveNumbersSum(1534236469);
    expect(result).toEqual(8);
  });
});
