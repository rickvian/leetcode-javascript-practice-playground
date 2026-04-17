import { shortestPalindrome } from '../0214-shortest-palindrome';

describe('0214-shortest-palindrome', () => {
    it('should transform "aacecaaa" to "aaacecaaa"', () => {
        const result = shortestPalindrome('aacecaaa');
        if (result !== undefined) {
            expect(result).toBe('aaacecaaa');
        }
    });

    it('should transform "abcd" to "dcbabcd"', () => {
        const result = shortestPalindrome('abcd');
        if (result !== undefined) {
            expect(result).toBe('dcbabcd');
        }
    });

    it('should return empty string for empty input', () => {
        const result = shortestPalindrome('');
        if (result !== undefined) {
            expect(result).toBe('');
        }
    });

    it('should return the same single character', () => {
        const result = shortestPalindrome('a');
        if (result !== undefined) {
            expect(result).toBe('a');
        }
    });

    it('should return the same palindrome for an already-palindromic input', () => {
        const result = shortestPalindrome('racecar');
        if (result !== undefined) {
            expect(result).toBe('racecar');
        }
    });

    it('should handle long repetitive string', () => {
        const result = shortestPalindrome('aaaa');
        if (result !== undefined) {
            expect(result).toBe('aaaa');
        }
    });

    it('should handle single duplication needed', () => {
        const result = shortestPalindrome('ab');
        if (result !== undefined) {
            expect(result).toBe('bab');
        }
    });
});
