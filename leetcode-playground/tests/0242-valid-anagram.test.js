import { isAnagram } from '../0242-valid-anagram';

describe('0242-valid-anagram', () => {
    it('should return true for "anagram" and "nagaram"', () => {
        expect(isAnagram('anagram', 'nagaram')).toBe(true);
    });

    it('should return false for "rat" and "car"', () => {
        expect(isAnagram('rat', 'car')).toBe(false);
    });

    it('should return false when strings have different lengths', () => {
        expect(isAnagram('ab', 'abc')).toBe(false);
    });

    it('should return true for identical strings', () => {
        expect(isAnagram('abc', 'abc')).toBe(true);
    });

    it('should return false when characters differ', () => {
        expect(isAnagram('aacc', 'ccac')).toBe(false);
    });

    it('should return true for single character anagrams', () => {
        expect(isAnagram('a', 'a')).toBe(true);
    });

    it('should return false for single character non-anagrams', () => {
        expect(isAnagram('a', 'b')).toBe(false);
    });

    it('should handle empty strings', () => {
        expect(isAnagram('', '')).toBe(true);
    });

    it('should handle strings with repeated characters', () => {
        expect(isAnagram('aab', 'baa')).toBe(true);
    });

    it('should distinguish frequency correctly', () => {
        expect(isAnagram('aaab', 'aab')).toBe(false);
    });
});
