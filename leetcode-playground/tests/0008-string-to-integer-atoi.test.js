import { myAtoi } from '../0008-string-to-integer-atoi';

describe('0008-string-to-integer-atoi', () => {
    it('should return 0 for empty string', () => {
        const result = myAtoi('');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for all-whitespace string', () => {
        const result = myAtoi('   \t\n');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should ignore leading whitespace and parse', () => {
        const result = myAtoi('   42');
        if (result !== undefined) expect(result).toBe(42);
    });

    it('should handle negative sign', () => {
        const result = myAtoi('-42');
        if (result !== undefined) expect(result).toBe(-42);
    });

    it('should stop at first non-digit', () => {
        const result = myAtoi('4193 with words');
        if (result !== undefined) expect(result).toBe(4193);
    });

    it('should return 0 when first non-space char is a letter', () => {
        const result = myAtoi('words and 987');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should clamp to INT_MIN on negative overflow', () => {
        const result = myAtoi('-91283472332');
        if (result !== undefined) expect(result).toBe(-2147483648);
    });
});
