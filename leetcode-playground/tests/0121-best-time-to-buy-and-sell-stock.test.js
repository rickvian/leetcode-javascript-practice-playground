import { maxProfit } from '../0121-best-time-to-buy-and-sell-stock';

describe('0121-best-time-to-buy-and-sell-stock', () => {
    it('should return 5 for [7,1,5,3,6,4]', () => {
        expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
    });

    it('should return 0 for [7,6,4,3,1] (no profit possible)', () => {
        expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
    });

    it('should return 1 for [1,2]', () => {
        expect(maxProfit([1, 2])).toBe(1);
    });

    it('should return 2 for [2,4,1]', () => {
        expect(maxProfit([2, 4, 1])).toBe(2);
    });

    it('should return 0 for single price [1]', () => {
        expect(maxProfit([1])).toBe(0);
    });

    it('should return 2 for [2,1,2,1,0,1,2]', () => {
        expect(maxProfit([2, 1, 2, 1, 0, 1, 2])).toBe(2);
    });

    it('should return 4 for ascending prices [1,2,3,4,5]', () => {
        expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
    });

    it('should return 0 for all same prices [3,3,3]', () => {
        expect(maxProfit([3, 3, 3])).toBe(0);
    });
});
