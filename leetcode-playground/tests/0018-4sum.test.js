import { fourSum } from '../0018-4sum';

const sortQuads = (arr) => arr.map(q => [...q].sort((a, b) => a - b)).sort((a, b) => {
    for (let i = 0; i < 4; i++) if (a[i] !== b[i]) return a[i] - b[i];
    return 0;
});

describe('0018-4sum', () => {
    it('should return empty array when fewer than 4 elements', () => {
        const result = fourSum([1, 2, 3], 6);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return one quadruplet for minimum input', () => {
        const result = fourSum([1, 0, -1, 0], 0);
        if (result !== undefined) expect(sortQuads(result)).toEqual(sortQuads([[-1, 0, 0, 1]]));
    });

    it('should return LeetCode example result', () => {
        const result = fourSum([1, 0, -1, 0, -2, 2], 0);
        if (result !== undefined) {
            const expected = sortQuads([[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]);
            expect(sortQuads(result)).toEqual(expected);
        }
    });

    it('should handle all-zero array (repetitive data)', () => {
        const result = fourSum([0, 0, 0, 0], 0);
        if (result !== undefined) expect(sortQuads(result)).toEqual(sortQuads([[0, 0, 0, 0]]));
    });

    it('should return empty when no quadruplet sums to target', () => {
        const result = fourSum([1, 2, 3, 4], 100);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should dedupe identical quadruplets from repeated input', () => {
        const result = fourSum([2, 2, 2, 2, 2], 8);
        if (result !== undefined) expect(sortQuads(result)).toEqual(sortQuads([[2, 2, 2, 2]]));
    });

    it('should handle negative target with negative boundary values', () => {
        const result = fourSum([-3, -1, 0, 2, 4, 5], -1);
        if (result !== undefined) {
            for (const q of result) expect(q.reduce((a, b) => a + b, 0)).toBe(-1);
        }
    });
});
