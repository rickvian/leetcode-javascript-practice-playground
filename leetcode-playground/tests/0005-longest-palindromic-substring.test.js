import { longestPalindrome } from '../0005-longest-palindromic-substring';

describe('0005-longest-palindromic-substring', () => {
    it('should return "bab" or "aba" for "babad"', () => {
        const result = longestPalindrome('babad');
        expect(['bab', 'aba']).toContain(result);
    });

    it('should return "bb" for "cbbd"', () => {
        expect(longestPalindrome('cbbd')).toBe('bb');
    });

    it('should return "a" for single character', () => {
        expect(longestPalindrome('a')).toBe('a');
    });

    it('should return "aaaa" for all same characters', () => {
        expect(longestPalindrome('aaaa')).toBe('aaaa');
    });

    it('should return "a" for "abc" with no palindrome of length > 1', () => {
        expect(longestPalindrome('abc')).toBe('a');
    });

    it('should return "racecar" for "racecarabc"', () => {
        expect(longestPalindrome('racecarabc')).toBe('racecar');
    });

    it('should return "abcdeedcba" for "abcdeedcba"', () => {
        expect(longestPalindrome('abcdeedcba')).toBe('abcdeedcba');
    });

    it('should return "madam" or "racecar" for "madamracecar"', () => {
        const result = longestPalindrome('madamracecar');
        expect(['madam', 'racecar']).toContain(result);
    });

    it('should handle two character palindrome', () => {
        expect(longestPalindrome('aa')).toBe('aa');
    });
});
