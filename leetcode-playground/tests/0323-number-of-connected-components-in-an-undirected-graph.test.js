import { countComponents } from '../0323-number-of-connected-components-in-an-undirected-graph';

describe('0323-number-of-connected-components-in-an-undirected-graph', () => {
    it('should return 2 for LeetCode example 1', () => {
        expect(countComponents(5, [[0, 1], [1, 2], [3, 4]])).toBe(2);
    });

    it('should return 1 for LeetCode example 2', () => {
        expect(countComponents(5, [[0, 1], [1, 2], [2, 3], [3, 4]])).toBe(1);
    });

    it('should return n when no edges', () => {
        expect(countComponents(5, [])).toBe(5);
    });

    it('should return 1 when fully connected', () => {
        expect(countComponents(4, [[0, 1], [1, 2], [2, 3], [0, 3]])).toBe(1);
    });

    it('should handle single node', () => {
        expect(countComponents(1, [])).toBe(1);
    });

    it('should handle two disconnected nodes', () => {
        expect(countComponents(2, [])).toBe(2);
    });

    it('should handle two connected nodes', () => {
        expect(countComponents(2, [[0, 1]])).toBe(1);
    });

    it('should handle three separate components', () => {
        expect(countComponents(6, [[0, 1], [2, 3], [4, 5]])).toBe(3);
    });

    it('should handle star graph', () => {
        expect(countComponents(5, [[0, 1], [0, 2], [0, 3], [0, 4]])).toBe(1);
    });

    it('should handle isolated nodes with some connected', () => {
        expect(countComponents(6, [[0, 1], [2, 3]])).toBe(4);
    });
});
