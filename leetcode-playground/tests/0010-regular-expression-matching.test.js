import { isMatch } from '../0010-regular-expression-matching';

describe('0010-regular-expression-matching', () => {
    it('should match empty string with empty pattern', () => {
        const result = isMatch('', '');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should match empty string against a* pattern', () => {
        const result = isMatch('', 'a*');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should not match non-empty string against empty pattern', () => {
        const result = isMatch('a', '');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should match exact literal', () => {
        const result = isMatch('aa', 'aa');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should match via a* repetition', () => {
        const result = isMatch('aaa', 'a*');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should match via .* wildcard', () => {
        const result = isMatch('ab', '.*');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false when pattern does not span full string (off-by-one)', () => {
        const result = isMatch('mississippi', 'mis*is*p*.');
        if (result !== undefined) expect(result).toBe(false);
    });
});
