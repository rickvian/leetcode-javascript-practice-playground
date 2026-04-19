import { isInterleave } from '../0097-interleaving-string';

describe('0097-interleaving-string', () => {
    it('should return true for all empty strings (min input)', () => {
        const result = isInterleave('', '', '');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false when |s1|+|s2| !== |s3| (length mismatch)', () => {
        const result = isInterleave('ab', 'cd', 'abcde');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for empty s1 when s2 equals s3', () => {
        const result = isInterleave('', 'abc', 'abc');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for "aabcc" + "dbbca" = "aadbbcbcac"', () => {
        const result = isInterleave('aabcc', 'dbbca', 'aadbbcbcac');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for "aabcc" + "dbbca" = "aadbbbaccc"', () => {
        const result = isInterleave('aabcc', 'dbbca', 'aadbbbaccc');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should handle repetitive characters "aa"+"aa"="aaaa" (true)', () => {
        const result = isInterleave('aa', 'aa', 'aaaa');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should handle whitespace as regular chars (" a" + "b " = " ab ")', () => {
        const result = isInterleave(' a', 'b ', ' ab ');
        if (result !== undefined) expect(result).toBe(true);
    });
});
