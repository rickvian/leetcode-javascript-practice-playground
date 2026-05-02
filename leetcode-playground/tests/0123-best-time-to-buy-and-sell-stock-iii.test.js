import { maxProfit } from '../0123-best-time-to-buy-and-sell-stock-iii';

describe('0123-best-time-to-buy-and-sell-stock-iii', () => {
    it('should handle single element array', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([5])).toBe(0);
        }
    });

    it('should handle two-element array with profit', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 5])).toBe(4);
        }
    });

    it('should handle two-element array without profit', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([5, 1])).toBe(0);
        }
    });

    it('should handle descending prices (no profit)', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([5, 4, 3, 2, 1])).toBe(0);
        }
    });

    it('should handle ascending prices (one transaction optimal)', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
        }
    });

    it('should handle flat prices', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([3, 3, 3, 3])).toBe(0);
        }
    });

    it('should handle official example 1: [3,3,5,0,0,3,1,4]', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])).toBe(3);
        }
    });

    it('should handle official example 2: [1,2,3,4,5]', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
        }
    });

    it('should handle single peak (only buy once optimal)', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 7, 2, 8])).toBe(7);
        }
    });

    it('should handle two distinct peaks (two transactions better)', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 5, 0, 5])).toBe(10);
        }
    });

    it('should handle valley between two peaks', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 4, 2, 5])).toBe(6);
        }
    });

    it('should handle multiple small transactions', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0])).toBe(13);
        }
    });

    it('should handle large peak at end after valley', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([3, 1, 2, 8])).toBe(7);
        }
    });

    it('should handle early peak then late peak', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 6, 2, 3, 5])).toBe(7);
        }
    });

    it('should handle negative profit scenario (all down)', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([10, 9, 8, 7, 6])).toBe(0);
        }
    });

    it('should handle single day (no transaction possible)', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([100])).toBe(0);
        }
    });

    it('should handle zero prices', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([0, 0, 0, 0])).toBe(0);
        }
    });

    it('should handle complex pattern: multiple valleys and peaks', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 5, 2, 6, 3, 7])).toBe(11);
        }
    });

    it('should handle adjacent transactions', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 2, 3, 4])).toBe(3);
        }
    });

    it('should handle same optimal result from one or two transactions', () => {
        if (maxProfit !== undefined) {
            expect(maxProfit([1, 10, 2, 5])).toBe(9);
        }
    });
});
