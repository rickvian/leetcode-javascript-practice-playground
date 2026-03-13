import { spiralOrder } from '../0054-spiral-matrix';

describe('0054-spiral-matrix', () => {
    it('should traverse a 3x3 matrix in spiral order', () => {
        const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    it('should traverse a 3x4 matrix in spiral order', () => {
        const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
    });

    it('should handle a single row matrix', () => {
        const matrix = [[1, 2, 3]];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3]);
    });
});
