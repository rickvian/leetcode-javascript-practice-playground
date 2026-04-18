import { myPow } from '../0050-powx-n';

describe('0050-powx-n', () => {
    it('should return 1024 for 2^10', () => {
        expect(myPow(2, 10)).toBeCloseTo(1024);
    });

    it('should return ~0.00001 for 2.1^3', () => {
        expect(myPow(2.1, 3)).toBeCloseTo(9.261);
    });

    it('should return 0.25 for 2^-2', () => {
        expect(myPow(2, -2)).toBeCloseTo(0.25);
    });

    it('should return 1 for any base to the power 0', () => {
        expect(myPow(5, 0)).toBeCloseTo(1);
        expect(myPow(-3, 0)).toBeCloseTo(1);
    });

    it('should return 1 for 1^n', () => {
        expect(myPow(1, 100)).toBeCloseTo(1);
        expect(myPow(1, -100)).toBeCloseTo(1);
    });

    it('should return x for x^1', () => {
        expect(myPow(7, 1)).toBeCloseTo(7);
    });

    it('should handle negative base with even exponent (positive result)', () => {
        expect(myPow(-2, 4)).toBeCloseTo(16);
    });

    it('should handle negative base with odd exponent (negative result)', () => {
        expect(myPow(-2, 3)).toBeCloseTo(-8);
    });

    it('should handle negative exponent', () => {
        expect(myPow(2, -10)).toBeCloseTo(1 / 1024);
    });

    it('should return 0 for 0^n where n > 0', () => {
        expect(myPow(0, 5)).toBeCloseTo(0);
    });

    it('should handle large positive exponent', () => {
        expect(myPow(1, 2147483647)).toBeCloseTo(1);
    });

    it('should handle large negative exponent', () => {
        expect(myPow(1, -2147483648)).toBeCloseTo(1);
    });
});
