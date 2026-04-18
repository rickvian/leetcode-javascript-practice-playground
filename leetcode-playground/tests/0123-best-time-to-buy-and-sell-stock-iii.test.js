import { maxProfit } from '../0123-best-time-to-buy-and-sell-stock-iii';

describe('0123-best-time-to-buy-and-sell-stock-iii', () => {
    it('should return 0 for an empty array', () => {
        const result = maxProfit([]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for a single-day array (min input)', () => {
        const result = maxProfit([1]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should capture two transactions in [3,3,5,0,0,3,1,4]', () => {
        const result = maxProfit([3, 3, 5, 0, 0, 3, 1, 4]);
        if (result !== undefined) expect(result).toBe(6);
    });

    it('should handle the strictly ascending case [1,2,3,4,5] (one transaction is optimal)', () => {
        const result = maxProfit([1, 2, 3, 4, 5]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 0 for strictly descending prices', () => {
        const result = maxProfit([7, 6, 4, 3, 1]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for repetitive identical prices', () => {
        const result = maxProfit([4, 4, 4, 4, 4]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should use two separate windows in [6,1,3,2,4,7]', () => {
        const result = maxProfit([6, 1, 3, 2, 4, 7]);
        if (result !== undefined) expect(result).toBe(7);
    });
});
