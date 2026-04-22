import { longestPalindromeSubseq } from '../0516-longest-palindromic-subsequence.js';

describe('0516-longest-palindromic-subsequence', () => {
  it("longestPalindromeSubseq(\"abcabcbb\")", () => {
    const result = longestPalindromeSubseq("abcabcbb");
    expect(result).toEqual(5);
  });

  it("longestPalindromeSubseq(\"bbbbb\")", () => {
    const result = longestPalindromeSubseq("bbbbb");
    expect(result).toEqual(5);
  });

  it("longestPalindromeSubseq(\"pwwkew\")", () => {
    const result = longestPalindromeSubseq("pwwkew");
    expect(result).toEqual(3);
  });

  it("longestPalindromeSubseq(\" \")", () => {
    const result = longestPalindromeSubseq(" ");
    expect(result).toEqual(1);
  });

  it("longestPalindromeSubseq(\"a\")", () => {
    const result = longestPalindromeSubseq("a");
    expect(result).toEqual(1);
  });

  it("longestPalindromeSubseq(\"aaaaaa\")", () => {
    const result = longestPalindromeSubseq("aaaaaa");
    expect(result).toEqual(6);
  });
});
