import { maxSumDivThree } from '../1262-greatest-sum-divisible-by-three.js';

describe('1262-greatest-sum-divisible-by-three', () => {
  it("maxSumDivThree([1, 2, 3, 4, 5])", () => {
    const result = maxSumDivThree([1, 2, 3, 4, 5]);
    expect(result).toEqual(15);
  });

  it("maxSumDivThree([])", () => {
    const result = maxSumDivThree([]);
    expect(result).toEqual(0);
  });

  it("maxSumDivThree([1])", () => {
    const result = maxSumDivThree([1]);
    expect(result).toEqual(0);
  });

  it("maxSumDivThree([1, 1])", () => {
    const result = maxSumDivThree([1, 1]);
    expect(result).toEqual(0);
  });

  it("maxSumDivThree([3, 1, 4, 1, 5])", () => {
    const result = maxSumDivThree([3, 1, 4, 1, 5]);
    expect(result).toEqual(12);
  });

  it("maxSumDivThree([-1, 0, 1])", () => {
    const result = maxSumDivThree([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
