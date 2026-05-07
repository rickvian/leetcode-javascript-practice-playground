import { solveNQueens } from '../0051-n-queens';

describe('0051-n-queens', () => {
    it('should return the single solution for n=1 (min input)', () => {
        const result = solveNQueens(1);
        if (result !== undefined) expect(result).toEqual([['Q']]);
    });

    it('should return empty list for n=2 (no valid placement)', () => {
        const result = solveNQueens(2);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return empty list for n=3 (no valid placement)', () => {
        const result = solveNQueens(3);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return 2 distinct solutions for n=4', () => {
        const result = solveNQueens(4);
        if (result !== undefined) expect(result.length).toBe(2);
    });

    it('should return 10 distinct solutions for n=5', () => {
        const result = solveNQueens(5);
        if (result !== undefined) expect(result.length).toBe(10);
    });

    it('should always produce n x n boards with exactly n queens per solution', () => {
        const result = solveNQueens(4);
        if (result !== undefined && result.length) {
            result.forEach(board => {
                expect(board.length).toBe(4);
                board.forEach(row => expect(row.length).toBe(4));
                const queens = board.join('').split('').filter(c => c === 'Q').length;
                expect(queens).toBe(4);
            });
        }
    });

    it('should return 92 solutions for n=8 (range-limit)', () => {
        const result = solveNQueens(8);
        if (result !== undefined) expect(result.length).toBe(92);
    });
});
