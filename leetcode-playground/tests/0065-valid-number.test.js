import { isNumber } from '../0065-valid-number.js';

describe('0065-valid-number', () => {
  it("isNumber(\"abcabcbb\")", () => {
    const result = isNumber("abcabcbb");
    expect(result).toEqual(false);
  });

  it("isNumber(\"bbbbb\")", () => {
    const result = isNumber("bbbbb");
    expect(result).toEqual(false);
  });

  it("isNumber(\"pwwkew\")", () => {
    const result = isNumber("pwwkew");
    expect(result).toEqual(false);
  });

  it("isNumber(\"\")", () => {
    const result = isNumber("");
    expect(result).toEqual(0);
  });

  it("isNumber(\" \")", () => {
    const result = isNumber(" ");
    expect(result).toEqual(0);
  });

  it("isNumber(\"a\")", () => {
    const result = isNumber("a");
    expect(result).toEqual(false);
  });

  it("isNumber(\"aaaaaa\")", () => {
    const result = isNumber("aaaaaa");
    expect(result).toEqual(false);
  });
});
