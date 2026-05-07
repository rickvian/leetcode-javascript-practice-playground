import { isSubsequence } from '../0392-is-subsequence';

describe('0392-is-subsequence', () => {
    it('should return true when s is empty', () => {
        expect(isSubsequence('', 'abc')).toEqual(true);
    });

    it('should return false when t is empty and s is not empty', () => {
        expect(isSubsequence('a', '')).toEqual(false);
    });

    it('should return true when s equals t', () => {
        expect(isSubsequence('abc', 'abc')).toEqual(true);
    });

    it('should return false when s is longer than t', () => {
        expect(isSubsequence('abc', 'ab')).toEqual(false);
    });

    it('should return false when characters are present but in wrong order', () => {
        expect(isSubsequence('ac', 'ab')).toEqual(false);
    });

    it('should return true for valid subsequence (LeetCode example 1)', () => {
        expect(isSubsequence('ace', 'abcde')).toEqual(true);
    });

    it('should return false for invalid subsequence (LeetCode example 2)', () => {
        expect(isSubsequence('aec', 'abcde')).toEqual(false);
    });

    it('should return true when s is a single character in t', () => {
        expect(isSubsequence('b', 'abc')).toEqual(true);
    });

    it('should return true for single character matching first position', () => {
        expect(isSubsequence('a', 'abcde')).toEqual(true);
    });

    it('should return true for single character matching last position', () => {
        expect(isSubsequence('e', 'abcde')).toEqual(true);
    });

    it('should return true when all characters of s appear in order in t', () => {
        expect(isSubsequence('ad', 'abcd')).toEqual(true);
    });

    it('should return false when character appears in t but subsequence order is wrong', () => {
        expect(isSubsequence('ba', 'abc')).toEqual(false);
    });
});
