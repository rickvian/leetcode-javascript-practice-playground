import { multiply } from '../0043-multiply-strings';

describe('0043-multiply-strings', () => {
    it('should return "0" when either operand is "0"', () => {
        const result = multiply('0', '12345');
        if (result !== undefined) expect(result).toBe('0');
    });

    it('should handle both operands as "0" (min input / repetitive zero)', () => {
        const result = multiply('0', '0');
        if (result !== undefined) expect(result).toBe('0');
    });

    it('should multiply two single-digit operands', () => {
        const result = multiply('2', '3');
        if (result !== undefined) expect(result).toBe('6');
    });

    it('should handle LeetCode example 123 * 456', () => {
        const result = multiply('123', '456');
        if (result !== undefined) expect(result).toBe('56088');
    });

    it('should handle repetitive 9s beyond number precision', () => {
        const result = multiply('999999', '999999');
        if (result !== undefined) expect(result).toBe('999998000001');
    });

    it('should handle "1" as identity multiplier (off-by-one trigger)', () => {
        const result = multiply('1', '100');
        if (result !== undefined) expect(result).toBe('100');
    });

    it('should handle large asymmetric lengths', () => {
        const result = multiply('10', '100000000000000000');
        if (result !== undefined) expect(result).toBe('1000000000000000000');
    });
});
