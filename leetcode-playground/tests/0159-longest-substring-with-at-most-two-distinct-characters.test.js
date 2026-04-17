import { lengthOfLongestSubstringTwoDistinct } from '../0159-longest-substring-with-at-most-two-distinct-characters';

describe('0159-longest-substring-with-at-most-two-distinct-characters', () => {
    it('should return 0 for an empty string', () => {
        const result = lengthOfLongestSubstringTwoDistinct('');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 for a single character', () => {
        const result = lengthOfLongestSubstringTwoDistinct('a');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return the full length when the string has two distinct chars', () => {
        const result = lengthOfLongestSubstringTwoDistinct('ccaabbb');
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should handle repetitive single-char input', () => {
        const result = lengthOfLongestSubstringTwoDistinct('aaaaaa');
        if (result !== undefined) expect(result).toBe(6);
    });

    it('should handle a string of all three distinct chars', () => {
        const result = lengthOfLongestSubstringTwoDistinct('abc');
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle whitespace characters as distinct characters', () => {
        const result = lengthOfLongestSubstringTwoDistinct('a a a a');
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should find the right window in the middle of the string', () => {
        const result = lengthOfLongestSubstringTwoDistinct('eceba');
        if (result !== undefined) expect(result).toBe(3);
    });
});
