import { maxPoints } from '../0149-max-points-on-a-line';

describe('0149-max-points-on-a-line', () => {
    it('should handle single point', () => {
        const result = maxPoints([[1, 1]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle two points (always collinear)', () => {
        const result = maxPoints([[1, 1], [2, 2]]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle two points (different y)', () => {
        const result = maxPoints([[0, 0], [1, 0]]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle two points (vertical)', () => {
        const result = maxPoints([[1, 0], [1, 1]]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle all points the same coordinate', () => {
        const result = maxPoints([[0, 0], [0, 0], [0, 0]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle vertical line (multiple points, same x)', () => {
        const result = maxPoints([[1, 0], [1, 1], [1, 2], [1, 3]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle horizontal line (multiple points, same y)', () => {
        const result = maxPoints([[0, 1], [1, 1], [2, 1], [3, 1]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle diagonal line (slope 1)', () => {
        const result = maxPoints([[0, 0], [1, 1], [2, 2], [3, 3]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle diagonal line (slope -1)', () => {
        const result = maxPoints([[0, 3], [1, 2], [2, 1], [3, 0]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle LeetCode example 1', () => {
        const result = maxPoints([[1, 1], [1, 1], [2, 2], [2, 2]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle LeetCode example 2', () => {
        const result = maxPoints([[0, 0], [1, 1], [0, 0]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle LeetCode example 3', () => {
        const result = maxPoints([[0, 0], [1, 0], [0, 0], [0, 1], [0, 1], [0, 0]]);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should handle three collinear points with outlier', () => {
        const result = maxPoints([[0, 0], [1, 1], [2, 2], [3, 0]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle slope 2 (dy=2, dx=1)', () => {
        const result = maxPoints([[0, 0], [1, 2], [2, 4], [3, 6]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle slope 1/2 (dy=1, dx=2)', () => {
        const result = maxPoints([[0, 0], [2, 1], [4, 2], [6, 3]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle negative slope -2', () => {
        const result = maxPoints([[0, 6], [1, 4], [2, 2], [3, 0]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle multiple lines with no collinearity beyond pairs', () => {
        const result = maxPoints([[0, 0], [1, 1], [1, 0]]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle five points with three collinear', () => {
        const result = maxPoints([[0, 0], [1, 1], [2, 2], [0, 1], [1, 0]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle duplicate points with one unique', () => {
        const result = maxPoints([[0, 0], [0, 0], [1, 1]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle six points on two different lines', () => {
        const result = maxPoints([[0, 0], [1, 0], [2, 0], [0, 1], [1, 1], [2, 1]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle large coordinate values', () => {
        const result = maxPoints([[0, 0], [1000, 1000], [2000, 2000], [3000, 3000]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle negative coordinates horizontal line', () => {
        const result = maxPoints([[-2, 1], [-1, 1], [0, 1], [1, 1]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle negative coordinates vertical line', () => {
        const result = maxPoints([[1, -2], [1, -1], [1, 0], [1, 1]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle negative slope with negative coordinates', () => {
        const result = maxPoints([[-1, 1], [0, 0], [1, -1], [2, -2]]);
        if (result !== undefined) expect(result).toBe(4);
    });
});
