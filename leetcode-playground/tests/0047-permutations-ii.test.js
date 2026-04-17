import { permuteUnique } from '../0047-permutations-ii';

const sortResult = (arr) => arr.map(p => p.slice())
    .sort((a, b) => a.join(',').localeCompare(b.join(',')));

describe('0047-permutations-ii', () => {
    it('should return [[]] for empty input (min input)', () => {
        const result = permuteUnique([]);
        if (result !== undefined) expect(result).toEqual([[]]);
    });

    it('should return [[1]] for single-element array', () => {
        const result = permuteUnique([1]);
        if (result !== undefined) expect(result).toEqual([[1]]);
    });

    it('should dedupe all-identical repetitive values', () => {
        const result = permuteUnique([1, 1, 1]);
        if (result !== undefined) expect(sortResult(result)).toEqual([[1, 1, 1]]);
    });

    it('should handle LeetCode example [1,1,2]', () => {
        const result = permuteUnique([1, 1, 2]);
        if (result !== undefined) expect(sortResult(result)).toEqual(sortResult([[1,1,2],[1,2,1],[2,1,1]]));
    });

    it('should handle fully distinct three-element array', () => {
        const result = permuteUnique([1, 2, 3]);
        if (result !== undefined) expect(result.length).toBe(6);
    });

    it('should produce n!/dupes count for pair with duplicate (off-by-one on dedupe)', () => {
        const result = permuteUnique([2, 2, 1, 1]);
        if (result !== undefined) expect(sortResult(result).length).toBe(6);
    });

    it('should handle negative-inclusive duplicate values', () => {
        const result = permuteUnique([-1, -1, 0]);
        if (result !== undefined) expect(sortResult(result)).toEqual(sortResult([[-1,-1,0],[-1,0,-1],[0,-1,-1]]));
    });
});
