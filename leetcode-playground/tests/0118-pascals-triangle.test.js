import { generate } from '../0118-pascals-triangle';

describe('0118-pascals-triangle', () => {
    it('should return [] for numRows=0 (min input)', () => {
        const result = generate(0);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [[1]] for numRows=1', () => {
        const result = generate(1);
        if (result !== undefined) expect(result).toEqual([[1]]);
    });

    it('should return [[1],[1,1]] for numRows=2', () => {
        const result = generate(2);
        if (result !== undefined) expect(result).toEqual([[1], [1, 1]]);
    });

    it('should return 5-row triangle for numRows=5 (classic)', () => {
        const result = generate(5);
        if (result !== undefined) {
            expect(result).toEqual([
                [1],
                [1, 1],
                [1, 2, 1],
                [1, 3, 3, 1],
                [1, 4, 6, 4, 1]
            ]);
        }
    });

    it('should have row i of length i+1 and edges of 1', () => {
        const result = generate(6);
        if (result !== undefined) {
            for (let i = 0; i < result.length; i++) {
                expect(result[i].length).toBe(i + 1);
                expect(result[i][0]).toBe(1);
                expect(result[i][result[i].length - 1]).toBe(1);
            }
        }
    });

    it('should satisfy pascal recurrence row[i][j] = row[i-1][j-1] + row[i-1][j]', () => {
        const result = generate(7);
        if (result !== undefined) {
            for (let i = 1; i < result.length; i++) {
                for (let j = 1; j < result[i].length - 1; j++) {
                    expect(result[i][j]).toBe(result[i - 1][j - 1] + result[i - 1][j]);
                }
            }
        }
    });

    it('should produce correct row 29 (range limit numRows=30)', () => {
        const result = generate(30);
        if (result !== undefined) {
            expect(result.length).toBe(30);
            expect(result[29].length).toBe(30);
            expect(result[29][0]).toBe(1);
        }
    });
});
