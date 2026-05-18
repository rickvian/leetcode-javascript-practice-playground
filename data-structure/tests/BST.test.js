import { BST } from '../BST.js';

describe('BST', () => {
    it('starts empty', () => {
        const t = new BST();
        expect(t.size()).toBe(0);
        expect(t.inOrder()).toEqual([]);
        expect(t.search(1)).toBe(false);
    });

    it('insert + search', () => {
        const t = new BST();
        [5, 3, 8, 1, 4, 9].forEach(v => t.insert(v));
        expect(t.search(4)).toBe(true);
        expect(t.search(7)).toBe(false);
        expect(t.size()).toBe(6);
    });

    it('inOrder yields sorted values', () => {
        const t = new BST();
        [5, 3, 8, 1, 4, 9, 7].forEach(v => t.insert(v));
        expect(t.inOrder()).toEqual([1, 3, 4, 5, 7, 8, 9]);
    });

    it('duplicates are ignored', () => {
        const t = new BST();
        t.insert(1); t.insert(1); t.insert(1);
        expect(t.size()).toBe(1);
    });

    it('delete leaf', () => {
        const t = new BST();
        [5, 3, 8].forEach(v => t.insert(v));
        expect(t.delete(3)).toBe(true);
        expect(t.search(3)).toBe(false);
        expect(t.inOrder()).toEqual([5, 8]);
    });

    it('delete node with one child', () => {
        const t = new BST();
        [5, 3, 8, 9].forEach(v => t.insert(v));
        t.delete(8);                       // 8 has only a right child (9)
        expect(t.inOrder()).toEqual([3, 5, 9]);
    });

    it('delete node with two children — uses in-order successor', () => {
        const t = new BST();
        [5, 3, 8, 1, 4, 7, 9].forEach(v => t.insert(v));
        t.delete(5);                       // root with two children
        expect(t.search(5)).toBe(false);
        expect(t.inOrder()).toEqual([1, 3, 4, 7, 8, 9]);
    });

    it('delete on missing value returns false', () => {
        const t = new BST();
        t.insert(1);
        expect(t.delete(99)).toBe(false);
        expect(t.size()).toBe(1);
    });

    it('handles skewed insert (worst case structure)', () => {
        const t = new BST();
        for (let i = 0; i < 50; i++) t.insert(i);
        expect(t.inOrder()).toEqual(Array.from({ length: 50 }, (_, i) => i));
    });
});
