import { maxProfit } from '../0188-best-time-to-buy-and-sell-stock-iv';

describe('0188-best-time-to-buy-and-sell-stock-iv', () => {
    it('LeetCode example 1: k=2, prices=[3,2,6,5,0,3]', () => {
        expect(maxProfit(2, [3, 2, 6, 5, 0, 3])).toEqual(7);
    });

    it('LeetCode example 2: k=2, prices=[2,4,1]', () => {
        expect(maxProfit(2, [2, 4, 1])).toEqual(2);
    });

    it('k=0 (no transactions): should return 0', () => {
        expect(maxProfit(0, [1, 2, 3, 4, 5])).toEqual(0);
    });

    it('empty prices array: should return 0', () => {
        expect(maxProfit(2, [])).toEqual(0);
    });

    it('single price: should return 0', () => {
        expect(maxProfit(2, [5])).toEqual(0);
    });

    it('descending prices: no profit possible', () => {
        expect(maxProfit(2, [5, 4, 3, 2, 1])).toEqual(0);
    });

    it('ascending prices: single profitable buy-sell', () => {
        expect(maxProfit(1, [1, 5])).toEqual(4);
    });

    it('k >= n/2 (unlimited transactions): greedy collect all upward moves', () => {
        expect(maxProfit(3, [1, 2, 3, 4, 5])).toEqual(4);
    });

    it('k=1, prices=[2,4,1,7,5,11]', () => {
        expect(maxProfit(1, [2, 4, 1, 7, 5, 11])).toEqual(10);
    });

    it('k=2, prices=[2,1,2,0,1]', () => {
        expect(maxProfit(2, [2, 1, 2, 0, 1])).toEqual(2);
    });

    it('k > n/2 (more transactions allowed than needed): greedy applies', () => {
        expect(maxProfit(100, [1, 2, 3, 4, 5])).toEqual(4);
    });

    it('k=1 with multiple peaks (only one buy-sell allowed)', () => {
        expect(maxProfit(1, [3, 1, 4, 8, 2, 3])).toEqual(7);
    });

    it('k=2 with two distinct valleys and peaks', () => {
        expect(maxProfit(2, [5, 1, 3, 4, 0, 6])).toEqual(9);
    });

    it('all same prices: no profit', () => {
        expect(maxProfit(2, [5, 5, 5, 5, 5])).toEqual(0);
    });

    it('k=3 with limited opportunities', () => {
        expect(maxProfit(3, [1, 2, 3, 2, 8, 7, 6, 2, 5])).toEqual(11);
    });

    it('large k with medium-size array triggers greedy', () => {
        expect(maxProfit(50, [1, 3, 2, 4, 5, 8, 4, 6, 7])).toEqual(11);
    });

    it('k=1 with large price movements', () => {
        expect(maxProfit(1, [1, 100])).toEqual(99);
    });

    it('k=2 with exact two profitable transactions available', () => {
        expect(maxProfit(2, [3, 2, 6, 5, 0, 3])).toEqual(7);
    });
});
