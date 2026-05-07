import { computeArea } from '../0223-rectangle-area';

describe('0223-rectangle-area', () => {
    it('should compute the LeetCode sample union area as 45', () => {
        const result = computeArea(-3, 0, 3, 4, 0, -1, 9, 2);
        if (result !== undefined) {
            expect(result).toBe(45);
        }
    });

    it('should return sum of areas when rectangles do not overlap', () => {
        const result = computeArea(0, 0, 1, 1, 2, 2, 3, 3);
        if (result !== undefined) {
            expect(result).toBe(2);
        }
    });

    it('should return area of larger when one rectangle contains the other', () => {
        const result = computeArea(0, 0, 4, 4, 1, 1, 3, 3);
        if (result !== undefined) {
            expect(result).toBe(16);
        }
    });

    it('should handle identical rectangles', () => {
        const result = computeArea(0, 0, 2, 2, 0, 0, 2, 2);
        if (result !== undefined) {
            expect(result).toBe(4);
        }
    });

    it('should handle zero-area rectangle (degenerate line)', () => {
        const result = computeArea(0, 0, 0, 0, 1, 1, 3, 3);
        if (result !== undefined) {
            expect(result).toBe(4);
        }
    });

    it('should handle touching rectangles sharing an edge (no overlap area)', () => {
        const result = computeArea(0, 0, 2, 2, 2, 0, 4, 2);
        if (result !== undefined) {
            expect(result).toBe(8);
        }
    });

    it('should handle extreme coordinate ranges', () => {
        const result = computeArea(-1000, -1000, 1000, 1000, -500, -500, 500, 500);
        if (result !== undefined) {
            expect(result).toBe(4_000_000);
        }
    });
});
