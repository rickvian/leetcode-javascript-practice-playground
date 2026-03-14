import { getSum } from '../0371-sum-of-two-integers';

describe('0371-sum-of-two-integers', () => {
    it('should return 3 for LeetCode example 1', () => {
        expect(getSum(1, 2)).toBe(3);
    });

    it('should return 5 for LeetCode example 2', () => {
        expect(getSum(2, 3)).toBe(5);
    });

    it('should handle both zeros', () => {
        expect(getSum(0, 0)).toBe(0);
    });

    it('should handle one zero', () => {
        expect(getSum(5, 0)).toBe(5);
        expect(getSum(0, 7)).toBe(7);
    });

    it('should handle negative numbers', () => {
        expect(getSum(-1, -2)).toBe(-3);
    });

    it('should handle positive and negative', () => {
        expect(getSum(-1, 2)).toBe(1);
        expect(getSum(3, -5)).toBe(-2);
    });

    it('should handle same numbers', () => {
        expect(getSum(4, 4)).toBe(8);
    });

    it('should handle large numbers', () => {
        expect(getSum(100, 200)).toBe(300);
    });

    it('should handle numbers that cancel out', () => {
        expect(getSum(5, -5)).toBe(0);
    });

    it('should handle numbers with carry propagation', () => {
        expect(getSum(15, 1)).toBe(16);
        expect(getSum(7, 1)).toBe(8);
    });
});
