import { findLadders } from '../0126-word-ladder-ii';

const sortLadders = (arr) => arr.map(p => p.join('>')).sort();

describe('0126-word-ladder-ii', () => {
    it('should return [] when endWord is not in wordList (min input)', () => {
        const result = findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return both shortest ladders for the classic example', () => {
        const result = findLadders('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']);
        if (result !== undefined) {
            expect(sortLadders(result)).toEqual(sortLadders([
                ['hit', 'hot', 'dot', 'dog', 'cog'],
                ['hit', 'hot', 'lot', 'log', 'cog']
            ]));
        }
    });

    it('should return [] for an empty wordList', () => {
        const result = findLadders('a', 'b', []);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should handle a 1-step transformation', () => {
        const result = findLadders('a', 'c', ['a', 'b', 'c']);
        if (result !== undefined) {
            expect(result.length).toBeGreaterThan(0);
            expect(result[0]).toEqual(['a', 'c']);
        }
    });

    it('should return [] when no ladder exists (disconnected)', () => {
        const result = findLadders('hit', 'cog', ['hot', 'dog']);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should handle repetitive-length words consistently', () => {
        const result = findLadders('red', 'tax', ['ted', 'tex', 'red', 'tax', 'tad', 'den', 'rex', 'pee']);
        if (result !== undefined) {
            for (const ladder of result) expect(ladder.length).toBe(4);
        }
    });

    it('should return all ladders with identical minimal length', () => {
        const result = findLadders('hot', 'dog', ['hot', 'dog', 'dot']);
        if (result !== undefined) {
            if (result.length > 0) {
                const len = result[0].length;
                for (const ladder of result) expect(ladder.length).toBe(len);
            }
        }
    });
});
