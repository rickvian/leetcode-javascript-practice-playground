import { wordPattern } from '../0290-word-pattern';

describe('0290-word-pattern', () => {
    it('should handle pattern length matching word count (LeetCode example 1)', () => {
        expect(wordPattern('abba', 'dog cat cat dog')).toEqual(true);
    });

    it('should handle pattern length matching word count (LeetCode example 2)', () => {
        expect(wordPattern('abab', 'dog cat dog cat')).toEqual(true);
    });

    it('should handle pattern length not matching word count', () => {
        expect(wordPattern('abc', 'dog cat')).toEqual(false);
    });

    it('should handle pattern length not matching word count (more words)', () => {
        expect(wordPattern('ab', 'dog cat dog')).toEqual(false);
    });

    it('should handle different pattern characters mapping to the same word (false)', () => {
        expect(wordPattern('ab', 'dog dog')).toEqual(false);
    });

    it('should handle bijective mapping that holds', () => {
        expect(wordPattern('a', 'dog')).toEqual(true);
    });

    it('should handle single character pattern (LeetCode example 3)', () => {
        expect(wordPattern('badc', 'dog cat cat dog')).toEqual(false);
    });

    it('should handle pattern with multiple same characters mapping to same word', () => {
        expect(wordPattern('aaaa', 'dog dog dog dog')).toEqual(true);
    });

    it('should handle pattern where same character maps to different words', () => {
        expect(wordPattern('aa', 'dog cat')).toEqual(false);
    });

    it('should handle empty pattern and empty string', () => {
        expect(wordPattern('', '')).toEqual(false);
    });

    it('should handle non-bijective mapping', () => {
        expect(wordPattern('abba', 'redbluebluered')).toEqual(false);
    });

    it('should handle two character pattern with valid bijection', () => {
        expect(wordPattern('ab', 'dog cat')).toEqual(true);
    });
});
