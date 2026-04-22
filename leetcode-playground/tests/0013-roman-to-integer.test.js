import { romanToInt } from '../0013-roman-to-integer.js';

describe('0013-roman-to-integer', () => {
  it("romanToInt(\"III\")", () => {
    const result = romanToInt("III");
    expect(result).toEqual(3);
  });

  it("romanToInt(\"LVIII\")", () => {
    const result = romanToInt("LVIII");
    expect(result).toEqual(58);
  });

  it("romanToInt(\"MCMXCIV\")", () => {
    const result = romanToInt("MCMXCIV");
    expect(result).toEqual(1994);
  });

  it("romanToInt(\"IV\")", () => {
    const result = romanToInt("IV");
    expect(result).toEqual(4);
  });

  it("romanToInt(\"IX\")", () => {
    const result = romanToInt("IX");
    expect(result).toEqual(9);
  });

  it("romanToInt(\"I\")", () => {
    const result = romanToInt("I");
    expect(result).toEqual(1);
  });

  it("romanToInt(\"XLII\")", () => {
    const result = romanToInt("XLII");
    expect(result).toEqual(42);
  });
});
