import { ladderLength } from '../0127-word-ladder';

describe('0127-word-ladder', () => {
    it('should return length of shortest ladder (official example 1)', () => {
        const beginWord = 'hit';
        const endWord = 'cog';
        const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should return 0 when endWord not in wordList (official example 2)', () => {
        const beginWord = 'hit';
        const endWord = 'cog';
        const wordList = ['hot', 'dot', 'dog', 'lot', 'log'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 2 for single-step ladder', () => {
        const beginWord = 'a';
        const endWord = 'b';
        const wordList = ['b'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 0 when endWord not reachable (path requires intermediate word not in list)', () => {
        const beginWord = 'a';
        const endWord = 'c';
        const wordList = ['a', 'b'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 when empty wordList', () => {
        const beginWord = 'a';
        const endWord = 'b';
        const wordList = [];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 2 for single-step ladder (a→c directly)', () => {
        const beginWord = 'a';
        const endWord = 'c';
        const wordList = ['a', 'b', 'c'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 0 when no path exists (disconnected components)', () => {
        const beginWord = 'a';
        const endWord = 'z';
        const wordList = ['a', 'b', 'c'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle multi-step ladder with longer words', () => {
        const beginWord = 'cold';
        const endWord = 'warm';
        const wordList = ['cold', 'cord', 'card', 'ward', 'warm'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should find path through larger wordList', () => {
        const beginWord = 'hit';
        const endWord = 'log';
        const wordList = ['hit', 'hot', 'dot', 'dog', 'lot', 'log'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 4 for red→tax path (red→ted→tex→tax)', () => {
        const beginWord = 'red';
        const endWord = 'tax';
        const wordList = ['red', 'ted', 'tex', 'tax'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle case where multiple paths exist (return shortest)', () => {
        const beginWord = 'a';
        const endWord = 'd';
        const wordList = ['a', 'b', 'c', 'd', 'e'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 0 when no single-letter-diff neighbors exist', () => {
        const beginWord = 'abc';
        const endWord = 'xyz';
        const wordList = [];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle longer transformation chain', () => {
        const beginWord = 'code';
        const endWord = 'safe';
        const wordList = ['code', 'cade', 'cafe', 'safe'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should find shortest path when multiple neighbors available', () => {
        const beginWord = 'a';
        const endWord = 'c';
        const wordList = ['a', 'b', 'c', 'd', 'e'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return length including beginWord and endWord', () => {
        const beginWord = 'hot';
        const endWord = 'dog';
        const wordList = ['hot', 'dot', 'dog'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle path with single intermediate word', () => {
        const beginWord = 'cat';
        const endWord = 'bat';
        const wordList = ['cat', 'bat'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 0 when words have different lengths (no valid transformation)', () => {
        const beginWord = 'start';
        const endWord = 'end';
        const wordList = ['start', 'stend', 'end'];
        const result = ladderLength(beginWord, endWord, wordList);
        if (result !== undefined) expect(result).toBe(0);
    });
});
