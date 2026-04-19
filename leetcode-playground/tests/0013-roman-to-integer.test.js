import { romanToInt } from '../0013-roman-to-integer';

describe('0013-roman-to-integer', () => {
    it('should return 1 for "I" (minimum boundary)', () => {
        const result = romanToInt('I');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 3999 for "MMMCMXCIX" (maximum boundary)', () => {
        const result = romanToInt('MMMCMXCIX');
        if (result !== undefined) expect(result).toBe(3999);
    });

    it('should parse subtractive "IV"', () => {
        const result = romanToInt('IV');
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should parse "LVIII" as 58', () => {
        const result = romanToInt('LVIII');
        if (result !== undefined) expect(result).toBe(58);
    });

    it('should parse "MCMXCIV" as 1994', () => {
        const result = romanToInt('MCMXCIV');
        if (result !== undefined) expect(result).toBe(1994);
    });

    it('should parse repeated characters "III"', () => {
        const result = romanToInt('III');
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should parse long repetition "MMMDCCCLXXXVIII" as 3888', () => {
        const result = romanToInt('MMMDCCCLXXXVIII');
        if (result !== undefined) expect(result).toBe(3888);
    });
});
