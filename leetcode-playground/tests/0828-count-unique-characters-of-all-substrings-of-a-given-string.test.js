import { uniqueLetterString } from '../0828-count-unique-characters-of-all-substrings-of-a-given-string.js';

describe('0828-count-unique-characters-of-all-substrings-of-a-given-string', () => {
  it("uniqueLetterString(\"abcabcbb\")", () => {
    const result = uniqueLetterString("abcabcbb");
    expect(result).toEqual(51);
  });

  it("uniqueLetterString(\"bbbbb\")", () => {
    const result = uniqueLetterString("bbbbb");
    expect(result).toEqual(5);
  });

  it("uniqueLetterString(\"pwwkew\")", () => {
    const result = uniqueLetterString("pwwkew");
    expect(result).toEqual(36);
  });

  it("uniqueLetterString(\"\")", () => {
    const result = uniqueLetterString("");
    expect(result).toEqual(0);
  });

  it("uniqueLetterString(\" \")", () => {
    const result = uniqueLetterString(" ");
    expect(result).toEqual(1);
  });

  it("uniqueLetterString(\"a\")", () => {
    const result = uniqueLetterString("a");
    expect(result).toEqual(1);
  });

  it("uniqueLetterString(\"aaaaaa\")", () => {
    const result = uniqueLetterString("aaaaaa");
    expect(result).toEqual(6);
  });
});
