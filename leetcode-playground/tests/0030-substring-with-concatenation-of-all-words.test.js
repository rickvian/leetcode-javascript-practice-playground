import { findSubstring } from '../0030-substring-with-concatenation-of-all-words';

describe('0030-substring-with-concatenation-of-all-words', () => {
    it('should return empty array for empty string', () => {
        const result = findSubstring('', ['foo']);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return empty array when no match', () => {
        const result = findSubstring('wordgoodgoodgoodbestword', ['word', 'good', 'best', 'word']);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [0,9] for LeetCode example 1', () => {
        const result = findSubstring('barfoothefoobarman', ['foo', 'bar']);
        if (result !== undefined) expect(result.sort((a, b) => a - b)).toEqual([0, 9]);
    });

    it('should return all starts for repetitive concatenations', () => {
        const result = findSubstring('barfoofoobarthefoobarman', ['bar', 'foo', 'the']);
        if (result !== undefined) expect(result.sort((a, b) => a - b)).toEqual([6, 9, 12]);
    });

    it('should find match at the last-position boundary (off-by-one)', () => {
        const result = findSubstring('aaaaaa', ['aa', 'aa', 'aa']);
        if (result !== undefined) expect(result.sort((a, b) => a - b)).toEqual([0]);
    });

    it('should handle single-word query', () => {
        const result = findSubstring('ababab', ['ab']);
        if (result !== undefined) expect(result.sort((a, b) => a - b)).toEqual([0, 2, 4]);
    });

    it('should return empty when total word length exceeds s length', () => {
        const result = findSubstring('ab', ['abc']);
        if (result !== undefined) expect(result).toEqual([]);
    });
});
