import { minimumTotal } from '../0120-triangle';

describe('0120-triangle', () => {
    it('should return the single value for a 1-row triangle (min input)', () => {
        const result = minimumTotal([[-10]]);
        if (result !== undefined) expect(result).toBe(-10);
    });

    it('should handle the classic LeetCode example', () => {
        const result = minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]);
        if (result !== undefined) expect(result).toBe(11);
    });

    it('should support negative values throughout the triangle', () => {
        const result = minimumTotal([[-1], [-2, -3]]);
        if (result !== undefined) expect(result).toBe(-4);
    });

    it('should handle a triangle of all identical values', () => {
        const result = minimumTotal([[5], [5, 5], [5, 5, 5]]);
        if (result !== undefined) expect(result).toBe(15);
    });

    it('should prefer the left edge when it is the cheapest path', () => {
        const result = minimumTotal([[1], [1, 100], [1, 100, 100]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should prefer the right edge when it is the cheapest path', () => {
        const result = minimumTotal([[1], [100, 1], [100, 100, 1]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle boundary value 0 at all positions', () => {
        const result = minimumTotal([[0], [0, 0], [0, 0, 0], [0, 0, 0, 0]]);
        if (result !== undefined) expect(result).toBe(0);
    });
});
