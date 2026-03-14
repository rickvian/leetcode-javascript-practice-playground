import { Trie } from '../0208-implement-trie';

describe('0208-implement-trie', () => {
    it('should insert and search for a word', () => {
        const trie = new Trie();
        trie.insert('apple');
        expect(trie.search('apple')).toBe(true);
    });

    it('should return false for word not inserted', () => {
        const trie = new Trie();
        trie.insert('apple');
        expect(trie.search('app')).toBe(false);
    });

    it('should return true for startsWith with existing prefix', () => {
        const trie = new Trie();
        trie.insert('apple');
        expect(trie.startsWith('app')).toBe(true);
    });

    it('should return false for startsWith with non-existing prefix', () => {
        const trie = new Trie();
        trie.insert('apple');
        expect(trie.startsWith('banana')).toBe(false);
    });

    it('should support multiple inserts and searches', () => {
        const trie = new Trie();
        trie.insert('apple');
        trie.insert('app');
        expect(trie.search('app')).toBe(true);
        expect(trie.search('apple')).toBe(true);
        expect(trie.startsWith('ap')).toBe(true);
    });

    it('should return false for empty search on non-empty trie', () => {
        const trie = new Trie();
        trie.insert('hello');
        expect(trie.search('world')).toBe(false);
    });

    it('should handle search after inserting multiple words', () => {
        const trie = new Trie();
        trie.insert('cat');
        trie.insert('car');
        trie.insert('card');
        expect(trie.search('car')).toBe(true);
        expect(trie.search('card')).toBe(true);
        expect(trie.search('care')).toBe(false);
        expect(trie.startsWith('ca')).toBe(true);
        expect(trie.startsWith('caz')).toBe(false);
    });
});
