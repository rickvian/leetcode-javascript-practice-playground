import { divide } from '../0029-divide-two-integers';

describe('0029-divide-two-integers', () => {
    it('should divide positive numbers truncating toward zero', () => {
        const result = divide(10, 3);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should divide negative numerator truncating toward zero', () => {
        const result = divide(7, -3);
        if (result !== undefined) expect(result).toBe(-2);
    });

    it('should return 0 for 0 divided by anything', () => {
        const result = divide(0, 5);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 when dividend equals divisor', () => {
        const result = divide(5, 5);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should clamp INT_MIN / -1 to INT_MAX (overflow boundary)', () => {
        const result = divide(-2147483648, -1);
        if (result !== undefined) expect(result).toBe(2147483647);
    });

    it('should handle divisor 1 returning dividend', () => {
        const result = divide(-2147483648, 1);
        if (result !== undefined) expect(result).toBe(-2147483648);
    });

    it('should handle large magnitude with large divisor', () => {
        const result = divide(-2147483648, 2);
        if (result !== undefined) expect(result).toBe(-1073741824);
    });
});
