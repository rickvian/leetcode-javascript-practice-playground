import { longestPalindrome } from '../0409-longest-palindrome.js';

describe('0409-longest-palindrome', () => {
  it("longestPalindrome(\"abcabcbb\")", () => {
    const result = longestPalindrome("abcabcbb");
    expect(result).toEqual(8);
  });

  it("longestPalindrome(\"bbbbb\")", () => {
    const result = longestPalindrome("bbbbb");
    expect(result).toEqual(5);
  });

  it("longestPalindrome(\"pwwkew\")", () => {
    const result = longestPalindrome("pwwkew");
    expect(result).toEqual(3);
  });

  it("longestPalindrome(\"\")", () => {
    const result = longestPalindrome("");
    expect(result).toEqual(0);
  });

  it("longestPalindrome(\" \")", () => {
    const result = longestPalindrome(" ");
    expect(result).toEqual(1);
  });

  it("longestPalindrome(\"a\")", () => {
    const result = longestPalindrome("a");
    expect(result).toEqual(1);
  });

  it("longestPalindrome(\"aaaaaa\")", () => {
    const result = longestPalindrome("aaaaaa");
    expect(result).toEqual(6);
  });
});
