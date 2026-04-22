import { findSubstringInWraproundString } from '../0467-unique-substrings-in-wraparound-string.js';

describe('0467-unique-substrings-in-wraparound-string', () => {
  it("findSubstringInWraproundString(\"abcabcbb\")", () => {
    const result = findSubstringInWraproundString("abcabcbb");
    expect(result).toEqual(6);
  });

  it("findSubstringInWraproundString(\"bbbbb\")", () => {
    const result = findSubstringInWraproundString("bbbbb");
    expect(result).toEqual(1);
  });

  it("findSubstringInWraproundString(\"pwwkew\")", () => {
    const result = findSubstringInWraproundString("pwwkew");
    expect(result).toEqual(4);
  });

  it("findSubstringInWraproundString(\"\")", () => {
    const result = findSubstringInWraproundString("");
    expect(result).toEqual(0);
  });

  it("findSubstringInWraproundString(\" \")", () => {
    const result = findSubstringInWraproundString(" ");
    expect(result).toEqual(0);
  });

  it("findSubstringInWraproundString(\"a\")", () => {
    const result = findSubstringInWraproundString("a");
    expect(result).toEqual(1);
  });

  it("findSubstringInWraproundString(\"aaaaaa\")", () => {
    const result = findSubstringInWraproundString("aaaaaa");
    expect(result).toEqual(1);
  });
});
