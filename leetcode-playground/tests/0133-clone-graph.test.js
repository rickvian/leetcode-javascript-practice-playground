import { cloneGraph, Node } from '../0133-clone-graph';

function buildGraph(adjList) {
    if (!adjList || adjList.length === 0) return null;
    const nodes = adjList.map((_, i) => new Node(i + 1));
    for (let i = 0; i < adjList.length; i++) {
        nodes[i].neighbors = adjList[i].map(j => nodes[j - 1]);
    }
    return nodes[0];
}

function graphToAdjList(node) {
    if (!node) return [];
    const visited = new Map();
    const result = [];
    const queue = [node];
    visited.set(node.val, node);
    while (queue.length > 0) {
        const curr = queue.shift();
        result.push(curr.neighbors.map(n => n.val).sort((a, b) => a - b));
        for (const neighbor of curr.neighbors) {
            if (!visited.has(neighbor.val)) {
                visited.set(neighbor.val, neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}

describe('0133-clone-graph', () => {
    it('should clone a graph with 4 nodes', () => {
        const graph = buildGraph([[2, 4], [1, 3], [2, 4], [1, 3]]);
        const clone = cloneGraph(graph);
        expect(clone).not.toBe(graph);
        expect(clone.val).toBe(graph.val);
        expect(clone.neighbors.length).toBe(graph.neighbors.length);
    });

    it('should return null for null input', () => {
        expect(cloneGraph(null)).toBeNull();
    });

    it('should clone a single node with no neighbors', () => {
        const node = new Node(1);
        const clone = cloneGraph(node);
        expect(clone).not.toBe(node);
        expect(clone.val).toBe(1);
        expect(clone.neighbors).toEqual([]);
    });

    it('should create deep copy (not same references)', () => {
        const graph = buildGraph([[2], [1]]);
        const clone = cloneGraph(graph);
        expect(clone).not.toBe(graph);
        expect(clone.neighbors[0]).not.toBe(graph.neighbors[0]);
    });

    it('should preserve graph structure', () => {
        const graph = buildGraph([[2, 4], [1, 3], [2, 4], [1, 3]]);
        const clone = cloneGraph(graph);
        const origAdj = graphToAdjList(graph);
        const cloneAdj = graphToAdjList(clone);
        expect(cloneAdj).toEqual(origAdj);
    });
});
