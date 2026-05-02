import { minDistance } from '../0072-edit-distance';

describe('0072-edit-distance', () => {
    it('should handle both strings empty', () => {
        expect(minDistance('', '')).toBe(0);
    });

    it('should handle word1 empty', () => {
        expect(minDistance('', 'abc')).toBe(3);
    });

    it('should handle word2 empty', () => {
        expect(minDistance('abc', '')).toBe(3);
    });

    it('should handle equal strings', () => {
        expect(minDistance('abc', 'abc')).toBe(0);
    });

    it('should handle single character equal', () => {
        expect(minDistance('a', 'a')).toBe(0);
    });

    it('should handle single character different', () => {
        expect(minDistance('a', 'b')).toBe(1);
    });

    it('should handle LeetCode example 1', () => {
        expect(minDistance('horse', 'ros')).toBe(3);
    });

    it('should handle LeetCode example 2', () => {
        expect(minDistance('intention', 'execution')).toBe(5);
    });

    it('should handle strings with no common characters', () => {
        expect(minDistance('abc', 'def')).toBe(3);
    });

    it('should handle one char different at start', () => {
        expect(minDistance('a', 'ba')).toBe(1);
    });

    it('should handle one char different at end', () => {
        expect(minDistance('ab', 'a')).toBe(1);
    });

    it('should handle single char completely different', () => {
        expect(minDistance('a', 'z')).toBe(1);
    });

    it('should handle one character replace', () => {
        expect(minDistance('cat', 'car')).toBe(1);
    });

    it('should handle all characters replaced', () => {
        expect(minDistance('abc', 'xyz')).toBe(3);
    });

    it('should handle insertion only', () => {
        expect(minDistance('a', 'ab')).toBe(1);
    });

    it('should handle deletion only', () => {
        expect(minDistance('ab', 'a')).toBe(1);
    });

    it('should handle longer strings with multiple operations', () => {
        expect(minDistance('kitten', 'sitting')).toBe(3);
    });

    it('should handle similar strings with few differences', () => {
        expect(minDistance('book', 'back')).toBe(2);
    });
});
