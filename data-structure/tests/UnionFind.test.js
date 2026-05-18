import { UnionFind } from '../UnionFind.js';

describe('UnionFind', () => {
    it('starts with n disjoint singletons', () => {
        const uf = new UnionFind(5);
        expect(uf.count()).toBe(5);
        for (let i = 0; i < 5; i++) expect(uf.find(i)).toBe(i);
    });

    it('union merges groups and decrements count', () => {
        const uf = new UnionFind(5);
        expect(uf.union(0, 1)).toBe(true);
        expect(uf.union(2, 3)).toBe(true);
        expect(uf.count()).toBe(3); // {0,1}, {2,3}, {4}
    });

    it('union of already-connected returns false', () => {
        const uf = new UnionFind(3);
        uf.union(0, 1);
        expect(uf.union(0, 1)).toBe(false);
        expect(uf.count()).toBe(2);
    });

    it('connected reflects transitive closure', () => {
        const uf = new UnionFind(4);
        uf.union(0, 1);
        uf.union(1, 2);
        expect(uf.connected(0, 2)).toBe(true);
        expect(uf.connected(0, 3)).toBe(false);
    });

    it('handles long chain with path compression', () => {
        const uf = new UnionFind(1000);
        for (let i = 1; i < 1000; i++) uf.union(i - 1, i);
        expect(uf.count()).toBe(1);
        for (let i = 0; i < 1000; i++) expect(uf.connected(0, i)).toBe(true);
    });

    it('models number-of-islands style merging', () => {
        // edges: (0,1) (1,2) (3,4) — leaves groups {0,1,2}, {3,4}, {5}
        const uf = new UnionFind(6);
        uf.union(0, 1); uf.union(1, 2); uf.union(3, 4);
        expect(uf.count()).toBe(3);
        expect(uf.connected(0, 2)).toBe(true);
        expect(uf.connected(2, 3)).toBe(false);
    });
});
