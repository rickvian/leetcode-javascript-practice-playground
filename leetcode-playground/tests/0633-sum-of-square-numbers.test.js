import { judgeSquareSum } from '../0633-sum-of-square-numbers.js';

describe('0633-sum-of-square-numbers', () => {
  it("judgeSquareSum(121)", () => {
    const result = judgeSquareSum(121);
    expect(result).toEqual(true);
  });

  it("judgeSquareSum(-121)", () => {
    const result = judgeSquareSum(-121);
    expect(result).toEqual(false);
  });

  it("judgeSquareSum(10)", () => {
    const result = judgeSquareSum(10);
    expect(result).toEqual(true);
  });

  it("judgeSquareSum(0)", () => {
    const result = judgeSquareSum(0);
    expect(result).toEqual(true);
  });

  it("judgeSquareSum(-1)", () => {
    const result = judgeSquareSum(-1);
    expect(result).toEqual(false);
  });

  it("judgeSquareSum(1534236469)", () => {
    const result = judgeSquareSum(1534236469);
    expect(result).toEqual(false);
  });
});
