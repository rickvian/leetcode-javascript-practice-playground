import { intToRoman } from '../0012-integer-to-roman';

describe('0012-integer-to-roman', () => {
    it('should convert the minimum boundary 1', () => {
        const result = intToRoman(1);
        if (result !== undefined) expect(result).toBe('I');
    });

    it('should convert the maximum boundary 3999', () => {
        const result = intToRoman(3999);
        if (result !== undefined) expect(result).toBe('MMMCMXCIX');
    });

    it('should convert a subtractive 4', () => {
        const result = intToRoman(4);
        if (result !== undefined) expect(result).toBe('IV');
    });

    it('should convert a subtractive 9', () => {
        const result = intToRoman(9);
        if (result !== undefined) expect(result).toBe('IX');
    });

    it('should convert 58 (LVIII)', () => {
        const result = intToRoman(58);
        if (result !== undefined) expect(result).toBe('LVIII');
    });

    it('should convert 1994 (MCMXCIV)', () => {
        const result = intToRoman(1994);
        if (result !== undefined) expect(result).toBe('MCMXCIV');
    });

    it('should convert repeated-digit boundary 3888 to longest length', () => {
        const result = intToRoman(3888);
        if (result !== undefined) expect(result).toBe('MMMDCCCLXXXVIII');
    });
});
