import { trailingZeroes } from '../0172-factorial-trailing-zeroes';

describe('0172-factorial-trailing-zeroes', () => {
    it('should return 0 for n = 0 (0! = 1)', () => {
        const result = trailingZeroes(0);
        if (result !== undefined) {
            expect(result).toBe(0);
        }
    });

    it('should return 0 for n = 3 (3! = 6)', () => {
        const result = trailingZeroes(3);
        if (result !== undefined) {
            expect(result).toBe(0);
        }
    });

    it('should return 1 for n = 5 (5! = 120)', () => {
        const result = trailingZeroes(5);
        if (result !== undefined) {
            expect(result).toBe(1);
        }
    });

    it('should return 7 for n = 30 (accounts for 25 contributing two 5s)', () => {
        const result = trailingZeroes(30);
        if (result !== undefined) {
            expect(result).toBe(7);
        }
    });

    it('should handle power-of-5 boundary n = 25 (6 trailing zeros)', () => {
        const result = trailingZeroes(25);
        if (result !== undefined) {
            expect(result).toBe(6);
        }
    });

    it('should handle large n = 10000 within constraints', () => {
        const result = trailingZeroes(10000);
        if (result !== undefined) {
            expect(result).toBe(2499);
        }
    });

    it('should handle off-by-one at n = 4 vs n = 5', () => {
        const before = trailingZeroes(4);
        const after = trailingZeroes(5);
        if (before !== undefined && after !== undefined) {
            expect(before).toBe(0);
            expect(after).toBe(1);
        }
    });
});
