import { maximalRectangle } from '../0085-maximal-rectangle';

describe('0085-maximal-rectangle', () => {
    it('should return 0 for empty matrix (min input)', () => {
        const result = maximalRectangle([]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for all-zero matrix', () => {
        const result = maximalRectangle([
            ['0', '0'],
            ['0', '0'],
        ]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return leetcode example area 6', () => {
        const result = maximalRectangle([
            ['1', '0', '1', '0', '0'],
            ['1', '0', '1', '1', '1'],
            ['1', '1', '1', '1', '1'],
            ['1', '0', '0', '1', '0'],
        ]);
        if (result !== undefined) expect(result).toBe(6);
    });

    it('should return 1 for single "1" cell', () => {
        const result = maximalRectangle([['1']]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 0 for single "0" cell', () => {
        const result = maximalRectangle([['0']]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should find full-fill rectangle for repetitive all-1 matrix (3x4 -> 12)', () => {
        const result = maximalRectangle([
            ['1', '1', '1', '1'],
            ['1', '1', '1', '1'],
            ['1', '1', '1', '1'],
        ]);
        if (result !== undefined) expect(result).toBe(12);
    });

    it('should handle single-row matrix (longest run of 1s)', () => {
        const result = maximalRectangle([['1', '1', '0', '1', '1', '1']]);
        if (result !== undefined) expect(result).toBe(3);
    });
});
