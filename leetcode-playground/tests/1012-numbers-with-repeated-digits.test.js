import { numDupDigitsAtMostN } from '../1012-numbers-with-repeated-digits.js';

describe('1012-numbers-with-repeated-digits', () => {
  it("numDupDigitsAtMostN(121)", () => {
    const result = numDupDigitsAtMostN(121);
    expect(result).toEqual(22);
  });

  it("numDupDigitsAtMostN(-121)", () => {
    const result = numDupDigitsAtMostN(-121);
    expect(result).toEqual(-923);
  });

  it("numDupDigitsAtMostN(10)", () => {
    const result = numDupDigitsAtMostN(10);
    expect(result).toEqual(0);
  });

  it("numDupDigitsAtMostN(0)", () => {
    const result = numDupDigitsAtMostN(0);
    expect(result).toEqual(-1);
  });

  it("numDupDigitsAtMostN(-1)", () => {
    const result = numDupDigitsAtMostN(-1);
    expect(result).toEqual(-12);
  });

  it("numDupDigitsAtMostN(1534236469)", () => {
    const result = numDupDigitsAtMostN(1534236469);
    expect(result).toEqual(1528451755);
  });
});
