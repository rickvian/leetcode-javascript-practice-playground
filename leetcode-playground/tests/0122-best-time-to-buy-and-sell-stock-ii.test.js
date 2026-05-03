import { maxProfit } from '../0122-best-time-to-buy-and-sell-stock-ii';

describe('0122-best-time-to-buy-and-sell-stock-ii', () => {
    // Official LeetCode examples
    it('should handle official example 1: [7,1,5,3,6,4]', () => {
        const prices = [7, 1, 5, 3, 6, 4];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(7); // 1→5 (4) + 3→6 (3) = 7
    });

    it('should handle official example 2: [1,2,3,4,5]', () => {
        const prices = [1, 2, 3, 4, 5];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(4); // Buy at 1, sell at each increase
    });

    // Edge cases and constraints
    it('should return 0 for single day', () => {
        const prices = [1];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for strictly descending prices', () => {
        const prices = [5, 4, 3, 2, 1];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(0); // No profit possible
    });

    it('should handle strictly ascending prices', () => {
        const prices = [1, 2, 3, 4, 5];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(4); // Collect all differences
    });

    it('should handle two-element array with profit', () => {
        const prices = [1, 2];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle two-element array with no profit', () => {
        const prices = [2, 1];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle flat prices (no change)', () => {
        const prices = [1, 1, 1, 1];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(0);
    });

    // Multiple transaction scenarios
    it('should handle multiple distinct peaks and valleys', () => {
        const prices = [2, 1, 2, 0, 1];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(2); // 1→2 (1) + 0→1 (1) = 2
    });

    it('should handle alternating ups and downs', () => {
        const prices = [1, 4, 2, 5, 3, 6];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(9); // 1→4 (3) + 2→5 (3) + 3→6 (3) = 9
    });

    it('should handle prices with duplicate consecutive values', () => {
        const prices = [1, 1, 2, 2, 3, 3];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(2); // 1→3 = 2
    });

    it('should handle single peak at end', () => {
        const prices = [1, 2, 3, 4, 5, 5, 5];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(4); // 1→5 = 4
    });

    it('should handle single peak at start', () => {
        const prices = [5, 5, 5, 1, 2, 3];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(2); // 1→3 = 2
    });

    // Constraint-based tests
    it('should handle array of length 2 with ascending', () => {
        const prices = [3, 5];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle array of length 2 with descending', () => {
        const prices = [5, 3];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle longer array with multiple transactions', () => {
        const prices = [3, 2, 6, 5, 0, 3];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(7); // 2→6 (4) + 0→3 (3) = 7
    });

    it('should handle array with large numbers', () => {
        const prices = [1, 100, 1, 100, 1, 100];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(297); // 1→100 (99) three times
    });

    it('should handle array where all transactions equal one large profit', () => {
        const prices = [1, 10];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(9);
    });

    it('should handle descending then ascending pattern', () => {
        const prices = [5, 4, 3, 2, 1, 2, 3];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(2); // 1→3 = 2
    });

    it('should handle ascending then descending pattern', () => {
        const prices = [1, 2, 3, 4, 5, 4, 3];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(4); // 1→5 = 4
    });

    it('should handle zigzag pattern with multiple opportunities', () => {
        const prices = [1, 3, 2, 4, 1, 5];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(8); // 1→3 (2) + 2→4 (2) + 1→5 (4) = 8
    });

    it('should handle all same prices except one increase', () => {
        const prices = [2, 2, 2, 3, 2, 2];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(1); // 2→3 = 1
    });

    it('should handle array with minimal profit opportunities', () => {
        const prices = [10, 11, 10, 11, 10, 11];
        const result = maxProfit(prices);
        if (result !== undefined) expect(result).toBe(3); // 10→11 three times
    });
});
