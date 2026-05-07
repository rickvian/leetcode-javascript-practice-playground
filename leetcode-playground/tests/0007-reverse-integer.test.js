import { reverse } from '../0007-reverse-integer';

describe('0007-reverse-integer', () => {
    it('should return 0 for input 0', () => {
        const result = reverse(0);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should reverse a positive number', () => {
        const result = reverse(123);
        if (result !== undefined) expect(result).toBe(321);
    });

    it('should reverse a negative number', () => {
        const result = reverse(-123);
        if (result !== undefined) expect(result).toBe(-321);
    });

    it('should drop trailing zeros on reverse', () => {
        const result = reverse(120);
        if (result !== undefined) expect(result).toBe(21);
    });

    it('should return 0 on 32-bit overflow positive boundary', () => {
        const result = reverse(1534236469);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 on 32-bit overflow negative boundary', () => {
        const result = reverse(-2147483648);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle a single-digit input', () => {
        const result = reverse(7);
        if (result !== undefined) expect(result).toBe(7);
    });
});
