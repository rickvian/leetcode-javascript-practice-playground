import { totalNQueens } from '../0052-n-queens-ii';

describe('0052-n-queens-ii', () => {
    it('should return 1 for n=1', () => {
        expect(totalNQueens(1)).toBe(1);
    });

    it('should return 0 for n=2 (official example)', () => {
        expect(totalNQueens(2)).toBe(0);
    });

    it('should return 0 for n=3', () => {
        expect(totalNQueens(3)).toBe(0);
    });

    it('should return 2 for n=4 (official example)', () => {
        expect(totalNQueens(4)).toBe(2);
    });

    it('should return 10 for n=5', () => {
        expect(totalNQueens(5)).toBe(10);
    });

    it('should return 4 for n=6', () => {
        expect(totalNQueens(6)).toBe(4);
    });

    it('should return 40 for n=7', () => {
        expect(totalNQueens(7)).toBe(40);
    });

    it('should return 92 for n=8', () => {
        expect(totalNQueens(8)).toBe(92);
    });
});
