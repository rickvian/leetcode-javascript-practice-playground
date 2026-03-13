import { lengthOfLongestSubstring } from '../0003-longest-substring-without-repeating-characters';

describe('0003-longest-substring-without-repeating-characters', () => {
    it('should return 3 for "abcabcbb"', () => {
        expect(lengthOfLongestSubstring('abcabcbb')).toBe(3);
    });

    it('should return 1 for "bbbbb"', () => {
        expect(lengthOfLongestSubstring('bbbbb')).toBe(1);
    });

    it('should return 3 for "pwwkew"', () => {
        expect(lengthOfLongestSubstring('pwwkew')).toBe(3);
    });

    it('should return 0 for empty string', () => {
        expect(lengthOfLongestSubstring('')).toBe(0);
    });

    it('should return 1 for single character', () => {
        expect(lengthOfLongestSubstring('a')).toBe(1);
    });

    it('should return length of string when all characters are unique', () => {
        expect(lengthOfLongestSubstring('abcdefg')).toBe(7);
    });

    it('should handle string with special characters', () => {
        expect(lengthOfLongestSubstring('au')).toBe(2);
    });

    it('should return correct length for " " (single space)', () => {
        expect(lengthOfLongestSubstring(' ')).toBe(1);
    });
});
