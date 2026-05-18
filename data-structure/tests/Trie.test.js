import { Trie } from '../Trie.js';

describe('Trie', () => {
    it('starts empty — search and startsWith both false', () => {
        const t = new Trie();
        expect(t.search('a')).toBe(false);
        expect(t.startsWith('a')).toBe(false);
    });

    it('insert + exact search', () => {
        const t = new Trie();
        t.insert('cat');
        expect(t.search('cat')).toBe(true);
        expect(t.search('ca')).toBe(false);   // prefix only — not a word
        expect(t.search('cats')).toBe(false); // not inserted
    });

    it('startsWith matches any inserted prefix path', () => {
        const t = new Trie();
        t.insert('apple');
        expect(t.startsWith('app')).toBe(true);
        expect(t.startsWith('apple')).toBe(true);
        expect(t.startsWith('apples')).toBe(false);
        expect(t.startsWith('b')).toBe(false);
    });

    it('handles overlapping words sharing prefixes', () => {
        const t = new Trie();
        t.insert('car');
        t.insert('cars');
        t.insert('cat');
        expect(t.search('car')).toBe(true);
        expect(t.search('cars')).toBe(true);
        expect(t.search('cat')).toBe(true);
        expect(t.search('ca')).toBe(false);
        expect(t.startsWith('ca')).toBe(true);
    });

    it('handles empty string', () => {
        const t = new Trie();
        t.insert('');
        expect(t.search('')).toBe(true);
        expect(t.startsWith('')).toBe(true);
    });

    it('handles unicode characters', () => {
        const t = new Trie();
        t.insert('café');
        t.insert('日本');
        expect(t.search('café')).toBe(true);
        expect(t.search('日本')).toBe(true);
        expect(t.startsWith('日')).toBe(true);
    });
});
