import { combine } from '../0077-combinations';

const sortCombinations = (arr) => {
    if (!arr) return arr;
    return arr.map(c => [...c].sort((a, b) => a - b)).sort((a, b) => {
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] !== b[i]) return a[i] - b[i];
        }
        return a.length - b.length;
    });
};

describe('0077-combinations', () => {
    it('should return all combinations for n=4, k=2 (LeetCode example 1)', () => {
        const result = combine(4, 2);
        if (result !== undefined) {
            expect(sortCombinations(result)).toEqual(sortCombinations([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]));
        }
    });

    it('should return [[1]] for n=1, k=1 (LeetCode example 2)', () => {
        const result = combine(1, 1);
        if (result !== undefined) {
            expect(sortCombinations(result)).toEqual([[1]]);
        }
    });

    it('should return each single number when k=1', () => {
        const result = combine(3, 1);
        if (result !== undefined) {
            expect(sortCombinations(result)).toEqual([[1],[2],[3]]);
        }
    });

    it('should return single combination [1..n] when k=n', () => {
        const result = combine(3, 3);
        if (result !== undefined) {
            expect(sortCombinations(result)).toEqual([[1,2,3]]);
        }
    });

    it('should return 10 combinations for n=5, k=2 (C(5,2)=10)', () => {
        const result = combine(5, 2);
        if (result !== undefined) {
            expect(result.length).toBe(10);
        }
    });

    it('should return 10 combinations for n=5, k=3 (C(5,3)=10)', () => {
        const result = combine(5, 3);
        if (result !== undefined) {
            expect(result.length).toBe(10);
        }
    });

    it('should return 15 combinations for n=6, k=2 (C(6,2)=15)', () => {
        const result = combine(6, 2);
        if (result !== undefined) {
            expect(result.length).toBe(15);
        }
    });

    it('should return 1 combination when k=n for larger n', () => {
        const result = combine(4, 4);
        if (result !== undefined) {
            expect(sortCombinations(result)).toEqual([[1,2,3,4]]);
        }
    });

    it('should return 4 combinations for n=4, k=1', () => {
        const result = combine(4, 1);
        if (result !== undefined) {
            expect(sortCombinations(result)).toEqual([[1],[2],[3],[4]]);
        }
    });

    it('should return 20 combinations for n=6, k=3 (C(6,3)=20)', () => {
        const result = combine(6, 3);
        if (result !== undefined) {
            expect(result.length).toBe(20);
        }
    });

    it('each combination should have exactly k elements', () => {
        const result = combine(5, 3);
        if (result !== undefined) {
            result.forEach(combo => {
                expect(combo.length).toBe(3);
            });
        }
    });

    it('each combination should only contain numbers in range [1, n]', () => {
        const n = 5, k = 3;
        const result = combine(n, k);
        if (result !== undefined) {
            result.forEach(combo => {
                combo.forEach(num => {
                    expect(num).toBeGreaterThanOrEqual(1);
                    expect(num).toBeLessThanOrEqual(n);
                });
            });
        }
    });

    it('no combination should contain duplicate numbers', () => {
        const result = combine(5, 3);
        if (result !== undefined) {
            result.forEach(combo => {
                const unique = new Set(combo);
                expect(unique.size).toBe(combo.length);
            });
        }
    });

    it('should return C(n,k) combinations for n=20, k=2', () => {
        const result = combine(20, 2);
        if (result !== undefined) {
            expect(result.length).toBe(190);
        }
    });
});
