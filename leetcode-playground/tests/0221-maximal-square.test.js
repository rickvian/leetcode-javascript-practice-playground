import { maximalSquare } from '../0221-maximal-square';

describe('0221-maximal-square', () => {
    it('should return 4 for standard matrix', () => {
        const matrix = [
            ['1', '0', '1', '0', '0'],
            ['1', '0', '1', '1', '1'],
            ['1', '1', '1', '1', '1'],
            ['1', '0', '0', '1', '0'],
        ];
        expect(maximalSquare(matrix)).toBe(4);
    });

    it('should return 0 for matrix with only zeros', () => {
        expect(maximalSquare([['0', '0'], ['0', '0']])).toBe(0);
    });

    it('should return 1 for matrix with single 1', () => {
        expect(maximalSquare([['1']])).toBe(1);
    });

    it('should return 0 for matrix with single 0', () => {
        expect(maximalSquare([['0']])).toBe(0);
    });

    it('should return 1 for row of all 1s', () => {
        expect(maximalSquare([['1', '1', '1', '1']])).toBe(1);
    });

    it('should return 4 for 2x2 all 1s', () => {
        expect(maximalSquare([['1', '1'], ['1', '1']])).toBe(4);
    });

    it('should return 9 for 3x3 all 1s', () => {
        const matrix = [['1', '1', '1'], ['1', '1', '1'], ['1', '1', '1']];
        expect(maximalSquare(matrix)).toBe(9);
    });

    it('should return 1 for checkerboard pattern', () => {
        const matrix = [['1', '0', '1'], ['0', '1', '0'], ['1', '0', '1']];
        expect(maximalSquare(matrix)).toBe(1);
    });

    it('should handle matrix with a large square in the corner', () => {
        const matrix = [
            ['1', '1', '0'],
            ['1', '1', '0'],
            ['0', '0', '0'],
        ];
        expect(maximalSquare(matrix)).toBe(4);
    });

    it('should handle tall matrix (single column)', () => {
        const matrix = [['1'], ['1'], ['1']];
        expect(maximalSquare(matrix)).toBe(1);
    });
});
