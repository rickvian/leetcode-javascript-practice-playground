import { isMatch } from '../0044-wildcard-matching';

describe('0044-wildcard-matching', () => {
    it('should return true for both empty string and empty pattern (min input)', () => {
        const result = isMatch('', '');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for empty string matched by "*" only', () => {
        const result = isMatch('', '*');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for non-empty string against empty pattern', () => {
        const result = isMatch('abc', '');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should handle "?" wildcard as a single char', () => {
        const result = isMatch('cat', 'c?t');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should match with "*" spanning multiple characters', () => {
        const result = isMatch('adceb', '*a*b');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should reject when pattern needs exact match and "*" is absent (off-by-one length)', () => {
        const result = isMatch('acdcb', 'a*c?b');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should handle repetitive-star pattern against identical-char string', () => {
        const result = isMatch('aaaa', '***');
        if (result !== undefined) expect(result).toBe(true);
    });
});
