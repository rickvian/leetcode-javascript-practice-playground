import { countPalindromicSubsequences } from '../0730-count-different-palindromic-subsequences.js';

describe('0730-count-different-palindromic-subsequences', () => {
  it("countPalindromicSubsequences(\"abcabcbb\")", () => {
    const result = countPalindromicSubsequences("abcabcbb");
    expect(result).toEqual(18);
  });

  it("countPalindromicSubsequences(\"bbbbb\")", () => {
    const result = countPalindromicSubsequences("bbbbb");
    expect(result).toEqual(5);
  });

  it("countPalindromicSubsequences(\"pwwkew\")", () => {
    const result = countPalindromicSubsequences("pwwkew");
    expect(result).toEqual(8);
  });

  it("countPalindromicSubsequences(\" \")", () => {
    const result = countPalindromicSubsequences(" ");
    expect(result).toEqual(1);
  });

  it("countPalindromicSubsequences(\"a\")", () => {
    const result = countPalindromicSubsequences("a");
    expect(result).toEqual(1);
  });

  it("countPalindromicSubsequences(\"aaaaaa\")", () => {
    const result = countPalindromicSubsequences("aaaaaa");
    expect(result).toEqual(6);
  });
});
