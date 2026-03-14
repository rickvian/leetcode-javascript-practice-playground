import { reverseBits } from '../0190-reverse-bits';

describe('0190-reverse-bits', () => {
    it('should return 964176192 for 43261596', () => {
        // 43261596  = 00000010100101000001111010011100
        // 964176192 = 00111001011110000010100101000000
        expect(reverseBits(43261596)).toBe(964176192);
    });

    it('should return 1 for 2147483648 (10...0 -> 00...01)', () => {
        // 2147483648 = 10000000000000000000000000000000
        // reversed   = 00000000000000000000000000000001
        expect(reverseBits(2147483648)).toBe(1);
    });

    it('should return 0 for 0', () => {
        expect(reverseBits(0)).toBe(0);
    });

    it('should return 4294967295 for 4294967295 (all ones)', () => {
        // All 1s reversed is still all 1s
        expect(reverseBits(4294967295)).toBe(4294967295);
    });

    it('should return 2147483648 for 1', () => {
        // 1 = 00000000000000000000000000000001
        // reversed = 10000000000000000000000000000000 = 2147483648
        expect(reverseBits(1)).toBe(2147483648);
    });

    it('should return 3221225472 for 3', () => {
        // 3 = 00000000000000000000000000000011
        // reversed = 11000000000000000000000000000000 = 3221225472
        expect(reverseBits(3)).toBe(3221225472);
    });
});
