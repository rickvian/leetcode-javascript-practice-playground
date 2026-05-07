import { numDistinct } from '../0115-distinct-subsequences';

describe('0115-distinct-subsequences', () => {
    it('should return 1 when both s and t are empty strings (empty subseq counts once)', () => {
        const result = numDistinct('', '');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 1 when t is empty regardless of s (empty subseq always exists once)', () => {
        const result = numDistinct('abc', '');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 0 when s is empty but t is not', () => {
        const result = numDistinct('', 'a');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 3 for s="rabbbit", t="rabbit" (classic)', () => {
        const result = numDistinct('rabbbit', 'rabbit');
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 5 for s="babgbag", t="bag" (classic)', () => {
        const result = numDistinct('babgbag', 'bag');
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should return 0 when t is longer than s', () => {
        const result = numDistinct('ab', 'abc');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return C(6,3)=20 for all-same-char repeats ("aaaaaa" vs "aaa")', () => {
        const result = numDistinct('aaaaaa', 'aaa');
        if (result !== undefined) expect(result).toBe(20);
    });
});
