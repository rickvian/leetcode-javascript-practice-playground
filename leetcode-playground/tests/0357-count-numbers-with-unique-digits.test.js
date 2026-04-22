import { countNumbersWithUniqueDigits } from '../0357-count-numbers-with-unique-digits.js';

describe('0357-count-numbers-with-unique-digits', () => {
  it("countNumbersWithUniqueDigits(121)", () => {
    const result = countNumbersWithUniqueDigits(121);
    expect(result).toEqual(8877691);
  });

  it("countNumbersWithUniqueDigits(10)", () => {
    const result = countNumbersWithUniqueDigits(10);
    expect(result).toEqual(8877691);
  });

  it("countNumbersWithUniqueDigits(0)", () => {
    const result = countNumbersWithUniqueDigits(0);
    expect(result).toEqual(1);
  });

  it("countNumbersWithUniqueDigits(1534236469)", () => {
    const result = countNumbersWithUniqueDigits(1534236469);
    expect(result).toEqual(8877691);
  });
});
