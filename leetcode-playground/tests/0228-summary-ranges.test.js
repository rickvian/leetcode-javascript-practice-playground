import { summaryRanges } from '../0228-summary-ranges';

describe('0228-summary-ranges', () => {
    it('should summarize [0,1,2,4,5,7] to ["0->2","4->5","7"]', () => {
        const result = summaryRanges([0, 1, 2, 4, 5, 7]);
        if (result !== undefined) {
            expect(result).toEqual(['0->2', '4->5', '7']);
        }
    });

    it('should return [] for empty input', () => {
        const result = summaryRanges([]);
        if (result !== undefined) {
            expect(result).toEqual([]);
        }
    });

    it('should return ["5"] for a single-element input', () => {
        const result = summaryRanges([5]);
        if (result !== undefined) {
            expect(result).toEqual(['5']);
        }
    });

    it('should use arrow form when all elements are consecutive', () => {
        const result = summaryRanges([1, 2, 3, 4, 5]);
        if (result !== undefined) {
            expect(result).toEqual(['1->5']);
        }
    });

    it('should return each value when none are consecutive', () => {
        const result = summaryRanges([1, 3, 5]);
        if (result !== undefined) {
            expect(result).toEqual(['1', '3', '5']);
        }
    });

    it('should handle negative numbers correctly', () => {
        const result = summaryRanges([-3, -2, -1, 1]);
        if (result !== undefined) {
            expect(result).toEqual(['-3->-1', '1']);
        }
    });

    it('should handle INT_MIN and INT_MAX boundaries', () => {
        const result = summaryRanges([-2147483648, -2147483647, 2147483647]);
        if (result !== undefined) {
            expect(result).toEqual(['-2147483648->-2147483647', '2147483647']);
        }
    });
});
