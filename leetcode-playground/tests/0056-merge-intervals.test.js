import { merge } from '../0056-merge-intervals.js';

describe('0056-merge-intervals', () => {
    // Basic cases
    it('should merge overlapping intervals', () => {
        expect(merge([[1,3],[2,6],[8,10],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
    });

    it('should merge intervals that touch at a single point', () => {
        expect(merge([[1,4],[4,5]])).toEqual([[1,5]]);
    });

    it('should return single interval unchanged', () => {
        expect(merge([[1,5]])).toEqual([[1,5]]);
    });

    it('should not merge non-overlapping intervals', () => {
        expect(merge([[1,2],[3,4],[5,6]])).toEqual([[1,2],[3,4],[5,6]]);
    });

    it('should merge when one interval is fully contained within another', () => {
        expect(merge([[1,10],[2,5]])).toEqual([[1,10]]);
    });

    it('should merge all into one when all intervals overlap', () => {
        expect(merge([[1,4],[2,5],[3,6]])).toEqual([[1,6]]);
    });

    // Edge / adversarial cases
    it('should handle empty array', () => {
        expect(merge([])).toEqual([]);
    });

    it('should handle intervals given in unsorted order', () => {
        expect(merge([[8,10],[1,3],[2,6],[15,18]])).toEqual([[1,6],[8,10],[15,18]]);
    });

    it('should handle point intervals (start equals end)', () => {
        expect(merge([[1,1],[2,2],[2,3]])).toEqual([[1,1],[2,3]]);
    });

    it('should handle all identical intervals', () => {
        expect(merge([[3,5],[3,5],[3,5]])).toEqual([[3,5]]);
    });

    it('should merge cascading overlapping intervals into one', () => {
        expect(merge([[1,3],[2,4],[3,5],[4,6]])).toEqual([[1,6]]);
    });

    it('should handle negative interval values', () => {
        expect(merge([[-5,-1],[-3,2],[3,6]])).toEqual([[-5,2],[3,6]]);
    });

    it('should handle mix of negative and positive intervals that merge', () => {
        expect(merge([[-10,0],[-1,5]])).toEqual([[-10,5]]);
    });

    it('should handle intervals with large values', () => {
        expect(merge([[0,100000],[50000,200000]])).toEqual([[0,200000]]);
    });

    // Extreme / large input
    it('should handle large number of non-overlapping intervals', () => {
        const intervals = Array.from({ length: 1000 }, (_, i) => [i * 3, i * 3 + 1]);
        const expected = Array.from({ length: 1000 }, (_, i) => [i * 3, i * 3 + 1]);
        expect(merge(intervals)).toEqual(expected);
    });

    it('should handle large number of overlapping intervals collapsing into one', () => {
        const intervals = Array.from({ length: 1000 }, (_, i) => [i, i + 1]);
        expect(merge(intervals)).toEqual([[0, 1000]]);
    });
});
