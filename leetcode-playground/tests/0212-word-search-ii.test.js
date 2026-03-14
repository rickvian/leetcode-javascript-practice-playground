import { findWords } from '../0212-word-search-ii';

describe('0212-word-search-ii', () => {
    it('should find words in the board', () => {
        const board = [
            ['o', 'a', 'a', 'n'],
            ['e', 't', 'a', 'e'],
            ['i', 'h', 'k', 'r'],
            ['i', 'f', 'l', 'v']
        ];
        const words = ['oath', 'pea', 'eat', 'rain'];
        const result = findWords(board, words);
        expect(result.sort()).toEqual(['eat', 'oath'].sort());
    });

    it('should return empty when no words found', () => {
        const board = [
            ['a', 'b'],
            ['c', 'd']
        ];
        const words = ['xyz', 'pqr'];
        expect(findWords(board, words)).toEqual([]);
    });

    it('should find a single word', () => {
        const board = [['a', 'b'], ['c', 'd']];
        const words = ['abdc'];
        const result = findWords(board, words);
        expect(result).toEqual(['abdc']);
    });

    it('should not reuse the same cell', () => {
        const board = [['a', 'a']];
        const words = ['aaa'];
        expect(findWords(board, words)).toEqual([]);
    });

    it('should handle single cell board', () => {
        const board = [['a']];
        expect(findWords(board, ['a'])).toEqual(['a']);
        expect(findWords(board, ['b'])).toEqual([]);
    });

    it('should not return duplicate words', () => {
        const board = [
            ['a', 'b'],
            ['c', 'd']
        ];
        const words = ['ab', 'ab'];
        const result = findWords(board, words);
        expect(result.length).toBeLessThanOrEqual(1);
    });
});
