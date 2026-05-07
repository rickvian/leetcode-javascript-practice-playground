import { consecutiveNumbers } from '../0180-consecutive-numbers';

describe('0180-consecutive-numbers', () => {
    it('should return [] for empty input', () => {
        const result = consecutiveNumbers([]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] when no number appears 3 times consecutively', () => {
        const result = consecutiveNumbers([
            { id: 1, num: 1 },
            { id: 2, num: 2 },
            { id: 3, num: 1 },
        ]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should detect a run of exactly 3 consecutive occurrences', () => {
        const result = consecutiveNumbers([
            { id: 1, num: 1 },
            { id: 2, num: 1 },
            { id: 3, num: 1 },
            { id: 4, num: 2 },
            { id: 5, num: 1 },
            { id: 6, num: 2 },
            { id: 7, num: 2 },
        ]);
        if (result !== undefined) {
            expect(result).toEqual([{ ConsecutiveNums: 1 }]);
        }
    });

    it('should return duplicates-free result even across multiple runs of the same num', () => {
        const result = consecutiveNumbers([
            { id: 1, num: 5 },
            { id: 2, num: 5 },
            { id: 3, num: 5 },
            { id: 4, num: 1 },
            { id: 5, num: 5 },
            { id: 6, num: 5 },
            { id: 7, num: 5 },
        ]);
        if (result !== undefined) {
            expect(result).toEqual([{ ConsecutiveNums: 5 }]);
        }
    });

    it('should use id order, not insertion order, to determine consecutiveness', () => {
        const shuffled = [
            { id: 3, num: 7 },
            { id: 1, num: 7 },
            { id: 2, num: 7 },
        ];
        const result = consecutiveNumbers(shuffled);
        if (result !== undefined) {
            expect(result).toEqual([{ ConsecutiveNums: 7 }]);
        }
    });

    it('should handle a run of length 2 as not qualifying', () => {
        const result = consecutiveNumbers([
            { id: 1, num: 9 },
            { id: 2, num: 9 },
        ]);
        if (result !== undefined) expect(result).toEqual([]);
    });
});
