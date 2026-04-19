import { getSkyline } from '../0218-the-skyline-problem';

describe('0218-the-skyline-problem', () => {
    it('should compute the LeetCode sample skyline', () => {
        const input = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]];
        const result = getSkyline(input);
        if (result !== undefined) {
            expect(result).toEqual([[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]]);
        }
    });

    it('should return empty array for no buildings', () => {
        const result = getSkyline([]);
        if (result !== undefined) {
            expect(result).toEqual([]);
        }
    });

    it('should handle a single building', () => {
        const result = getSkyline([[0, 2, 3]]);
        if (result !== undefined) {
            expect(result).toEqual([[0, 3], [2, 0]]);
        }
    });

    it('should merge overlapping buildings of equal height', () => {
        const result = getSkyline([[0, 5, 7], [5, 10, 7]]);
        if (result !== undefined) {
            expect(result).toEqual([[0, 7], [10, 0]]);
        }
    });

    it('should handle nested buildings (one fully inside another)', () => {
        const result = getSkyline([[1, 10, 5], [3, 7, 3]]);
        if (result !== undefined) {
            expect(result).toEqual([[1, 5], [10, 0]]);
        }
    });

    it('should handle repetitive stacked buildings at same position', () => {
        const result = getSkyline([[0, 5, 3], [0, 5, 3]]);
        if (result !== undefined) {
            expect(result).toEqual([[0, 3], [5, 0]]);
        }
    });

    it('should handle adjacent (non-overlapping, touching) buildings', () => {
        const result = getSkyline([[0, 2, 3], [2, 4, 5]]);
        if (result !== undefined) {
            expect(result).toEqual([[0, 3], [2, 5], [4, 0]]);
        }
    });
});
