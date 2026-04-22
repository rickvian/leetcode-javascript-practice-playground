import { intToRoman } from '../0012-integer-to-roman.js';

describe('0012-integer-to-roman', () => {
  it("intToRoman(3)", () => {
    const result = intToRoman(3);
    expect(result).toEqual("III");
  });

  it("intToRoman(58)", () => {
    const result = intToRoman(58);
    expect(result).toEqual("LVIII");
  });

  it("intToRoman(1994)", () => {
    const result = intToRoman(1994);
    expect(result).toEqual("MCMXCIV");
  });

  it("intToRoman(4)", () => {
    const result = intToRoman(4);
    expect(result).toEqual("IV");
  });

  it("intToRoman(9)", () => {
    const result = intToRoman(9);
    expect(result).toEqual("IX");
  });

  it("intToRoman(1)", () => {
    const result = intToRoman(1);
    expect(result).toEqual("I");
  });

  it("intToRoman(42)", () => {
    const result = intToRoman(42);
    expect(result).toEqual("XLII");
  });
});
