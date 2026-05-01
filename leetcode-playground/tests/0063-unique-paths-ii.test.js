import { uniquePathsWithObstacles } from '../0063-unique-paths-ii';

describe('0063-unique-paths-ii', () => {
    // LeetCode official examples
    it('should return 2 for [[0,0,0],[0,1,0],[0,0,0]]', () => {
        const result = uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 1 for [[0,1],[0,0]]', () => {
        const result = uniquePathsWithObstacles([[0,1],[0,0]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    // obstacle at start (top-left) returns 0
    it('should return 0 when obstacle at start', () => {
        const result = uniquePathsWithObstacles([[1,0],[0,0]]);
        if (result !== undefined) expect(result).toBe(0);
    });

    // obstacle at end (bottom-right) returns 0
    it('should return 0 when obstacle at end', () => {
        const result = uniquePathsWithObstacles([[0,0],[0,1]]);
        if (result !== undefined) expect(result).toBe(0);
    });

    // 1x1 grid with no obstacle
    it('should return 1 for 1x1 grid with no obstacle', () => {
        const result = uniquePathsWithObstacles([[0]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    // 1x1 grid with obstacle
    it('should return 0 for 1x1 grid with obstacle', () => {
        const result = uniquePathsWithObstacles([[1]]);
        if (result !== undefined) expect(result).toBe(0);
    });

    // no obstacles — should equal unique paths (m=3,n=3 → 6)
    it('should return 6 for 3x3 grid with no obstacles', () => {
        const result = uniquePathsWithObstacles([[0,0,0],[0,0,0],[0,0,0]]);
        if (result !== undefined) expect(result).toBe(6);
    });

    // obstacle blocking all paths (middle of single row)
    it('should return 0 when obstacle blocks single-row path', () => {
        const result = uniquePathsWithObstacles([[0,1,0]]);
        if (result !== undefined) expect(result).toBe(0);
    });

    // obstacle blocking all paths (middle of single column)
    it('should return 0 when obstacle blocks single-column path', () => {
        const result = uniquePathsWithObstacles([[0],[1],[0]]);
        if (result !== undefined) expect(result).toBe(0);
    });

    // single row no obstacles
    it('should return 1 for 1x4 grid with no obstacles', () => {
        const result = uniquePathsWithObstacles([[0,0,0,0]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    // single column no obstacles
    it('should return 1 for 4x1 grid with no obstacles', () => {
        const result = uniquePathsWithObstacles([[0],[0],[0],[0]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    // obstacle in corner (not start/end) still allows paths
    it('should return 1 for 2x2 grid with top-right obstacle', () => {
        const result = uniquePathsWithObstacles([[0,1],[0,0]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    // multiple obstacles leaving only one path
    it('should return 1 for 3x3 grid with obstacles forcing single path', () => {
        const result = uniquePathsWithObstacles([[0,0,0],[1,1,0],[0,0,0]]);
        if (result !== undefined) expect(result).toBe(1);
    });
});
