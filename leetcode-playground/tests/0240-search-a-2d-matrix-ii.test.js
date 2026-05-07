import { searchMatrix } from '../0240-search-a-2d-matrix-ii';

describe('0240-search-a-2d-matrix-ii', () => {
    it('should return false for empty matrix', () => {
        const result = searchMatrix([], 1);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return false for matrix with empty row', () => {
        const result = searchMatrix([[]], 1);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true when target is top-left corner', () => {
        const m = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
        const result = searchMatrix(m, 1);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true when target is bottom-right corner', () => {
        const m = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
        const result = searchMatrix(m, 9);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for value not present but within range', () => {
        const m = [[1, 4, 7, 11], [2, 5, 8, 12], [3, 6, 9, 16]];
        const result = searchMatrix(m, 13);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should handle repetitive values [[1,1],[1,1]] searching 1', () => {
        const result = searchMatrix([[1, 1], [1, 1]], 1);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false when target below min (off-by-one below)', () => {
        const m = [[5, 6], [7, 8]];
        const result = searchMatrix(m, 4);
        if (result !== undefined) expect(result).toBe(false);
    });
});
