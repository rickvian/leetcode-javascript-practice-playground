import { grayCode } from '../0089-gray-code';

const popcount = (x) => {
    let c = 0;
    while (x) { c += x & 1; x >>>= 1; }
    return c;
};

describe('0089-gray-code', () => {
    it('should return [0] for n=0 (min input)', () => {
        const result = grayCode(0);
        if (result !== undefined) expect(result).toEqual([0]);
    });

    it('should return length 2^n for n=2 (boundary sanity)', () => {
        const result = grayCode(2);
        if (result !== undefined) expect(result.length).toBe(4);
    });

    it('should start with 0', () => {
        const result = grayCode(3);
        if (result !== undefined) expect(result[0]).toBe(0);
    });

    it('should have all unique values in the sequence', () => {
        const result = grayCode(4);
        if (result !== undefined) {
            expect(new Set(result).size).toBe(result.length);
        }
    });

    it('should differ by exactly one bit between adjacent entries', () => {
        const result = grayCode(3);
        if (result !== undefined) {
            for (let i = 1; i < result.length; i++) {
                expect(popcount(result[i] ^ result[i - 1])).toBe(1);
            }
        }
    });

    it('should differ by exactly one bit between last and first (circular)', () => {
        const result = grayCode(3);
        if (result !== undefined) {
            expect(popcount(result[0] ^ result[result.length - 1])).toBe(1);
        }
    });

    it('should keep all values within [0, 2^n) range', () => {
        const n = 5;
        const result = grayCode(n);
        if (result !== undefined) {
            const limit = 1 << n;
            for (const v of result) {
                expect(v).toBeGreaterThanOrEqual(0);
                expect(v).toBeLessThan(limit);
            }
        }
    });
});
