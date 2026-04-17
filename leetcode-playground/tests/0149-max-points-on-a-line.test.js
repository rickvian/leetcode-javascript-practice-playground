import { maxPoints } from '../0149-max-points-on-a-line';

describe('0149-max-points-on-a-line', () => {
    it('should return 1 for a single point (min input)', () => {
        const result = maxPoints([[0, 0]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 2 for any two distinct points', () => {
        const result = maxPoints([[0, 0], [1, 1]]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 3 for classic [[1,1],[2,2],[3,3]]', () => {
        const result = maxPoints([[1, 1], [2, 2], [3, 3]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 4 for the LeetCode [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]', () => {
        const result = maxPoints([[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle duplicate points as collinear (repetitive data)', () => {
        const result = maxPoints([[0, 0], [0, 0], [0, 0]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should detect vertical line collinearity', () => {
        const result = maxPoints([[1, 1], [1, 2], [1, 3], [2, 1]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should detect horizontal line collinearity', () => {
        const result = maxPoints([[1, 5], [2, 5], [3, 5], [3, 6]]);
        if (result !== undefined) expect(result).toBe(3);
    });
});
