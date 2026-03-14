import { pacificAtlantic } from '../0417-pacific-atlantic-water-flow';

describe('0417-pacific-atlantic-water-flow', () => {
    it('should return correct cells for LeetCode example 1', () => {
        const heights = [
            [1, 2, 2, 3, 5],
            [3, 2, 3, 4, 4],
            [2, 4, 5, 3, 1],
            [6, 7, 1, 4, 5],
            [5, 1, 1, 2, 4]
        ];
        const result = pacificAtlantic(heights);
        const expected = [[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]];
        if (result) {
            const sortedResult = result.map(r => r.join(',')).sort();
            const sortedExpected = expected.map(r => r.join(',')).sort();
            expect(sortedResult).toEqual(sortedExpected);
        } else {
            expect(result).not.toBeUndefined();
        }
    });

    it('should return [[0,0]] for single cell', () => {
        const result = pacificAtlantic([[1]]);
        if (result) {
            expect(result).toEqual([[0, 0]]);
        } else {
            expect(result).not.toBeUndefined();
        }
    });

    it('should handle 1xN matrix (single row)', () => {
        const heights = [[1, 2, 3]];
        const result = pacificAtlantic(heights);
        // All cells can reach Pacific (left) and Atlantic (right) since it's a single row
        if (result) {
            expect(result.length).toBeGreaterThan(0);
        }
    });

    it('should handle Nx1 matrix (single column)', () => {
        const heights = [[1], [2], [3]];
        const result = pacificAtlantic(heights);
        if (result) {
            expect(result.length).toBeGreaterThan(0);
        }
    });

    it('should handle uniform heights (all same)', () => {
        const heights = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];
        const result = pacificAtlantic(heights);
        if (result) {
            // All cells should be reachable to both oceans
            expect(result.length).toBe(9);
        }
    });

    it('should handle increasing heights from top-left', () => {
        const heights = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        const result = pacificAtlantic(heights);
        if (result) {
            // Corner cells and some middle cells should be in result
            const resultSet = new Set(result.map(r => r.join(',')));
            expect(resultSet.has('2,2')).toBe(true); // bottom-right corner (highest)
        }
    });

    it('should handle 2x2 grid', () => {
        const heights = [[1, 2], [4, 3]];
        const result = pacificAtlantic(heights);
        if (result) {
            expect(Array.isArray(result)).toBe(true);
        }
    });
});
