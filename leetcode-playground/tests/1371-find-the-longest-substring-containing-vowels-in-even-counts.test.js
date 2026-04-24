import { findTheLongestSubstring } from '../1371-find-the-longest-substring-containing-vowels-in-even-counts.js';

describe('1371-find-the-longest-substring-containing-vowels-in-even-counts', () => {
  it("findTheLongestSubstring(\"abcabcbb\")", () => {
    const result = findTheLongestSubstring("abcabcbb");
    expect(result).toEqual(8);
  });

  it("findTheLongestSubstring(\"bbbbb\")", () => {
    const result = findTheLongestSubstring("bbbbb");
    expect(result).toEqual(5);
  });

  it("findTheLongestSubstring(\"pwwkew\")", () => {
    const result = findTheLongestSubstring("pwwkew");
    expect(result).toEqual(4);
  });

  it("findTheLongestSubstring(\"\")", () => {
    const result = findTheLongestSubstring("");
    expect(result).toEqual(0);
  });

  it("findTheLongestSubstring(\" \")", () => {
    const result = findTheLongestSubstring(" ");
    expect(result).toEqual(1);
  });

  it("findTheLongestSubstring(\"a\")", () => {
    const result = findTheLongestSubstring("a");
    expect(result).toEqual(0);
  });

  it("findTheLongestSubstring(\"aaaaaa\")", () => {
    const result = findTheLongestSubstring("aaaaaa");
    expect(result).toEqual(6);
  });
});
