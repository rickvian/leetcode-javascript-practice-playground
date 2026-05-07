import { findMinArrowShots } from '../0452-minimum-number-of-arrows-to-burst-balloons';

describe('0452-minimum-number-of-arrows-to-burst-balloons', () => {
    it('should handle LeetCode official example 1', () => {
        expect(findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])).toEqual(2);
    });

    it('should handle LeetCode official example 2', () => {
        expect(findMinArrowShots([[1, 2]])).toEqual(1);
    });

    it('should handle single balloon', () => {
        expect(findMinArrowShots([[1, 5]])).toEqual(1);
    });

    it('should handle all balloons overlapping', () => {
        expect(findMinArrowShots([[1, 10], [2, 8], [3, 7], [4, 6]])).toEqual(1);
    });

    it('should handle no balloons overlapping', () => {
        expect(findMinArrowShots([[1, 2], [3, 4], [5, 6]])).toEqual(3);
    });

    it('should handle balloons touching at exactly one point', () => {
        expect(findMinArrowShots([[1, 2], [2, 3], [3, 4]])).toEqual(2);
    });

    it('should handle negative coordinates', () => {
        expect(findMinArrowShots([[-10, -8], [-8, -6], [-6, -4]])).toEqual(2);
    });

    it('should handle mixed positive and negative coordinates', () => {
        expect(findMinArrowShots([[-5, 5], [-3, 2], [1, 8]])).toEqual(1);
    });

    it('should handle balloons with identical intervals', () => {
        expect(findMinArrowShots([[1, 5], [1, 5], [1, 5]])).toEqual(1);
    });

    it('should handle large coordinate values', () => {
        expect(findMinArrowShots([[1, 2147483647], [2147483646, 2147483647]])).toEqual(1);
    });

    it('should handle multiple non-overlapping groups', () => {
        expect(findMinArrowShots([[1, 2], [2, 3], [4, 5], [5, 6]])).toEqual(2);
    });

    it('should handle partial overlaps requiring multiple arrows', () => {
        expect(findMinArrowShots([[1, 3], [2, 4], [5, 7]])).toEqual(2);
    });

    it('should handle nested intervals', () => {
        expect(findMinArrowShots([[1, 10], [2, 3], [4, 5], [6, 7]])).toEqual(3);
    });

    it('should handle balloons with same start different end', () => {
        expect(findMinArrowShots([[1, 5], [1, 10], [1, 3]])).toEqual(1);
    });

    it('should handle balloons with same end different start', () => {
        expect(findMinArrowShots([[1, 5], [3, 5], [2, 5]])).toEqual(1);
    });
});
