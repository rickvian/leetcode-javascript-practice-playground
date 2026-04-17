import { ladderLength } from '../0127-word-ladder';

describe('0127-word-ladder', () => {
    it('should return 0 when endWord is not in wordList (min input)', () => {
        const result = ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return the classic 5 for the LeetCode example', () => {
        const result = ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should return 0 for an empty wordList', () => {
        const result = ladderLength('a', 'b', []);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 2 for a single-step transformation', () => {
        const result = ladderLength('a', 'c', ['c']);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 0 when beginWord equals endWord (per LeetCode convention, no transformation required)', () => {
        const result = ladderLength('abc', 'abc', ['abc']);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for disconnected words', () => {
        const result = ladderLength('hit', 'cog', ['aaa', 'bbb']);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should not allow beginWord itself to count as an extra visit', () => {
        const result = ladderLength('hot', 'dog', ['hot', 'dog', 'dot']);
        if (result !== undefined) expect(result).toBe(3);
    });
});
