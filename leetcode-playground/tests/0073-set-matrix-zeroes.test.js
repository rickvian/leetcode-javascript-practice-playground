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

    it('should handle interior zero with first row having zero but first column having no zero', () => {
        // [0][1] = 0 (first row has zero), [2][2] = 0 (interior zero), first col = all non-zero
        const matrix = [[1, 0, 1], [1, 1, 1], [1, 1, 0]];
        setZeroes(matrix);
        // row 0 zeroed (firstRowHasZero), col 1 zeroed, row 2 zeroed, col 2 zeroed
        expect(matrix).toEqual([[0, 0, 0], [1, 0, 0], [0, 0, 0]]);
    });
});
