import { breakPalindrome } from '../1328-break-a-palindrome.js';

describe('1328-break-a-palindrome', () => {
  it("breakPalindrome(\"abcabcbb\")", () => {
    const result = breakPalindrome("abcabcbb");
    expect(result).toEqual("aacabcbb");
  });

  it("breakPalindrome(\"bbbbb\")", () => {
    const result = breakPalindrome("bbbbb");
    expect(result).toEqual("abbbb");
  });

  it("breakPalindrome(\"pwwkew\")", () => {
    const result = breakPalindrome("pwwkew");
    expect(result).toEqual("awwkew");
  });

  it("breakPalindrome(\"\")", () => {
    const result = breakPalindrome("");
    expect(result).toEqual("");
  });

  it("breakPalindrome(\" \")", () => {
    const result = breakPalindrome(" ");
    expect(result).toEqual("");
  });

  it("breakPalindrome(\"a\")", () => {
    const result = breakPalindrome("a");
    expect(result).toEqual("");
  });

  it("breakPalindrome(\"aaaaaa\")", () => {
    const result = breakPalindrome("aaaaaa");
    expect(result).toEqual("aaaaab");
  });
});
