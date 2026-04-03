import { searchMatrix } from '../0074-search-a-2d-matrix';
import { describe, it, expect } from '@jest/globals';

describe('0074-search-a-2d-matrix', () => {
    it('should return true when target exists in matrix', () => {
        const matrix = [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30]
        ];
        expect(searchMatrix(matrix, 5)).toBe(true);
    });

    it('should return false when target does not exist in matrix', () => {
        const matrix = [
            [1, 4, 7, 11, 15],
            [2, 5, 8, 12, 19],
            [3, 6, 9, 16, 22],
            [10, 13, 14, 17, 24],
            [18, 21, 23, 26, 30]
        ];
        expect(searchMatrix(matrix, 20)).toBe(false);
    });

    it('should find target at top-left corner', () => {
        const matrix = [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ];
        expect(searchMatrix(matrix, 1)).toBe(true);
    });

    it('should find target at bottom-right corner', () => {
        const matrix = [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ];
        expect(searchMatrix(matrix, 9)).toBe(true);
    });

    it('should find target at bottom-left corner', () => {
        const matrix = [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ];
        expect(searchMatrix(matrix, 3)).toBe(true);
    });

    it('should find target at top-right corner', () => {
        const matrix = [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
        ];
        expect(searchMatrix(matrix, 7)).toBe(true);
    });

    it('should handle single element matrix with target found', () => {
        const matrix = [[5]];
        expect(searchMatrix(matrix, 5)).toBe(true);
    });

    it('should handle single element matrix with target not found', () => {
        const matrix = [[5]];
        expect(searchMatrix(matrix, 3)).toBe(false);
    });

    it('should return false for empty matrix', () => {
        const matrix = [];
        expect(searchMatrix(matrix, 1)).toBe(false);
    });

    it('should return false for matrix with empty rows', () => {
        const matrix = [[]];
        expect(searchMatrix(matrix, 1)).toBe(false);
    });

    it('should return false when target is smaller than all elements', () => {
        const matrix = [
            [5, 8, 10],
            [6, 9, 11],
            [7, 10, 12]
        ];
        expect(searchMatrix(matrix, 1)).toBe(false);
    });

    it('should return false when target is larger than all elements', () => {
        const matrix = [
            [5, 8, 10],
            [6, 9, 11],
            [7, 10, 12]
        ];
        expect(searchMatrix(matrix, 20)).toBe(false);
    });

    it('should handle matrix with single row', () => {
        const matrix = [[1, 3, 5, 7, 9]];
        expect(searchMatrix(matrix, 5)).toBe(true);
    });

    it('should handle matrix with single column', () => {
        const matrix = [[1], [3], [5], [7], [9]];
        expect(searchMatrix(matrix, 5)).toBe(true);
    });

    it('should find target in larger matrix', () => {
        const matrix = [
            [1, 4, 7, 11, 15, 18, 21],
            [2, 5, 8, 12, 19, 22, 25],
            [3, 6, 9, 16, 23, 26, 29],
            [10, 13, 14, 17, 24, 27, 30],
            [18, 21, 23, 26, 31, 32, 33]
        ];
        expect(searchMatrix(matrix, 26)).toBe(true);
    });

    it('should return false when target is not in larger matrix', () => {
        const matrix = [
            [1, 4, 7, 11, 15, 18, 21],
            [2, 5, 8, 12, 19, 22, 25],
            [3, 6, 9, 16, 23, 26, 29],
            [10, 13, 14, 17, 24, 27, 30],
            [18, 21, 23, 26, 31, 32, 33]
        ];
        expect(searchMatrix(matrix, 100)).toBe(false);
    });
});
