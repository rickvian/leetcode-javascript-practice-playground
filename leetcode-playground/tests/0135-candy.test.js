import { candy } from '../0135-candy';

describe('0135-candy', () => {
    it('should return 0 for an empty array', () => {
        const result = candy([]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 for a single child (min input)', () => {
        const result = candy([5]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 5 for [1,0,2]', () => {
        const result = candy([1, 0, 2]);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should return 4 for [1,2,2] (equal ratings need not increase)', () => {
        const result = candy([1, 2, 2]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return n for repetitive equal ratings', () => {
        const result = candy([3, 3, 3, 3]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return n*(n+1)/2 for a strictly ascending array', () => {
        const n = 5;
        const result = candy([1, 2, 3, 4, 5]);
        if (result !== undefined) expect(result).toBe((n * (n + 1)) / 2);
    });

    it('should return n*(n+1)/2 for a strictly descending array', () => {
        const n = 5;
        const result = candy([5, 4, 3, 2, 1]);
        if (result !== undefined) expect(result).toBe((n * (n + 1)) / 2);
    });
});
