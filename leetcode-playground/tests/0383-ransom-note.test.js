import { canConstruct } from '../0383-ransom-note';

describe('0383-ransom-note', () => {
    it('should return true for empty ransomNote', () => {
        expect(canConstruct('', 'abc')).toEqual(true);
    });

    it('should return true when magazine has exactly needed characters', () => {
        expect(canConstruct('abc', 'abc')).toEqual(true);
    });

    it('should return true when magazine has extra characters', () => {
        expect(canConstruct('abc', 'aabbc')).toEqual(true);
    });

    it('should return false when magazine is shorter than ransomNote', () => {
        expect(canConstruct('aab', 'bbb')).toEqual(false);
    });

    it('should return false when a repeated character is needed more times than available', () => {
        expect(canConstruct('aa', 'a')).toEqual(false);
    });

    it('should return false when ransomNote has characters not in magazine', () => {
        expect(canConstruct('aab', 'xy')).toEqual(false);
    });

    it('should return true when ransomNote equals magazine', () => {
        expect(canConstruct('abc', 'abc')).toEqual(true);
    });

    it('should handle single character ransomNote mismatch', () => {
        expect(canConstruct('a', 'b')).toEqual(false);
    });

    it('should handle single character match', () => {
        expect(canConstruct('a', 'a')).toEqual(true);
    });

    it('should return false for LeetCode example 1', () => {
        expect(canConstruct('a', 'b')).toEqual(false);
    });

    it('should return false for LeetCode example 2', () => {
        expect(canConstruct('aa', 'ab')).toEqual(false);
    });

    it('should return true for LeetCode example 3', () => {
        expect(canConstruct('aa', 'aab')).toEqual(true);
    });

    it('should handle case with multiple repeated characters', () => {
        expect(canConstruct('aabb', 'aabbc')).toEqual(true);
    });

    it('should return false when all characters are wrong', () => {
        expect(canConstruct('xyz', 'abc')).toEqual(false);
    });

    it('should handle large strings', () => {
        expect(canConstruct('a'.repeat(1000), 'a'.repeat(1000))).toEqual(true);
    });
});
