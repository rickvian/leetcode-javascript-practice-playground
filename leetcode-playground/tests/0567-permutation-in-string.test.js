import { checkInclusion } from '../0567-permutation-in-string';

describe('0567-permutation-in-string', () => {
    // Basic true cases
    it('should return true when s2 contains a permutation of s1 at the start', () => {
        expect(checkInclusion('ab', 'eidbaooo')).toBe(true);
    });

    it('should return true when s2 is an exact permutation of s1', () => {
        expect(checkInclusion('abc', 'bca')).toBe(true);
    });

    it('should return true when permutation is at the end of s2', () => {
        expect(checkInclusion('ba', 'eidbao')).toBe(true);
    });

    it('should return true when s1 equals s2', () => {
        expect(checkInclusion('abc', 'abc')).toBe(true);
    });

    // Basic false cases
    it('should return false when s2 does not contain any permutation of s1', () => {
        expect(checkInclusion('ab', 'eidboaoo')).toBe(false);
    });

    it('should return false when s1 is longer than s2', () => {
        expect(checkInclusion('abcd', 'ab')).toBe(false);
    });

    // Single character
    it('should return true for single character s1 found in s2', () => {
        expect(checkInclusion('a', 'b')).toBe(false);
    });

    it('should return true for single character s1 matching in s2', () => {
        expect(checkInclusion('a', 'ba')).toBe(true);
    });

    // Edge: same length strings
    it('should return true when s1 and s2 are anagrams of the same length', () => {
        expect(checkInclusion('adc', 'dcda')).toBe(true);
    });

    it('should return false when s1 and s2 are same length but not anagrams', () => {
        expect(checkInclusion('abc', 'def')).toBe(false);
    });

    // Repeated characters
    it('should return true when s1 has repeated chars and s2 contains matching window', () => {
        expect(checkInclusion('aab', 'aabcdef')).toBe(true);
    });

    it('should return false when s2 does not have enough repeated chars to match s1', () => {
        expect(checkInclusion('aab', 'acbde')).toBe(false);
    });

    it('should handle all identical characters', () => {
        expect(checkInclusion('aaa', 'aaaa')).toBe(true);
    });

    it('should return false when repeated count in s1 exceeds what s2 has', () => {
        expect(checkInclusion('aaaa', 'aaa')).toBe(false);
    });

    // Range limits: s1 length equals s2 length
    it('should return true when s1 and s2 are length 1 and equal', () => {
        expect(checkInclusion('z', 'z')).toBe(true);
    });

    it('should return false when s1 and s2 are length 1 and not equal', () => {
        expect(checkInclusion('z', 'a')).toBe(false);
    });

    // Permutation not contiguous — must be substring window
    it('should return false when s1 chars appear in s2 but not as a contiguous window', () => {
        expect(checkInclusion('ab', 'aXb')).toBe(false);
    });

    // Long repetitive input
    it('should handle long string of identical characters', () => {
        const s1 = 'a'.repeat(10);
        const s2 = 'a'.repeat(9) + 'b' + 'a'.repeat(10);
        expect(checkInclusion(s1, s2)).toBe(true);
    });

    it('should return false when s1 chars exist in s2 but never all at once in a window', () => {
        expect(checkInclusion('abc', 'aabbcc')).toBe(false);
    });
});
