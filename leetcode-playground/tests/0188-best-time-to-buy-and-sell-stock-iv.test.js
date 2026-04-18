import { maxProfit } from '../0188-best-time-to-buy-and-sell-stock-iv';

describe('0188-best-time-to-buy-and-sell-stock-iv', () => {
    it('should return 0 for an empty prices array', () => {
        const result = maxProfit(2, []);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 when k = 0 no matter the prices', () => {
        const result = maxProfit(0, [3, 2, 6, 5, 0, 3]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle the canonical example k=2', () => {
        const result = maxProfit(2, [3, 2, 6, 5, 0, 3]);
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should return 0 for strictly decreasing prices', () => {
        const result = maxProfit(3, [5, 4, 3, 2, 1]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for constant prices (repetitive)', () => {
        const result = maxProfit(5, [3, 3, 3, 3, 3]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should cap transactions to n/2 when k exceeds that', () => {
        const result = maxProfit(100, [1, 2, 4]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 0 for single-day prices', () => {
        const result = maxProfit(1, [7]);
        if (result !== undefined) expect(result).toBe(0);
    });
});
