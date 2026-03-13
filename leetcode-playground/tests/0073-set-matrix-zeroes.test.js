import { setZeroes } from '../0073-set-matrix-zeroes';

describe('0073-set-matrix-zeroes', () => {
    it('should set entire row and column to zero when encountering a zero', () => {
        const matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
        setZeroes(matrix);
        expect(matrix).toEqual([[1, 0, 1], [0, 0, 0], [1, 0, 1]]);
    });

    it('should handle multiple zeros in the matrix', () => {
        const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
        setZeroes(matrix);
        expect(matrix).toEqual([[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]);
    });

    it('should handle a 1x1 matrix with zero', () => {
        const matrix = [[0]];
        setZeroes(matrix);
        expect(matrix).toEqual([[0]]);
    });
});
