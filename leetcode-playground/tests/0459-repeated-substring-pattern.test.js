import { repeatedSubstringPattern } from '../0459-repeated-substring-pattern.js';

describe('0459-repeated-substring-pattern', () => {
  it("repeatedSubstringPattern(\"abcabcbb\")", () => {
    const result = repeatedSubstringPattern("abcabcbb");
    expect(result).toEqual(false);
  });

  it("repeatedSubstringPattern(\"bbbbb\")", () => {
    const result = repeatedSubstringPattern("bbbbb");
    expect(result).toEqual(true);
  });

  it("repeatedSubstringPattern(\"pwwkew\")", () => {
    const result = repeatedSubstringPattern("pwwkew");
    expect(result).toEqual(false);
  });

  it("repeatedSubstringPattern(\"\")", () => {
    const result = repeatedSubstringPattern("");
    expect(result).toEqual(true);
  });

  it("repeatedSubstringPattern(\" \")", () => {
    const result = repeatedSubstringPattern(" ");
    expect(result).toEqual(false);
  });

  it("repeatedSubstringPattern(\"a\")", () => {
    const result = repeatedSubstringPattern("a");
    expect(result).toEqual(false);
  });

  it("repeatedSubstringPattern(\"aaaaaa\")", () => {
    const result = repeatedSubstringPattern("aaaaaa");
    expect(result).toEqual(true);
  });
});
