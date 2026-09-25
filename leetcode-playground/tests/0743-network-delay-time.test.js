import { networkDelayTime } from '../0743-network-delay-time';

describe('0743-network-delay-time', () => {
    // Official examples
    it('should return 2 for example 1 (chain from node 2)', () => {
        expect(networkDelayTime([[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2)).toBe(2);
    });

    it('should return 1 for example 2 (single edge)', () => {
        expect(networkDelayTime([[1, 2, 1]], 2, 1)).toBe(1);
    });

    it('should return -1 for example 3 (unreachable node)', () => {
        expect(networkDelayTime([[1, 2, 1]], 2, 2)).toBe(-1);
    });

    // Single node with no edges — signal already received
    it('should return 0 for single node with no edges', () => {
        expect(networkDelayTime([], 1, 1)).toBe(0);
    });

    // Disconnected graph — node 3 unreachable
    it('should return -1 for disconnected graph', () => {
        expect(networkDelayTime([[1, 2, 1]], 3, 1)).toBe(-1);
    });

    // Graph with a cycle — bellman-ford terminates correctly
    it('should return 3 for graph with cycle', () => {
        expect(networkDelayTime([[1, 2, 1], [2, 3, 2], [3, 1, 3]], 3, 1)).toBe(3);
    });

    // Shortest path beats direct edge
    it('should return 2 when relay path is faster than direct edge', () => {
        expect(networkDelayTime([[1, 2, 1], [2, 3, 1], [1, 3, 5]], 3, 1)).toBe(2);
    });

    // Multiple targets, last arrival determines result
    it('should return 3 when node 3 receives signal via node 2', () => {
        expect(networkDelayTime([[1, 2, 1], [1, 3, 4], [2, 3, 2]], 3, 1)).toBe(3);
    });

    // Zero-weight edge
    it('should return 0 for zero-weight edge', () => {
        expect(networkDelayTime([[1, 2, 0]], 2, 1)).toBe(0);
    });

    // Long chain — time accumulates across all hops
    it('should return 4 for chain of 5 nodes', () => {
        expect(networkDelayTime([[1, 2, 1], [2, 3, 1], [3, 4, 1], [4, 5, 1]], 5, 1)).toBe(4);
    });
});