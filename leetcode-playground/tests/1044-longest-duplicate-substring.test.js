import { longestDupSubstring } from '../1044-longest-duplicate-substring.js';

describe('1044-longest-duplicate-substring', () => {
  it("longestDupSubstring(\"abcabcbb\")", () => {
    const result = longestDupSubstring("abcabcbb");
    expect(result).toEqual("abc");
  });

  it("longestDupSubstring(\"bbbbb\")", () => {
    const result = longestDupSubstring("bbbbb");
    expect(result).toEqual("bbbb");
  });

  it("longestDupSubstring(\"pwwkew\")", () => {
    const result = longestDupSubstring("pwwkew");
    expect(result).toEqual("w");
  });

  it("longestDupSubstring(\"\")", () => {
    const result = longestDupSubstring("");
    expect(result).toEqual("");
  });

  it("longestDupSubstring(\" \")", () => {
    const result = longestDupSubstring(" ");
    expect(result).toEqual("");
  });

  it("longestDupSubstring(\"a\")", () => {
    const result = longestDupSubstring("a");
    expect(result).toEqual("");
  });

  it("longestDupSubstring(\"aaaaaa\")", () => {
    const result = longestDupSubstring("aaaaaa");
    expect(result).toEqual("aaaaa");
  });
});
