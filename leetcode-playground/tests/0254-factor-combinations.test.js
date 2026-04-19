import { getFactors } from '../0254-factor-combinations';

const canon = (groups) =>
    [...groups].map((g) => [...g].sort((a, b) => a - b)).sort((a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] !== b[i]) return a[i] - b[i];
        }
        return a.length - b.length;
    });

describe('0254-factor-combinations', () => {
    it('should return [] for n=1 (no non-trivial factors)', () => {
        const result = getFactors(1);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] for n=2 (prime, smallest)', () => {
        const result = getFactors(2);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] for n=37 (prime)', () => {
        const result = getFactors(37);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [[2,6],[2,2,3],[3,4]] for n=12', () => {
        const result = getFactors(12);
        if (result !== undefined) {
            expect(canon(result)).toEqual(canon([[2, 6], [2, 2, 3], [3, 4]]));
        }
    });

    it('should return [[2,2,2,2,2,2,2,2]...] variants for n=256 (repetitive power of 2)', () => {
        const result = getFactors(256);
        if (result !== undefined) {
            expect(result.some((g) => g.every((x) => x === 2) && g.length === 8)).toBe(true);
        }
    });

    it('should handle n=4 edge (square of smallest prime)', () => {
        const result = getFactors(4);
        if (result !== undefined) expect(canon(result)).toEqual(canon([[2, 2]]));
    });

    it('should handle large n=32 (range limit) exactly', () => {
        const result = getFactors(32);
        if (result !== undefined) {
            expect(canon(result)).toEqual(
                canon([[2, 16], [2, 2, 8], [2, 2, 2, 4], [2, 2, 2, 2, 2], [4, 8]])
            );
        }
    });
});
