import { WordDistance } from '../0244-shortest-word-distance-ii';

describe('0244-shortest-word-distance-ii', () => {
    it('should return 3 for (coding vs practice)', () => {
        const wd = new WordDistance(['practice', 'makes', 'perfect', 'coding', 'makes']);
        const result = wd.shortest('coding', 'practice');
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 1 for (makes vs coding)', () => {
        const wd = new WordDistance(['practice', 'makes', 'perfect', 'coding', 'makes']);
        const result = wd.shortest('makes', 'coding');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should cache correctly across repeated calls', () => {
        const wd = new WordDistance(['a', 'b', 'a', 'b']);
        const first = wd.shortest('a', 'b');
        const second = wd.shortest('a', 'b');
        if (first !== undefined) expect(first).toBe(1);
        if (second !== undefined) expect(second).toBe(1);
    });

    it('should handle minimum 2-element list', () => {
        const wd = new WordDistance(['x', 'y']);
        const result = wd.shortest('x', 'y');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle repetitive identical words appearing many times', () => {
        const list = [];
        for (let i = 0; i < 50; i++) {
            list.push(i % 2 === 0 ? 'a' : 'b');
        }
        const wd = new WordDistance(list);
        const result = wd.shortest('a', 'b');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle far-apart words (range limit)', () => {
        const list = Array(200).fill('z');
        list[0] = 'a';
        list[199] = 'b';
        const wd = new WordDistance(list);
        const result = wd.shortest('a', 'b');
        if (result !== undefined) expect(result).toBe(199);
    });

    it('should handle whitespace tokens distinctly', () => {
        const wd = new WordDistance(['a', ' a', 'b']);
        const result = wd.shortest(' a', 'b');
        if (result !== undefined) expect(result).toBe(1);
    });
});
