import { hammingWeight } from '../0191-number-of-1-bits';

describe('0191-number-of-1-bits', () => {
    it('should return 3 for n = 11 (binary: 1011)', () => {
        expect(hammingWeight(11)).toBe(3);
    });

    it('should return 1 for n = 128 (binary: 10000000)', () => {
        expect(hammingWeight(128)).toBe(1);
    });

    it('should return 2 for n = 2147483645', () => {
        // 2147483645 = 01111111111111111111111111111101 -> 30 ones
        expect(hammingWeight(2147483645)).toBe(30);
    });

    it('should return 1 for n = 1 (binary: 1)', () => {
        expect(hammingWeight(1)).toBe(1);
    });

    it('should return 32 for n = 4294967295 (all 32 bits set)', () => {
        // 4294967295 = 0xFFFFFFFF = all 32 bits set
        expect(hammingWeight(4294967295)).toBe(32);
    });

    it('should return 16 for n = 2863311530 (alternating bits 10101...)', () => {
        // 0xAAAAAAAA = 10101010101010101010101010101010 -> 16 ones
        expect(hammingWeight(2863311530)).toBe(16);
    });

    it('should return 0 for n = 0', () => {
        expect(hammingWeight(0)).toBe(0);
    });
});
