import { isValidPalindrome } from '../1216-valid-palindrome-iii.js';

describe('1216-valid-palindrome-iii', () => {
  it("isValidPalindrome(\"abcdef\", 2)", () => {
    const result = isValidPalindrome("abcdef", 2);
    expect(result).toEqual(false);
  });

  it("isValidPalindrome(\"\", 1)", () => {
    const result = isValidPalindrome("", 1);
    expect(result).toEqual(true);
  });

  it("isValidPalindrome(\"a\", 1)", () => {
    const result = isValidPalindrome("a", 1);
    expect(result).toEqual(true);
  });

  it("isValidPalindrome(\"abba\", 3)", () => {
    const result = isValidPalindrome("abba", 3);
    expect(result).toEqual(true);
  });

  it("isValidPalindrome(\"  hello  \", 2)", () => {
    const result = isValidPalindrome("  hello  ", 2);
    expect(result).toEqual(false);
  });
});
