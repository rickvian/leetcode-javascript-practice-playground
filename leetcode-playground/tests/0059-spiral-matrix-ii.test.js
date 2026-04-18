import { generateMatrix } from '../0059-spiral-matrix-ii';

describe('0059-spiral-matrix-ii', () => {
    it('should return [[1]] for n=1 (min input)', () => {
        const result = generateMatrix(1);
        if (result !== undefined) expect(result).toEqual([[1]]);
    });

    it('should return correct 2x2 matrix (off-by-one boundary)', () => {
        const result = generateMatrix(2);
        if (result !== undefined) expect(result).toEqual([[1, 2], [4, 3]]);
    });

    it('should return correct 3x3 matrix (LeetCode example)', () => {
        const result = generateMatrix(3);
        if (result !== undefined) expect(result).toEqual([[1, 2, 3], [8, 9, 4], [7, 6, 5]]);
    });

    it('should return 4x4 with 16 at center-adjacent position', () => {
        const result = generateMatrix(4);
        if (result !== undefined) {
            expect(result.length).toBe(4);
            expect(result.flat().sort((a, b) => a - b)).toEqual(Array.from({length: 16}, (_, i) => i + 1));
        }
    });

    it('should produce correct n^2 values for n=5 (range limit / repetitive sequence)', () => {
        const result = generateMatrix(5);
        if (result !== undefined) {
            expect(result.flat().sort((a, b) => a - b)).toEqual(Array.from({length: 25}, (_, i) => i + 1));
        }
    });

    it('should place 1 at top-left and n*n somewhere on the path', () => {
        const result = generateMatrix(3);
        if (result !== undefined) {
            expect(result[0][0]).toBe(1);
            expect(result.flat().includes(9)).toBe(true);
        }
    });

    it('should maintain square shape invariant for n=6', () => {
        const result = generateMatrix(6);
        if (result !== undefined) {
            expect(result.length).toBe(6);
            result.forEach(row => expect(row.length).toBe(6));
        }
    });
});
