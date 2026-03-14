import { characterReplacement } from '../0424-longest-repeating-character-replacement';

describe('0424-longest-repeating-character-replacement', () => {
    // LeetCode example 1: s = "ABAB", k = 2 => 4
    it('should return 4 for ABAB with k=2', () => {
        expect(characterReplacement("ABAB", 2)).toBe(4);
    });

    // LeetCode example 2: s = "AABABBA", k = 1 => 4
    it('should return 4 for AABABBA with k=1', () => {
        expect(characterReplacement("AABABBA", 1)).toBe(4);
    });

    // All same characters
    it('should return full length when all chars are same', () => {
        expect(characterReplacement("AAAA", 0)).toBe(4);
    });

    // k=0: no replacements allowed
    it('should return length of longest run with k=0', () => {
        expect(characterReplacement("AABBA", 0)).toBe(2);
    });

    // Single character string
    it('should return 1 for single character', () => {
        expect(characterReplacement("A", 0)).toBe(1);
    });

    // k >= string length: entire string is valid
    it('should return full length when k >= length', () => {
        expect(characterReplacement("ABCDE", 5)).toBe(5);
    });

    // Two different characters alternating
    it('should handle two alternating characters', () => {
        expect(characterReplacement("ABABABABAB", 4)).toBe(9);
    });

    // All different characters, k=2
    it('should handle all different characters with k=2', () => {
        expect(characterReplacement("ABCDE", 2)).toBe(3);
    });

    // Long same prefix
    it('should handle string with long same prefix', () => {
        expect(characterReplacement("AAAAAB", 1)).toBe(6);
    });

    // k=0 with entire string same
    it('should return string length when all same and k=0', () => {
        expect(characterReplacement("BBBB", 0)).toBe(4);
    });
});
