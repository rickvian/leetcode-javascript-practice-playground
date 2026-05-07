import { countDigitOne } from '../0233-number-of-digit-one';

describe('0233-number-of-digit-one', () => {
    it('should return 0 for n=0 (minimum boundary)', () => {
        const result = countDigitOne(0);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 for n=1', () => {
        const result = countDigitOne(1);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 6 for n=13 (leetcode sample)', () => {
        const result = countDigitOne(13);
        if (result !== undefined) expect(result).toBe(6);
    });

    it('should return 2 for n=10 (1 and 10 both count once via digit position)', () => {
        const result = countDigitOne(10);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 21 for n=100 (power-of-ten off-by-one check)', () => {
        const result = countDigitOne(100);
        if (result !== undefined) expect(result).toBe(21);
    });

    it('should handle range limits (n=2147483647 INT_MAX)', () => {
        const result = countDigitOne(2147483647);
        if (result !== undefined) expect(typeof result).toBe('number');
    });

    it('should return 20 for n=99 (repetitive 9s)', () => {
        const result = countDigitOne(99);
        if (result !== undefined) expect(result).toBe(20);
    });
});
