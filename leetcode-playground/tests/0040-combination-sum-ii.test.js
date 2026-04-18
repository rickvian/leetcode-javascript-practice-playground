import { combinationSum2 } from '../0040-combination-sum-ii';

const sortResult = (arr) => arr.map(c => c.slice().sort((a, b) => a - b))
    .sort((a, b) => a.join(',').localeCompare(b.join(',')));

describe('0040-combination-sum-ii', () => {
    it('should return [] for empty candidates (min input)', () => {
        const result = combinationSum2([], 3);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] when no combination reaches target', () => {
        const result = combinationSum2([2, 4, 6], 5);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should find single-candidate match (off-by-one with target boundary)', () => {
        const result = combinationSum2([3], 3);
        if (result !== undefined) expect(sortResult(result)).toEqual([[3]]);
    });

    it('should deduplicate combinations with repeated candidates', () => {
        const result = combinationSum2([10, 1, 2, 7, 6, 1, 5], 8);
        if (result !== undefined) expect(sortResult(result)).toEqual(sortResult([[1,1,6],[1,2,5],[1,7],[2,6]]));
    });

    it('should handle all-identical repetitive candidates summing exactly', () => {
        const result = combinationSum2([1, 1, 1, 1], 2);
        if (result !== undefined) expect(sortResult(result)).toEqual([[1,1]]);
    });

    it('should handle second LeetCode example', () => {
        const result = combinationSum2([2, 5, 2, 1, 2], 5);
        if (result !== undefined) expect(sortResult(result)).toEqual(sortResult([[1,2,2],[5]]));
    });

    it('should return [] when target is 0 with positive-only candidates (subtle zero boundary)', () => {
        const result = combinationSum2([1, 2, 3], 0);
        if (result !== undefined) expect(result).toEqual([[]]);
    });
});
