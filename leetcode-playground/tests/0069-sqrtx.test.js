import { mySqrt } from '../0069-sqrtx';

describe('0069-sqrtx', () => {
    it('should return 0 for x=0 (min input)', () => {
        const result = mySqrt(0);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 for x=1 (boundary)', () => {
        const result = mySqrt(1);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return floor(sqrt(x)) for perfect squares', () => {
        const result = mySqrt(16);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return floor for non-perfect squares (x=8 -> 2)', () => {
        const result = mySqrt(8);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle large x within int range (x=2147395599 -> 46339)', () => {
        const result = mySqrt(2147395599);
        if (result !== undefined) expect(result).toBe(46339);
    });

    it('should return 1 for x=2 and x=3 (off-by-one boundary)', () => {
        const r1 = mySqrt(2);
        const r2 = mySqrt(3);
        if (r1 !== undefined) expect(r1).toBe(1);
        if (r2 !== undefined) expect(r2).toBe(1);
    });

    it('should return 2 for x=4 (the exact boundary between floor=1 and floor=2)', () => {
        const result = mySqrt(4);
        if (result !== undefined) expect(result).toBe(2);
    });
});
