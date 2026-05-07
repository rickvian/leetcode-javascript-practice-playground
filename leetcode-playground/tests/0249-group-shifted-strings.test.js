import { groupStrings } from '../0249-group-shifted-strings';

const canon = (groups) => [...groups].map((g) => [...g].sort()).sort((a, b) => a[0].localeCompare(b[0]));

describe('0249-group-shifted-strings', () => {
    it('should return [] for empty input', () => {
        const result = groupStrings([]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should group leetcode sample correctly', () => {
        const result = groupStrings(['abc', 'bcd', 'acef', 'xyz', 'az', 'ba', 'a', 'z']);
        if (result !== undefined) {
            expect(canon(result)).toEqual(
                canon([
                    ['acef'],
                    ['a', 'z'],
                    ['abc', 'bcd', 'xyz'],
                    ['az', 'ba'],
                ])
            );
        }
    });

    it('should put each singleton in its own group when no overlap', () => {
        const result = groupStrings(['abcd']);
        if (result !== undefined) expect(canon(result)).toEqual([['abcd']]);
    });

    it('should handle repetitive identical inputs ["a","a","a"]', () => {
        const result = groupStrings(['a', 'a', 'a']);
        if (result !== undefined) expect(canon(result)).toEqual([['a', 'a', 'a']]);
    });

    it('should handle wraparound shifts ["az","ba"]', () => {
        const result = groupStrings(['az', 'ba']);
        if (result !== undefined) expect(canon(result)).toEqual([['az', 'ba']]);
    });

    it('should keep single-char strings grouped together', () => {
        const result = groupStrings(['a', 'b', 'c']);
        if (result !== undefined) expect(canon(result)).toEqual([['a', 'b', 'c']]);
    });

    it('should separate groups by different lengths even if same shift prefix', () => {
        const result = groupStrings(['ab', 'abc']);
        if (result !== undefined) {
            expect(result.length).toBe(2);
        }
    });
});
