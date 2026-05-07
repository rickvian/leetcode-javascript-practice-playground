import { intToRoman } from "../0012-integer-to-roman";

describe("0012-integer-to-roman", () => {
  // LeetCode official examples
  it("should handle example 1: num = 3", () => {
    expect(intToRoman(3)).toBe("III");
  });

  it("should handle example 2: num = 58", () => {
    expect(intToRoman(58)).toBe("LVIII");
  });

  it("should handle example 3: num = 1994", () => {
    expect(intToRoman(1994)).toBe("MCMXCIV");
  });

  it("should handle example 4: num = 3749", () => {
    expect(intToRoman(3749)).toBe("MMMDCCXLIX");
  });

  // Minimum and maximum
  it("should handle minimum value: num = 1", () => {
    expect(intToRoman(1)).toBe("I");
  });

  it("should handle maximum value: num = 3999", () => {
    expect(intToRoman(3999)).toBe("MMMCMXCIX");
  });

  // Single symbol values
  it("should handle single V: num = 5", () => {
    expect(intToRoman(5)).toBe("V");
  });

  it("should handle single X: num = 10", () => {
    expect(intToRoman(10)).toBe("X");
  });

  it("should handle single L: num = 50", () => {
    expect(intToRoman(50)).toBe("L");
  });

  it("should handle single C: num = 100", () => {
    expect(intToRoman(100)).toBe("C");
  });

  it("should handle single D: num = 500", () => {
    expect(intToRoman(500)).toBe("D");
  });

  it("should handle single M: num = 1000", () => {
    expect(intToRoman(1000)).toBe("M");
  });

  // Subtractive notation values
  it("should handle subtractive 4: num = 4", () => {
    expect(intToRoman(4)).toBe("IV");
  });

  it("should handle subtractive 9: num = 9", () => {
    expect(intToRoman(9)).toBe("IX");
  });

  it("should handle subtractive 40: num = 40", () => {
    expect(intToRoman(40)).toBe("XL");
  });

  it("should handle subtractive 90: num = 90", () => {
    expect(intToRoman(90)).toBe("XC");
  });

  it("should handle subtractive 400: num = 400", () => {
    expect(intToRoman(400)).toBe("CD");
  });

  it("should handle subtractive 900: num = 900", () => {
    expect(intToRoman(900)).toBe("CM");
  });

  // Values with all subtractive notation
  it("should handle all subtractives: num = 444", () => {
    expect(intToRoman(444)).toBe("CDXLIV");
  });

  it("should handle all subtractives: num = 999", () => {
    expect(intToRoman(999)).toBe("CMXCIX");
  });

  // Values with no subtractive notation
  it("should handle no subtractives: num = 888", () => {
    expect(intToRoman(888)).toBe("DCCCLXXXVIII");
  });

  // Values exercising all symbol levels
  it("should handle all symbols: num = 1666", () => {
    expect(intToRoman(1666)).toBe("MDCLXVI");
  });

  it("should handle complex value: num = 2847", () => {
    expect(intToRoman(2847)).toBe("MMDCCCXLVII");
  });

  // Additional edge cases
  it("should handle 2: num = 2", () => {
    expect(intToRoman(2)).toBe("II");
  });

  it("should handle 6: num = 6", () => {
    expect(intToRoman(6)).toBe("VI");
  });

  it("should handle 8: num = 8", () => {
    expect(intToRoman(8)).toBe("VIII");
  });

  it("should handle 11: num = 11", () => {
    expect(intToRoman(11)).toBe("XI");
  });

  it("should handle 44: num = 44", () => {
    expect(intToRoman(44)).toBe("XLIV");
  });

  it("should handle 99: num = 99", () => {
    expect(intToRoman(99)).toBe("XCIX");
  });

  it("should handle 444: num = 444", () => {
    expect(intToRoman(444)).toBe("CDXLIV");
  });

  it("should handle 555: num = 555", () => {
    expect(intToRoman(555)).toBe("DLV");
  });

  it("should handle 3888: num = 3888", () => {
    expect(intToRoman(3888)).toBe("MMMDCCCLXXXVIII");
  });
});
