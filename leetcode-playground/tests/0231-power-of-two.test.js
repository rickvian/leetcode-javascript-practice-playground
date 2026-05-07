import { isPowerOfTwo } from '../0231-power-of-two';

describe('0231-power-of-two', () => {
    it('should return true for 1 (2^0)', () => {
        const result = isPowerOfTwo(1);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for 0 (boundary)', () => {
        const result = isPowerOfTwo(0);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return false for negatives like -16', () => {
        const result = isPowerOfTwo(-16);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for 1073741824 (2^30, upper range limit)', () => {
        const result = isPowerOfTwo(1073741824);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for 3 (off-by-one from 2)', () => {
        const result = isPowerOfTwo(3);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return false for INT_MAX (2147483647)', () => {
        const result = isPowerOfTwo(2147483647);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for 16 and false for 218 (mixed)', () => {
        const a = isPowerOfTwo(16);
        const b = isPowerOfTwo(218);
        if (a !== undefined) expect(a).toBe(true);
        if (b !== undefined) expect(b).toBe(false);
    });
});
