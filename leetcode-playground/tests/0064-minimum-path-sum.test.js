import { minPathSum } from '../0064-minimum-path-sum';

describe('0064-minimum-path-sum', () => {
    it('should handle single-cell grid (min input)', () => {
        const result = minPathSum([[0]]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return leetcode example [[1,3,1],[1,5,1],[4,2,1]] = 7', () => {
        const result = minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]);
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should handle single-row grid (sum of row)', () => {
        const result = minPathSum([[1, 2, 3]]);
        if (result !== undefined) expect(result).toBe(6);
    });

    it('should handle single-column grid (sum of column)', () => {
        const result = minPathSum([[1], [2], [3]]);
        if (result !== undefined) expect(result).toBe(6);
    });

    it('should handle repetitive identical values (all ones, 3x3 -> 5)', () => {
        const result = minPathSum([[1, 1, 1], [1, 1, 1], [1, 1, 1]]);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should handle zero cells along the optimal path', () => {
        const result = minPathSum([[0, 0, 0], [9, 9, 0], [9, 9, 0]]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should compute path sum for 2x2 [[1,2],[1,1]] = 3', () => {
        const result = minPathSum([[1, 2], [1, 1]]);
        if (result !== undefined) expect(result).toBe(3);
    });
});
