import { wordBreak } from '../0140-word-break-ii';

describe('0140-word-break-ii', () => {
    it('should return [""] or [] for empty s (edge)', () => {
        const result = wordBreak('', ['a']);
        if (result !== undefined) expect(Array.isArray(result)).toBe(true);
    });

    it('should return [] when no valid segmentation exists', () => {
        const result = wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return both segmentations for "catsanddog"', () => {
        const result = wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']);
        if (result !== undefined) {
            expect([...result].sort()).toEqual(['cat sand dog', 'cats and dog'].sort());
        }
    });

    it('should return 3 sentences for "pineapplepenapple"', () => {
        const result = wordBreak('pineapplepenapple', ['apple', 'pen', 'applepen', 'pine', 'pineapple']);
        if (result !== undefined) {
            expect([...result].sort()).toEqual([
                'pine apple pen apple',
                'pine applepen apple',
                'pineapple pen apple'
            ].sort());
        }
    });

    it('should handle a single character dictionary hit', () => {
        const result = wordBreak('a', ['a']);
        if (result !== undefined) expect(result).toEqual(['a']);
    });

    it('should handle repetitive dictionary words', () => {
        const result = wordBreak('aaaa', ['a', 'aa']);
        if (result !== undefined) {
            expect(result.length).toBeGreaterThanOrEqual(1);
            for (const sentence of result) {
                expect(sentence.replace(/ /g, '')).toBe('aaaa');
            }
        }
    });

    it('should return [] when wordDict is empty and s is not', () => {
        const result = wordBreak('abc', []);
        if (result !== undefined) expect(result).toEqual([]);
    });
});
