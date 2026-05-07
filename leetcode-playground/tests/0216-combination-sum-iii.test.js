import { combinationSum3 } from '../0216-combination-sum-iii';

function sortCombinations(combos) {
    return combos.map(c => [...c].sort((a, b) => a - b)).sort((a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] !== b[i]) return a[i] - b[i];
        }
        return a.length - b.length;
    });
}

describe('0216-combination-sum-iii', () => {
    it('should return [[1,2,4]] for k=3, n=7', () => {
        expect(sortCombinations(combinationSum3(3, 7))).toEqual([[1, 2, 4]]);
    });

    it('should return [[1,2,6],[1,3,5],[2,3,4]] for k=3, n=9', () => {
        expect(sortCombinations(combinationSum3(3, 9))).toEqual([[1, 2, 6], [1, 3, 5], [2, 3, 4]]);
    });

    it('should return empty for impossible combination (k=4, n=1)', () => {
        expect(combinationSum3(4, 1)).toEqual([]);
    });

    it('should return empty when sum exceeds max possible (k=3, n=30)', () => {
        expect(combinationSum3(3, 30)).toEqual([]);
    });

    it('should return [[9]] for k=1, n=9', () => {
        expect(sortCombinations(combinationSum3(1, 9))).toEqual([[9]]);
    });

    it('should return empty for k=1, n=10 (out of range 1-9)', () => {
        expect(combinationSum3(1, 10)).toEqual([]);
    });

    it('should return [[1,2,3,4]] for k=4, n=10', () => {
        expect(sortCombinations(combinationSum3(4, 10))).toEqual([[1, 2, 3, 4]]);
    });

    it('should not reuse same digit', () => {
        const result = combinationSum3(2, 6);
        result.forEach(combo => {
            expect(new Set(combo).size).toBe(combo.length);
        });
    });

    it('should only use digits 1-9', () => {
        const result = combinationSum3(3, 9);
        result.forEach(combo => {
            combo.forEach(num => {
                expect(num).toBeGreaterThanOrEqual(1);
                expect(num).toBeLessThanOrEqual(9);
            });
        });
    });
});
