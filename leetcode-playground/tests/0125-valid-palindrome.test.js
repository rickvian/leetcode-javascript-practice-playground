import { isPalindrome } from '../0125-valid-palindrome.js';

describe('0125-valid-palindrome', () => {
  it("isPalindrome(\"abcabcbb\")", () => {
    const result = isPalindrome("abcabcbb");
    expect(result).toEqual(false);
  });

  it("isPalindrome(\"bbbbb\")", () => {
    const result = isPalindrome("bbbbb");
    expect(result).toEqual(true);
  });

  it("isPalindrome(\"pwwkew\")", () => {
    const result = isPalindrome("pwwkew");
    expect(result).toEqual(false);
  });

  it("isPalindrome(\"\")", () => {
    const result = isPalindrome("");
    expect(result).toEqual(true);
  });

  it("isPalindrome(\" \")", () => {
    const result = isPalindrome(" ");
    expect(result).toEqual(true);
  });

  it("isPalindrome(\"a\")", () => {
    const result = isPalindrome("a");
    expect(result).toEqual(true);
  });

  it("isPalindrome(\"aaaaaa\")", () => {
    const result = isPalindrome("aaaaaa");
    expect(result).toEqual(true);
  });
});
