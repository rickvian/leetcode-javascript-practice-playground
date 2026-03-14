import { numDecodings } from '../0091-decode-ways';

describe('0091-decode-ways', () => {
    it('should return 2 for "12" (AB or L)', () => {
        expect(numDecodings("12")).toBe(2);
    });

    it('should return 3 for "226" (BZ, VF, or BBF)', () => {
        expect(numDecodings("226")).toBe(3);
    });

    it('should return 0 for "06" (leading zero is invalid)', () => {
        expect(numDecodings("06")).toBe(0);
    });

    it('should return 0 for "0" (cannot decode)', () => {
        expect(numDecodings("0")).toBe(0);
    });

    it('should return 1 for "10" (J only)', () => {
        expect(numDecodings("10")).toBe(1);
    });

    it('should return 1 for "1" (A only)', () => {
        expect(numDecodings("1")).toBe(1);
    });

    it('should return 1 for "27" (only BG, 27 > 26 so no single decode)', () => {
        expect(numDecodings("27")).toBe(1);
    });

    it('should return 1 for "2101"', () => {
        expect(numDecodings("2101")).toBe(1);
    });

    it('should return 2 for "11106"', () => {
        expect(numDecodings("11106")).toBe(2);
    });

    it('should return 3 for "111"', () => {
        expect(numDecodings("111")).toBe(3);
    });
});
