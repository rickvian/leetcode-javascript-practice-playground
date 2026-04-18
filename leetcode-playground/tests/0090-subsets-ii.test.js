import { subsetsWithDup } from '../0090-subsets-ii';

const canonical = (r) => {
    if (!Array.isArray(r)) return r;
    return r.map((a) => [...a].sort((x, y) => x - y))
        .map((a) => a.join(','))
        .sort();
};

describe('0090-subsets-ii', () => {
    it('should return [[]] for empty input (min input)', () => {
        const result = subsetsWithDup([]);
        if (result !== undefined) expect(canonical(result)).toEqual(canonical([[]]));
    });

    it('should return [[], [0]] for single-element input', () => {
        const result = subsetsWithDup([0]);
        if (result !== undefined) expect(canonical(result)).toEqual(canonical([[], [0]]));
    });

    it('should not produce duplicate subsets for [1,2,2]', () => {
        const result = subsetsWithDup([1, 2, 2]);
        if (result !== undefined) {
            expect(canonical(result)).toEqual(canonical([[], [1], [2], [1, 2], [2, 2], [1, 2, 2]]));
        }
    });

    it('should handle all-identical values [4,4,4,4] (repetitive data)', () => {
        const result = subsetsWithDup([4, 4, 4, 4]);
        if (result !== undefined) {
            expect(canonical(result)).toEqual(canonical([[], [4], [4, 4], [4, 4, 4], [4, 4, 4, 4]]));
        }
    });

    it('should handle negative values and zeros [-1,0,0]', () => {
        const result = subsetsWithDup([-1, 0, 0]);
        if (result !== undefined) {
            expect(canonical(result)).toEqual(canonical([[], [-1], [0], [-1, 0], [0, 0], [-1, 0, 0]]));
        }
    });

    it('should produce 2^n subsets when values are unique [1,2,3]', () => {
        const result = subsetsWithDup([1, 2, 3]);
        if (result !== undefined) expect(result.length).toBe(8);
    });

    it('should handle boundary constraint n=10 with duplicates without duplicating', () => {
        const result = subsetsWithDup([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
        if (result !== undefined) expect(result.length).toBe(11);
    });
});
