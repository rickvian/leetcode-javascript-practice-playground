import { rotate } from '../0048-rotate-image';

describe('0048-rotate-image', () => {
    it('should rotate a 1x1 matrix (no-op)', () => {
        const matrix = [[42]];
        rotate(matrix);
        expect(matrix).toEqual([[42]]);
    });

    it('should rotate a 2x2 matrix 90 degrees clockwise', () => {
        const matrix = [[1, 2], [3, 4]];
        rotate(matrix);
        expect(matrix).toEqual([[3, 1], [4, 2]]);
    });

    it('should rotate a 3x3 matrix 90 degrees clockwise', () => {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        rotate(matrix);
        expect(matrix).toEqual([[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
    });

    it('should rotate a 4x4 matrix 90 degrees clockwise', () => {
        const matrix = [
            [5, 1, 9, 11],
            [2, 4, 8, 10],
            [13, 3, 6, 7],
            [15, 14, 12, 16]
        ];
        rotate(matrix);
        expect(matrix).toEqual([[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]);
    });

    it('should rotate a 5x5 matrix 90 degrees clockwise', () => {
        const matrix = [
            [1,  2,  3,  4,  5],
            [6,  7,  8,  9, 10],
            [11, 12, 13, 14, 15],
            [16, 17, 18, 19, 20],
            [21, 22, 23, 24, 25]
        ];
        rotate(matrix);
        expect(matrix).toEqual([
            [21, 16, 11, 6, 1],
            [22, 17, 12, 7, 2],
            [23, 18, 13, 8, 3],
            [24, 19, 14, 9, 4],
            [25, 20, 15, 10, 5]
        ]);
    });

    it('should handle a matrix with all identical values', () => {
        const matrix = [[7, 7], [7, 7]];
        rotate(matrix);
        expect(matrix).toEqual([[7, 7], [7, 7]]);
    });

    it('should handle a matrix with negative values', () => {
        const matrix = [[-1, -2, -3], [-4, -5, -6], [-7, -8, -9]];
        rotate(matrix);
        expect(matrix).toEqual([[-7, -4, -1], [-8, -5, -2], [-9, -6, -3]]);
    });

    it('should handle a matrix with zeros', () => {
        const matrix = [[0, 0], [0, 0]];
        rotate(matrix);
        expect(matrix).toEqual([[0, 0], [0, 0]]);
    });

    it('should handle mixed positive and negative values', () => {
        const matrix = [[1, -2], [-3, 4]];
        rotate(matrix);
        expect(matrix).toEqual([[-3, 1], [4, -2]]);
    });

    it('should mutate the matrix in-place (same object reference)', () => {
        const matrix = [[1, 2], [3, 4]];
        const ref = matrix;
        rotate(matrix);
        expect(matrix).toBe(ref);
    });

    it('rotating 4 times should return the original matrix', () => {
        const original = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        rotate(matrix);
        rotate(matrix);
        rotate(matrix);
        rotate(matrix);
        expect(matrix).toEqual(original);
    });

    it('should handle a matrix with large values (near constraint limits)', () => {
        const matrix = [[1000, -1000], [-1000, 1000]];
        rotate(matrix);
        expect(matrix).toEqual([[-1000, 1000], [1000, -1000]]);
    });
});
