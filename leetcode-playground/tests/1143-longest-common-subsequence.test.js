import { longestCommonSubsequence } from '../1143-longest-common-subsequence';

describe('1143-longest-common-subsequence', () => {
    // LeetCode example 1: "abcde", "ace" => 3
    it('should return 3 for "abcde" and "ace"', () => {
        expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
    });

    // LeetCode example 2: "abc", "abc" => 3
    it('should return 3 for identical strings "abc"', () => {
        expect(longestCommonSubsequence("abc", "abc")).toBe(3);
    });

    // LeetCode example 3: "abc", "def" => 0
    it('should return 0 for strings with no common characters', () => {
        expect(longestCommonSubsequence("abc", "def")).toBe(0);
    });

    // Empty strings
    it('should return 0 when text1 is empty', () => {
        expect(longestCommonSubsequence("", "abc")).toBe(0);
    });

    it('should return 0 when text2 is empty', () => {
        expect(longestCommonSubsequence("abc", "")).toBe(0);
    });

    it('should return 0 when both strings are empty', () => {
        expect(longestCommonSubsequence("", "")).toBe(0);
    });

    // Single characters
    it('should return 1 when single char matches', () => {
        expect(longestCommonSubsequence("a", "a")).toBe(1);
    });

    it('should return 0 when single chars differ', () => {
        expect(longestCommonSubsequence("a", "b")).toBe(0);
    });

    // LCS is not substring
    it('should find non-contiguous LCS', () => {
        expect(longestCommonSubsequence("abcba", "abcbcba")).toBe(5);
    });

    // Long strings
    it('should handle longer strings', () => {
        expect(longestCommonSubsequence("bsbininm", "jmjkbkjkv")).toBe(1);
    });

    // Reversed strings
    it('should return 1 for reversed non-palindrome strings', () => {
        expect(longestCommonSubsequence("abc", "cba")).toBe(1);
    });

    // No characters in common
    it('should return 0 when no characters in common', () => {
        expect(longestCommonSubsequence("aab", "cdc")).toBe(0);
    });

    // Repeated characters
    it('should handle repeated characters correctly', () => {
        expect(longestCommonSubsequence("aaaaaa", "aaaa")).toBe(4);
    });
});
