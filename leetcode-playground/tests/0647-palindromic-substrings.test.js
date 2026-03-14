import { countSubstrings } from '../0647-palindromic-substrings';

describe('0647-palindromic-substrings', () => {
    // LeetCode example 1: "abc" => 3 (a, b, c)
    it('should return 3 for "abc"', () => {
        expect(countSubstrings("abc")).toBe(3);
    });

    // LeetCode example 2: "aaa" => 6 (a,a,a,aa,aa,aaa)
    it('should return 6 for "aaa"', () => {
        expect(countSubstrings("aaa")).toBe(6);
    });

    // Single character
    it('should return 1 for single character', () => {
        expect(countSubstrings("a")).toBe(1);
    });

    // Two same characters
    it('should return 3 for "aa"', () => {
        expect(countSubstrings("aa")).toBe(3);
    });

    // Two different characters
    it('should return 2 for "ab"', () => {
        expect(countSubstrings("ab")).toBe(2);
    });

    // Palindrome string itself
    it('should count palindromes in "racecar"', () => {
        expect(countSubstrings("racecar")).toBe(10);
    });

    // Mixed palindromes
    it('should handle "abba"', () => {
        // a, b, b, a, bb, abba => 6
        expect(countSubstrings("abba")).toBe(6);
    });

    // All same characters - formula: n*(n+1)/2
    it('should return 10 for "aaaa"', () => {
        expect(countSubstrings("aaaa")).toBe(10);
    });

    // String with no repeated chars
    it('should return 5 for "abcde" (only single chars)', () => {
        expect(countSubstrings("abcde")).toBe(5);
    });

    // Odd length palindrome in middle
    it('should count "aba" palindromes', () => {
        // a, b, a, aba => 4
        expect(countSubstrings("aba")).toBe(4);
    });
});
