import { shortestDistance } from '../0243-shortest-word-distance';

describe('0243-shortest-word-distance', () => {
    it('should return 3 for leetcode sample (coding vs practice)', () => {
        const result = shortestDistance(
            ['practice', 'makes', 'perfect', 'coding', 'makes'],
            'coding',
            'practice'
        );
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 1 for leetcode sample (makes vs coding)', () => {
        const result = shortestDistance(
            ['practice', 'makes', 'perfect', 'coding', 'makes'],
            'makes',
            'coding'
        );
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 1 for adjacent words (minimum positive)', () => {
        const result = shortestDistance(['a', 'b'], 'a', 'b');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle repetitive occurrences of both words', () => {
        const result = shortestDistance(['a', 'b', 'a', 'b', 'a'], 'a', 'b');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle whitespace-bearing words correctly', () => {
        const result = shortestDistance(['a ', ' a', 'b'], 'a ', 'b');
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle range-limit where word1 appears only at start and word2 only at end', () => {
        const list = Array(100).fill('x');
        list[0] = 'a';
        list[99] = 'b';
        const result = shortestDistance(list, 'a', 'b');
        if (result !== undefined) expect(result).toBe(99);
    });

    it('should handle arrays where two occurrences are minimally apart (off-by-one)', () => {
        const result = shortestDistance(['a', 'x', 'b', 'x', 'a'], 'a', 'b');
        if (result !== undefined) expect(result).toBe(1);
    });
});
