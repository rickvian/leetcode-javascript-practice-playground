import { romanToInt } from "../0013-roman-to-integer";

describe("0013-roman-to-integer", () => {
  // Official examples
  it("should convert III to 3", () => {
    expect(romanToInt("III")).toBe(3);
  });

  it("should convert LVIII to 58", () => {
    expect(romanToInt("LVIII")).toBe(58);
  });

  it("should convert MCMXCIV to 1994", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
  });

  // Single character inputs
  it("should convert single I to 1", () => {
    expect(romanToInt("I")).toBe(1);
  });

  it("should convert single V to 5", () => {
    expect(romanToInt("V")).toBe(5);
  });

  it("should convert single X to 10", () => {
    expect(romanToInt("X")).toBe(10);
  });

  it("should convert single L to 50", () => {
    expect(romanToInt("L")).toBe(50);
  });

  it("should convert single C to 100", () => {
    expect(romanToInt("C")).toBe(100);
  });

  it("should convert single D to 500", () => {
    expect(romanToInt("D")).toBe(500);
  });

  it("should convert single M to 1000", () => {
    expect(romanToInt("M")).toBe(1000);
  });

  // Subtractive notation pairs
  it("should convert IV (subtractive) to 4", () => {
    expect(romanToInt("IV")).toBe(4);
  });

  it("should convert IX (subtractive) to 9", () => {
    expect(romanToInt("IX")).toBe(9);
  });

  it("should convert XL (subtractive) to 40", () => {
    expect(romanToInt("XL")).toBe(40);
  });

  it("should convert XC (subtractive) to 90", () => {
    expect(romanToInt("XC")).toBe(90);
  });

  it("should convert CD (subtractive) to 400", () => {
    expect(romanToInt("CD")).toBe(400);
  });

  it("should convert CM (subtractive) to 900", () => {
    expect(romanToInt("CM")).toBe(900);
  });

  // Multiple subtractive notation pairs in one numeral
  it("should handle multiple subtractive pairs: CDXLIV to 444", () => {
    expect(romanToInt("CDXLIV")).toBe(444);
  });

  it("should handle multiple subtractive pairs: XCIX to 99", () => {
    expect(romanToInt("XCIX")).toBe(99);
  });

  it("should handle multiple subtractive pairs: CMXCIX to 999", () => {
    expect(romanToInt("CMXCIX")).toBe(999);
  });

  // No subtractive notation cases
  it("should convert all additive: VI to 6", () => {
    expect(romanToInt("VI")).toBe(6);
  });

  it("should convert all additive: VII to 7", () => {
    expect(romanToInt("VII")).toBe(7);
  });

  it("should convert all additive: XI to 11", () => {
    expect(romanToInt("XI")).toBe(11);
  });

  it("should convert all additive: XV to 15", () => {
    expect(romanToInt("XV")).toBe(15);
  });

  it("should convert all additive: CCCLXVI to 366", () => {
    expect(romanToInt("CCCLXVI")).toBe(366);
  });

  it("should convert all additive: DCCCLXXXVIII to 888", () => {
    expect(romanToInt("DCCCLXXXVIII")).toBe(888);
  });

  // Maximum value
  it("should convert maximum MMMCMXCIX to 3999", () => {
    expect(romanToInt("MMMCMXCIX")).toBe(3999);
  });

  // Additional edge and constraint cases
  it("should handle repeated M: MMM to 3000", () => {
    expect(romanToInt("MMM")).toBe(3000);
  });

  it("should handle mixed with subtractive: MCMXC to 1990", () => {
    expect(romanToInt("MCMXC")).toBe(1990);
  });

  it("should handle value exercising all symbols: MDCLXVI to 1666", () => {
    expect(romanToInt("MDCLXVI")).toBe(1666);
  });

  it("should convert II to 2", () => {
    expect(romanToInt("II")).toBe(2);
  });

  it("should convert XX to 20", () => {
    expect(romanToInt("XX")).toBe(20);
  });

  it("should convert CC to 200", () => {
    expect(romanToInt("CC")).toBe(200);
  });

  it("should convert MM to 2000", () => {
    expect(romanToInt("MM")).toBe(2000);
  });

  it("should handle no repeated I in subtractive: IXX to 19 (I+IX does not appear; rather XX=20, IX=9, so must be XIX=19)", () => {
    expect(romanToInt("XIX")).toBe(19);
  });

  it("should convert XLII to 42", () => {
    expect(romanToInt("XLII")).toBe(42);
  });

  it("should convert XLIX to 49", () => {
    expect(romanToInt("XLIX")).toBe(49);
  });

  it("should convert CCCXC to 390", () => {
    expect(romanToInt("CCCXC")).toBe(390);
  });

  it("should convert MMXXIII to 2023", () => {
    expect(romanToInt("MMXXIII")).toBe(2023);
  });

  it("should convert MMDCCXXI to 2721", () => {
    expect(romanToInt("MMDCCXXI")).toBe(2721);
  });
});
