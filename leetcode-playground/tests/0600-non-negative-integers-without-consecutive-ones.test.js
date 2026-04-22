import { findIntegers } from '../0600-non-negative-integers-without-consecutive-ones.js';

describe('0600-non-negative-integers-without-consecutive-ones', () => {
  it("findIntegers(121)", () => {
    const result = findIntegers(121);
    expect(result).toEqual(34);
  });

  it("findIntegers(-121)", () => {
    const result = findIntegers(-121);
    expect(result).toEqual(34);
  });

  it("findIntegers(10)", () => {
    const result = findIntegers(10);
    expect(result).toEqual(8);
  });

  it("findIntegers(0)", () => {
    const result = findIntegers(0);
    expect(result).toEqual(1);
  });

  it("findIntegers(-1)", () => {
    const result = findIntegers(-1);
    expect(result).toEqual(2);
  });

  it("findIntegers(1534236469)", () => {
    const result = findIntegers(1534236469);
    expect(result).toEqual(3524578);
  });
});
