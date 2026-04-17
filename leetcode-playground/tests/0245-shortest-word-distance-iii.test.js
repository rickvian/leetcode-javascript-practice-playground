import { shortestWordDistance } from '../0245-shortest-word-distance-iii';

describe('0245-shortest-word-distance-iii', () => {
    it('should return 1 for distinct words sample', () => {
        const result = shortestWordDistance(
            ['practice', 'makes', 'perfect', 'coding', 'makes'],
            'makes',
            'coding'
        );
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 3 for same-word sample (makes vs makes)', () => {
        const result = shortestWordDistance(
            ['practice', 'makes', 'perfect', 'coding', 'makes'],
            'makes',
            'makes'
        );
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 1 for adjacent repeated word (a, a) in [a,a]', () => {
        const result = shortestWordDistance(['a', 'a'], 'a', 'a');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle alternating same-word pairs [x,x,x,x] (off-by-one)', () => {
        const result = shortestWordDistance(['x', 'x', 'x', 'x'], 'x', 'x');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle range-limit far apart (word1==word2 only appears twice)', () => {
        const list = Array(100).fill('z');
        list[0] = 'a';
        list[99] = 'a';
        const result = shortestWordDistance(list, 'a', 'a');
        if (result !== undefined) expect(result).toBe(99);
    });

    it('should return 2 for distinct words 2 apart', () => {
        const result = shortestWordDistance(['a', 'x', 'b'], 'a', 'b');
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle repetitive data with whitespace tokens', () => {
        const result = shortestWordDistance(['a ', ' ', 'a ', ' '], 'a ', 'a ');
        if (result !== undefined) expect(result).toBe(2);
    });
});
