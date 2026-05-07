import { partition } from '../0131-palindrome-partitioning';

const sortParts = (arr) => arr.map(p => p.join('|')).sort();

describe('0131-palindrome-partitioning', () => {
    it('should return [[]] for empty string (no substrings)', () => {
        const result = partition('');
        if (result !== undefined) expect(result).toEqual([[]]);
    });

    it('should return [["a"]] for a single character (min input)', () => {
        const result = partition('a');
        if (result !== undefined) expect(result).toEqual([['a']]);
    });

    it('should return the 2 partitions for "aab"', () => {
        const result = partition('aab');
        if (result !== undefined) {
            expect(sortParts(result)).toEqual(sortParts([
                ['a', 'a', 'b'],
                ['aa', 'b']
            ]));
        }
    });

    it('should return all partitions for palindrome-only "aaa"', () => {
        const result = partition('aaa');
        if (result !== undefined) {
            expect(sortParts(result)).toEqual(sortParts([
                ['a', 'a', 'a'],
                ['a', 'aa'],
                ['aa', 'a'],
                ['aaa']
            ]));
        }
    });

    it('should handle a two-character non-palindrome', () => {
        const result = partition('ab');
        if (result !== undefined) {
            expect(sortParts(result)).toEqual(sortParts([['a', 'b']]));
        }
    });

    it('should return only a single-char partition when no multi-char palindromes exist', () => {
        const result = partition('abcd');
        if (result !== undefined) {
            expect(sortParts(result)).toEqual(sortParts([['a', 'b', 'c', 'd']]));
        }
    });

    it('should ensure every returned partition concatenates back to the original string', () => {
        const s = 'abba';
        const result = partition(s);
        if (result !== undefined) {
            for (const p of result) expect(p.join('')).toBe(s);
        }
    });
});
