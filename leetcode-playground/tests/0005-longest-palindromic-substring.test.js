import { longestPalindrome } from '../0005-longest-palindromic-substring.js';

describe('0005-longest-palindromic-substring', () => {
  it("longestPalindrome(\"abcabcbb\")", () => {
    const result = longestPalindrome("abcabcbb");
    expect(result).toEqual("bcb");
  });

  it("longestPalindrome(\"bbbbb\")", () => {
    const result = longestPalindrome("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("longestPalindrome(\"pwwkew\")", () => {
    const result = longestPalindrome("pwwkew");
    expect(result).toEqual("ww");
  });

  it("longestPalindrome(\"\")", () => {
    const result = longestPalindrome("");
    expect(result).toEqual("");
  });

  it("longestPalindrome(\" \")", () => {
    const result = longestPalindrome(" ");
    expect(result).toEqual(" ");
  });

  it("longestPalindrome(\"a\")", () => {
    const result = longestPalindrome("a");
    expect(result).toEqual("a");
  });

  it("longestPalindrome(\"aaaaaa\")", () => {
    const result = longestPalindrome("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
