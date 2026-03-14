import { eraseOverlapIntervals } from '../0435-non-overlapping-intervals';

describe('0435-non-overlapping-intervals', () => {
    // LeetCode example 1: [[1,2],[2,3],[3,4],[1,3]] => 1
    it('should return 1 for [[1,2],[2,3],[3,4],[1,3]]', () => {
        expect(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])).toBe(1);
    });

    // LeetCode example 2: [[1,2],[1,2],[1,2]] => 2
    it('should return 2 for three identical overlapping intervals', () => {
        expect(eraseOverlapIntervals([[1,2],[1,2],[1,2]])).toBe(2);
    });

    // LeetCode example 3: [[1,2],[2,3]] => 0 (no overlap, touching end=start)
    it('should return 0 for non-overlapping intervals touching at boundary', () => {
        expect(eraseOverlapIntervals([[1,2],[2,3]])).toBe(0);
    });

    // Empty array
    it('should return 0 for empty array', () => {
        expect(eraseOverlapIntervals([])).toBe(0);
    });

    // Single interval
    it('should return 0 for single interval', () => {
        expect(eraseOverlapIntervals([[1,5]])).toBe(0);
    });

    // All intervals same
    it('should remove all but one when all intervals identical', () => {
        expect(eraseOverlapIntervals([[0,1],[0,1],[0,1],[0,1]])).toBe(3);
    });

    // Nested intervals
    it('should handle nested intervals', () => {
        expect(eraseOverlapIntervals([[1,10],[2,3],[4,5],[6,7]])).toBe(1);
    });

    // Multiple overlaps
    it('should handle chain of overlapping intervals', () => {
        expect(eraseOverlapIntervals([[1,3],[2,4],[3,5],[4,6]])).toBe(2);
    });

    // Negative intervals
    it('should handle negative coordinates', () => {
        expect(eraseOverlapIntervals([[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95]])).toBe(1);
    });

    // Already sorted non-overlapping
    it('should return 0 for already sorted non-overlapping intervals', () => {
        expect(eraseOverlapIntervals([[1,2],[3,4],[5,6],[7,8]])).toBe(0);
    });
});
