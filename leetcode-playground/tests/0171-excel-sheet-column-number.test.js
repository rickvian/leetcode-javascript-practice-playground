import { titleToNumber } from '../0171-excel-sheet-column-number.js';

describe('0171-excel-sheet-column-number', () => {
  it("titleToNumber(\"abcabcbb\")", () => {
    const result = titleToNumber("abcabcbb");
    expect(result).toEqual(275984422722);
  });

  it("titleToNumber(\"bbbbb\")", () => {
    const result = titleToNumber("bbbbb");
    expect(result).toEqual(16158670);
  });

  it("titleToNumber(\"pwwkew\")", () => {
    const result = titleToNumber("pwwkew");
    expect(result).toEqual(596436493);
  });

  it("titleToNumber(\"\")", () => {
    const result = titleToNumber("");
    expect(result).toEqual(0);
  });

  it("titleToNumber(\" \")", () => {
    const result = titleToNumber(" ");
    expect(result).toEqual(-32);
  });

  it("titleToNumber(\"a\")", () => {
    const result = titleToNumber("a");
    expect(result).toEqual(33);
  });

  it("titleToNumber(\"aaaaaa\")", () => {
    const result = titleToNumber("aaaaaa");
    expect(result).toEqual(407768823);
  });
});
