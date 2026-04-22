import { shortestPalindrome } from '../0214-shortest-palindrome.js';

describe('0214-shortest-palindrome', () => {
  it("shortestPalindrome(\"abcabcbb\")", () => {
    const result = shortestPalindrome("abcabcbb");
    expect(result).toEqual("bbcbacbabcabcbb");
  });

  it("shortestPalindrome(\"bbbbb\")", () => {
    const result = shortestPalindrome("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("shortestPalindrome(\"pwwkew\")", () => {
    const result = shortestPalindrome("pwwkew");
    expect(result).toEqual("wekwwpwwkew");
  });

  it("shortestPalindrome(\"\")", () => {
    const result = shortestPalindrome("");
    expect(result).toEqual("");
  });

  it("shortestPalindrome(\" \")", () => {
    const result = shortestPalindrome(" ");
    expect(result).toEqual(" ");
  });

  it("shortestPalindrome(\"a\")", () => {
    const result = shortestPalindrome("a");
    expect(result).toEqual("a");
  });

  it("shortestPalindrome(\"aaaaaa\")", () => {
    const result = shortestPalindrome("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
