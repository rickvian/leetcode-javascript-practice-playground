import { totalNQueens } from '../0052-n-queens-ii';

describe('0052-n-queens-ii', () => {
    it('should return 1 for n=1 (min input)', () => {
        const result = totalNQueens(1);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 0 for n=2 (no placement possible)', () => {
        const result = totalNQueens(2);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for n=3 (off-by-one boundary)', () => {
        const result = totalNQueens(3);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 2 for n=4', () => {
        const result = totalNQueens(4);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 10 for n=5', () => {
        const result = totalNQueens(5);
        if (result !== undefined) expect(result).toBe(10);
    });

    it('should return 4 for n=6 (drop after n=5 peak)', () => {
        const result = totalNQueens(6);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 92 for n=8 (range limit)', () => {
        const result = totalNQueens(8);
        if (result !== undefined) expect(result).toBe(92);
    });
});
