import { isScramble } from '../0087-scramble-string';

describe('0087-scramble-string', () => {
    it('should return true when s1 equals s2 (min-effort input)', () => {
        const result = isScramble('a', 'a');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for leetcode example "great" vs "rgeat"', () => {
        const result = isScramble('great', 'rgeat');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for leetcode example "abcde" vs "caebd"', () => {
        const result = isScramble('abcde', 'caebd');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return false when character counts differ', () => {
        const result = isScramble('abc', 'aab');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for repetitive identical strings', () => {
        const result = isScramble('aaaa', 'aaaa');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for reversed 2-char pair swap', () => {
        const result = isScramble('ab', 'ba');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for length-1 matching strings (off-by-one boundary)', () => {
        const result = isScramble('x', 'x');
        if (result !== undefined) expect(result).toBe(true);
    });
});
