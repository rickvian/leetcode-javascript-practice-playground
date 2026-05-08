import { Graph } from '../Graph.js';

describe('Graph (undirected)', () => {
    it('addEdge auto-creates nodes on both ends', () => {
        const g = new Graph();
        g.addEdge('A', 'B');
        expect(g.hasNode('A')).toBe(true);
        expect(g.hasNode('B')).toBe(true);
        expect(g.hasEdge('A', 'B')).toBe(true);
        expect(g.hasEdge('B', 'A')).toBe(true); // undirected → both directions
    });

    it('addEdge is idempotent — duplicate edges collapse', () => {
        const g = new Graph();
        g.addEdge('A', 'B');
        g.addEdge('A', 'B');
        expect([...g.neighbors('A')]).toEqual(['B']);
    });

    it('removeEdge clears both directions for undirected', () => {
        const g = new Graph();
        g.addEdge('A', 'B');
        g.removeEdge('A', 'B');
        expect(g.hasEdge('A', 'B')).toBe(false);
        expect(g.hasEdge('B', 'A')).toBe(false);
    });

    it('removeNode strips all references', () => {
        const g = new Graph();
        g.addEdge('A', 'B'); g.addEdge('A', 'C'); g.addEdge('B', 'C');
        g.removeNode('A');
        expect(g.hasNode('A')).toBe(false);
        expect(g.hasEdge('B', 'A')).toBe(false);
        expect(g.hasEdge('C', 'A')).toBe(false);
    });

    it('bfs returns level-order from start', () => {
        const g = new Graph();
        // A - B - C
        // |       |
        // D - E - F
        g.addEdge('A', 'B'); g.addEdge('B', 'C');
        g.addEdge('A', 'D'); g.addEdge('D', 'E');
        g.addEdge('E', 'F'); g.addEdge('C', 'F');
        const order = g.bfs('A');
        expect(order[0]).toBe('A');
        expect(order.length).toBe(6);
        // A appears before its neighbors, all distance-1 nodes before distance-2
        expect(order.indexOf('A')).toBeLessThan(order.indexOf('B'));
        expect(order.indexOf('A')).toBeLessThan(order.indexOf('D'));
    });

    it('dfs visits every reachable node', () => {
        const g = new Graph();
        g.addEdge('A', 'B'); g.addEdge('A', 'C'); g.addEdge('B', 'D');
        const order = g.dfs('A');
        expect(order.sort()).toEqual(['A', 'B', 'C', 'D']);
    });

    it('bfs/dfs on disconnected node returns just that node', () => {
        const g = new Graph();
        g.addNode('X');
        expect(g.bfs('X')).toEqual(['X']);
        expect(g.dfs('X')).toEqual(['X']);
    });
});

describe('Graph (directed)', () => {
    it('addEdge only inserts one direction', () => {
        const g = new Graph({ directed: true });
        g.addEdge('A', 'B');
        expect(g.hasEdge('A', 'B')).toBe(true);
        expect(g.hasEdge('B', 'A')).toBe(false);
    });

    it('bfs respects edge direction', () => {
        const g = new Graph({ directed: true });
        g.addEdge('A', 'B');
        g.addEdge('B', 'C');
        expect(g.bfs('A')).toEqual(['A', 'B', 'C']);
        expect(g.bfs('C')).toEqual(['C']); // C has no outgoing edges
    });
});
