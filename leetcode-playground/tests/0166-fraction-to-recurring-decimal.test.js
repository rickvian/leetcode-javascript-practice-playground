import { fractionToDecimal } from '../0166-fraction-to-recurring-decimal';

describe('0166-fraction-to-recurring-decimal', () => {
    it('should return "0" when numerator is 0', () => {
        const result = fractionToDecimal(0, 5);
        if (result !== undefined) expect(result).toBe('0');
    });

    it('should handle integer division without decimals', () => {
        const result = fractionToDecimal(4, 2);
        if (result !== undefined) expect(result).toBe('2');
    });

    it('should handle simple non-repeating decimal 1/2', () => {
        const result = fractionToDecimal(1, 2);
        if (result !== undefined) expect(result).toBe('0.5');
    });

    it('should wrap repeating part in parentheses 2/3', () => {
        const result = fractionToDecimal(2, 3);
        if (result !== undefined) expect(result).toBe('0.(6)');
    });

    it('should handle a mixed non-repeating + repeating 4/333', () => {
        const result = fractionToDecimal(4, 333);
        if (result !== undefined) expect(result).toBe('0.(012)');
    });

    it('should handle negative result -1/2', () => {
        const result = fractionToDecimal(-1, 2);
        if (result !== undefined) expect(result).toBe('-0.5');
    });

    it('should handle INT_MIN / -1 which would overflow 32-bit', () => {
        const result = fractionToDecimal(-2147483648, -1);
        if (result !== undefined) expect(result).toBe('2147483648');
    });
});
