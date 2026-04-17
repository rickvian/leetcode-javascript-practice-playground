import { strStr } from '../0028-find-the-index-of-the-first-occurrence-in-a-string';

describe('0028-find-the-index-of-the-first-occurrence-in-a-string', () => {
    it('should return 0 when needle equals haystack', () => {
        const result = strStr('abc', 'abc');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 when needle is a proper prefix', () => {
        const result = strStr('sadbutsad', 'sad');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return -1 when not present', () => {
        const result = strStr('leetcode', 'leeto');
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should find a single-character needle', () => {
        const result = strStr('abcabc', 'c');
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should find needle at last-position boundary (off-by-one)', () => {
        const result = strStr('mississippi', 'issip');
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle repetitive characters with near-miss', () => {
        const result = strStr('aaaaa', 'aaab');
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should handle whitespace-only needle', () => {
        const result = strStr('a b c', ' ');
        if (result !== undefined) expect(result).toBe(1);
    });
});
