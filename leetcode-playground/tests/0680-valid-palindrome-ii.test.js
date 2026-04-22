import { validPalindrome } from '../0680-valid-palindrome-ii.js';

describe('0680-valid-palindrome-ii', () => {
  it("validPalindrome(\"abcabcbb\")", () => {
    const result = validPalindrome("abcabcbb");
    expect(result).toEqual(false);
  });

  it("validPalindrome(\"bbbbb\")", () => {
    const result = validPalindrome("bbbbb");
    expect(result).toEqual(true);
  });

  it("validPalindrome(\"pwwkew\")", () => {
    const result = validPalindrome("pwwkew");
    expect(result).toEqual(false);
  });

  it("validPalindrome(\"\")", () => {
    const result = validPalindrome("");
    expect(result).toEqual(true);
  });

  it("validPalindrome(\" \")", () => {
    const result = validPalindrome(" ");
    expect(result).toEqual(true);
  });

  it("validPalindrome(\"a\")", () => {
    const result = validPalindrome("a");
    expect(result).toEqual(true);
  });

  it("validPalindrome(\"aaaaaa\")", () => {
    const result = validPalindrome("aaaaaa");
    expect(result).toEqual(true);
  });
});
