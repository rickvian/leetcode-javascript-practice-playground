import { canPermutePalindrome } from '../0266-palindrome-permutation.js';

describe('0266-palindrome-permutation', () => {
  it("canPermutePalindrome(\"abcabcbb\")", () => {
    const result = canPermutePalindrome("abcabcbb");
    expect(result).toEqual(true);
  });

  it("canPermutePalindrome(\"bbbbb\")", () => {
    const result = canPermutePalindrome("bbbbb");
    expect(result).toEqual(true);
  });

  it("canPermutePalindrome(\"pwwkew\")", () => {
    const result = canPermutePalindrome("pwwkew");
    expect(result).toEqual(false);
  });

  it("canPermutePalindrome(\"\")", () => {
    const result = canPermutePalindrome("");
    expect(result).toEqual(true);
  });

  it("canPermutePalindrome(\" \")", () => {
    const result = canPermutePalindrome(" ");
    expect(result).toEqual(true);
  });

  it("canPermutePalindrome(\"a\")", () => {
    const result = canPermutePalindrome("a");
    expect(result).toEqual(true);
  });

  it("canPermutePalindrome(\"aaaaaa\")", () => {
    const result = canPermutePalindrome("aaaaaa");
    expect(result).toEqual(true);
  });
});
