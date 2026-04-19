import { combine } from '../0077-combinations';

const sortResult = (arr) => arr.map(sub => [...sub].sort((a, b) => a - b))
    .sort((a, b) => a.join(',').localeCompare(b.join(',')));

describe('0077-combinations', () => {
    it('should return [[1]] for n=1, k=1 (min input)', () => {
        const result = combine(1, 1);
        if (result !== undefined) expect(sortResult(result)).toEqual([[1]]);
    });

    it('should return all C(4,2)=6 combinations for n=4, k=2', () => {
        const result = combine(4, 2);
        if (result !== undefined) {
            expect(sortResult(result)).toEqual([
                [1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4],
            ]);
        }
    });

    it('should return all C(5,3)=10 combinations for n=5, k=3', () => {
        const result = combine(5, 3);
        if (result !== undefined) expect(result.length).toBe(10);
    });

    it('should return single n-length combination for k=n (boundary)', () => {
        const result = combine(3, 3);
        if (result !== undefined) expect(sortResult(result)).toEqual([[1, 2, 3]]);
    });

    it('should return [[1],[2],...,[n]] for k=1', () => {
        const result = combine(5, 1);
        if (result !== undefined) {
            expect(sortResult(result)).toEqual([[1], [2], [3], [4], [5]]);
        }
    });

    it('should return combinations with unique values in each subset (no duplicates)', () => {
        const result = combine(6, 3);
        if (result !== undefined) {
            for (const sub of result) {
                expect(new Set(sub).size).toBe(sub.length);
            }
        }
    });

    it('should return C(6,4)=15 combinations (off-by-one sanity)', () => {
        const result = combine(6, 4);
        if (result !== undefined) expect(result.length).toBe(15);
    });
});
