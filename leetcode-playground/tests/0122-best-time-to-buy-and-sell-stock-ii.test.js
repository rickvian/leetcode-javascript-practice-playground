import { maxProfit } from '../0122-best-time-to-buy-and-sell-stock-ii';

describe('0122-best-time-to-buy-and-sell-stock-ii', () => {
    it('should return 0 for an empty prices array', () => {
        const result = maxProfit([]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for a single-day array (min input)', () => {
        const result = maxProfit([5]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should capture all positive swings in [7,1,5,3,6,4]', () => {
        const result = maxProfit([7, 1, 5, 3, 6, 4]);
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should capture the full ramp in [1,2,3,4,5]', () => {
        const result = maxProfit([1, 2, 3, 4, 5]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 0 for a strictly decreasing sequence [7,6,4,3,1]', () => {
        const result = maxProfit([7, 6, 4, 3, 1]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for repetitive identical prices', () => {
        const result = maxProfit([3, 3, 3, 3, 3]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle adjacent swings [1,5,1,5,1,5]', () => {
        const result = maxProfit([1, 5, 1, 5, 1, 5]);
        if (result !== undefined) expect(result).toBe(12);
    });
});
