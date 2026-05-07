import { trailingZeroes } from '../0172-factorial-trailing-zeroes';

describe('0172-factorial-trailing-zeroes', () => {
    it('should return 0 for n=0 (0! = 1, no trailing zero)', () => {
        expect(trailingZeroes(0)).toEqual(0);
    });

    it('should return 0 for n=1 (1! = 1, no trailing zero)', () => {
        expect(trailingZeroes(1)).toEqual(0);
    });

    it('should return 0 for n=4 (4! = 24, no trailing zero)', () => {
        expect(trailingZeroes(4)).toEqual(0);
    });

    it('should return 1 for n=5 (5! = 120, one trailing zero from one 5)', () => {
        expect(trailingZeroes(5)).toEqual(1);
    });

    it('should return 1 for n=9 (9! = 362880, one trailing zero)', () => {
        expect(trailingZeroes(9)).toEqual(1);
    });

    it('should return 2 for n=10 (10! = 3628800, two trailing zeros from 5 and 10)', () => {
        expect(trailingZeroes(10)).toEqual(2);
    });

    it('should return 6 for n=25 (25 = 5^2, contributes extra zero)', () => {
        expect(trailingZeroes(25)).toEqual(6);
    });

    it('should return 7 for n=30 (accumulation of factors of 5)', () => {
        expect(trailingZeroes(30)).toEqual(7);
    });

    it('should return 24 for n=100 (large factorial)', () => {
        expect(trailingZeroes(100)).toEqual(24);
    });

    it('should return 156 for n=625 (625 = 5^4, multiple levels)', () => {
        expect(trailingZeroes(625)).toEqual(156);
    });

    it('should handle LeetCode example 1: n=3', () => {
        expect(trailingZeroes(3)).toEqual(0);
    });

    it('should handle LeetCode example 2: n=5', () => {
        expect(trailingZeroes(5)).toEqual(1);
    });
});
