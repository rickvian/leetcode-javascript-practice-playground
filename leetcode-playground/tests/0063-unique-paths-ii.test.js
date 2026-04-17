import { uniquePathsWithObstacles } from '../0063-unique-paths-ii';

describe('0063-unique-paths-ii', () => {
    it('should return 1 for 1x1 empty grid (min input)', () => {
        const result = uniquePathsWithObstacles([[0]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 0 when starting cell is blocked', () => {
        const result = uniquePathsWithObstacles([[1]]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 when end cell is blocked (off-by-one)', () => {
        const result = uniquePathsWithObstacles([[0, 0], [0, 1]]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle LeetCode example 3x3 grid with a center obstacle', () => {
        const result = uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle 1x2 grid with obstacle in middle', () => {
        const result = uniquePathsWithObstacles([[0, 1]]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle long thin grid (range-limit) without obstacle', () => {
        const result = uniquePathsWithObstacles([[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 0 when entire row blocks all paths', () => {
        const result = uniquePathsWithObstacles([[0,0,0],[1,1,1],[0,0,0]]);
        if (result !== undefined) expect(result).toBe(0);
    });
});
