import { coinChange } from '../0322-coin-change';

describe('0322-coin-change', () => {
    it('should return minimum coins for LeetCode example 1', () => {
        expect(coinChange([1, 2, 5], 11)).toBe(3);
    });

    it('should return -1 when amount cannot be made for LeetCode example 2', () => {
        expect(coinChange([2], 3)).toBe(-1);
    });

    it('should return 0 when amount is 0 for LeetCode example 3', () => {
        expect(coinChange([1], 0)).toBe(0);
    });

    it('should handle single coin denomination', () => {
        expect(coinChange([1], 5)).toBe(5);
    });

    it('should handle exact match with single coin', () => {
        expect(coinChange([5], 5)).toBe(1);
    });

    it('should handle large amount', () => {
        expect(coinChange([1, 5, 10, 25], 100)).toBe(4);
    });

    it('should handle no combination possible', () => {
        expect(coinChange([5, 10], 3)).toBe(-1);
    });

    it('should choose optimal coins', () => {
        expect(coinChange([1, 5, 6, 9], 11)).toBe(2);
    });

    it('should handle many coin types', () => {
        expect(coinChange([2, 5, 10, 1], 27)).toBe(4);
    });

    it('should handle coins larger than amount', () => {
        expect(coinChange([2, 5, 10], 1)).toBe(-1);
    });

    it('should handle amount equal to coin', () => {
        expect(coinChange([186, 419, 83, 408], 6249)).toBe(20);
    });
});
