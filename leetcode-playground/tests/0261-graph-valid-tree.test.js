import { validTree } from '../0261-graph-valid-tree';

describe('0261-graph-valid-tree', () => {
    it('should return true for n=5, edges=[[0,1],[0,2],[0,3],[1,4]]', () => {
        expect(validTree(5, [[0, 1], [0, 2], [0, 3], [1, 4]])).toBe(true);
    });

    it('should return false for n=5, edges=[[0,1],[1,2],[2,3],[1,3],[1,4]] (cycle)', () => {
        expect(validTree(5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]])).toBe(false);
    });

    it('should return true for single node with no edges', () => {
        expect(validTree(1, [])).toBe(true);
    });

    it('should return false for disconnected graph', () => {
        expect(validTree(4, [[0, 1], [2, 3]])).toBe(false);
    });

    it('should return false when n=2 and no edges (disconnected)', () => {
        expect(validTree(2, [])).toBe(false);
    });

    it('should return true for n=2, edges=[[0,1]]', () => {
        expect(validTree(2, [[0, 1]])).toBe(true);
    });

    it('should return false when edges form a cycle', () => {
        expect(validTree(3, [[0, 1], [1, 2], [2, 0]])).toBe(false);
    });

    it('should return false for too many edges (n nodes need exactly n-1 edges)', () => {
        expect(validTree(4, [[0, 1], [0, 2], [0, 3], [1, 2]])).toBe(false);
    });
});
