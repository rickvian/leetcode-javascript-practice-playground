import { isIsomorphic } from '../0205-isomorphic-strings';

describe('0205-isomorphic-strings', () => {
    it('should handle LeetCode example 1: egg -> add', () => {
        expect(isIsomorphic('egg', 'add')).toEqual(true);
    });

    it('should handle LeetCode example 2: badc -> baba', () => {
        expect(isIsomorphic('badc', 'baba')).toEqual(false);
    });

    it('should handle equal strings', () => {
        expect(isIsomorphic('a', 'a')).toEqual(true);
    });

    it('should handle single character', () => {
        expect(isIsomorphic('a', 'b')).toEqual(true);
    });

    it('should handle two different characters mapping to the same character (not isomorphic)', () => {
        expect(isIsomorphic('ab', 'aa')).toEqual(false);
    });

    it('should handle bijective mapping that holds', () => {
        expect(isIsomorphic('ab', 'cd')).toEqual(true);
    });

    it('should handle paper -> title', () => {
        expect(isIsomorphic('paper', 'title')).toEqual(true);
    });

    it('should handle all characters mapping to same character', () => {
        expect(isIsomorphic('abc', 'ddd')).toEqual(false);
    });

    it('should handle character at different positions', () => {
        expect(isIsomorphic('aa', 'ab')).toEqual(false);
    });

    it('should handle longer string with pattern', () => {
        expect(isIsomorphic('aabb', 'cdcd')).toEqual(false);
    });

    it('should handle character reuse in pattern', () => {
        expect(isIsomorphic('bac', 'abb')).toEqual(false);
    });

    it('should handle empty strings', () => {
        expect(isIsomorphic('', '')).toEqual(true);
    });
});
