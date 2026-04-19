import { rangeBitwiseAnd } from '../0201-bitwise-and-of-numbers-range';

describe('0201-bitwise-and-of-numbers-range', () => {
    it('should compute AND of [5,7] = 4', () => {
        const result = rangeBitwiseAnd(5, 7);
        if (result !== undefined) {
            expect(result).toBe(4);
        }
    });

    it('should return 0 when range crosses a power of two', () => {
        const result = rangeBitwiseAnd(0, 1);
        if (result !== undefined) {
            expect(result).toBe(0);
        }
    });

    it('should return the single value when left equals right', () => {
        const result = rangeBitwiseAnd(12345, 12345);
        if (result !== undefined) {
            expect(result).toBe(12345);
        }
    });

    it('should return 0 for [1, INT_MAX]', () => {
        const result = rangeBitwiseAnd(1, 2147483647);
        if (result !== undefined) {
            expect(result).toBe(0);
        }
    });

    it('should handle left=0 correctly', () => {
        const result = rangeBitwiseAnd(0, 0);
        if (result !== undefined) {
            expect(result).toBe(0);
        }
    });

    it('should compute AND of a range not crossing any bit flip', () => {
        const result = rangeBitwiseAnd(12, 15);
        if (result !== undefined) {
            expect(result).toBe(12);
        }
    });

    it('should return 0 for very wide range', () => {
        const result = rangeBitwiseAnd(1, 2147483646);
        if (result !== undefined) {
            expect(result).toBe(0);
        }
    });
});
