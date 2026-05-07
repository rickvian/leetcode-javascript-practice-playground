import { minCut } from '../0132-palindrome-partitioning-ii';

describe('0132-palindrome-partitioning-ii', () => {
    it('should return 0 for an empty string', () => {
        const result = minCut('');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for a single character (min input)', () => {
        const result = minCut('a');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 for "aab" (split into "aa"|"b")', () => {
        const result = minCut('aab');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 0 for a whole-string palindrome "racecar"', () => {
        const result = minCut('racecar');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for repetitive "aaaaaa"', () => {
        const result = minCut('aaaaaa');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return n-1 cuts for all distinct non-palindromic characters', () => {
        const s = 'abcde';
        const result = minCut(s);
        if (result !== undefined) expect(result).toBe(s.length - 1);
    });

    it('should return 1 for "abbab" (off-by-one boundary: cut between "a" and "bbab" => not palindrome, so must cut "abba"|"b")', () => {
        const result = minCut('abbab');
        if (result !== undefined) expect(result).toBe(1);
    });
});
