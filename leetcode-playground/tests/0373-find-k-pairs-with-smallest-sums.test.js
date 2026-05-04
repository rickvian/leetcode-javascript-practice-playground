import { kSmallestPairs } from '../0373-find-k-pairs-with-smallest-sums';

describe('0373-find-k-pairs-with-smallest-sums', () => {
    it('should handle LeetCode example 1', () => {
        expect(kSmallestPairs([1,7,11], [2,4,6], 3)).toEqual([[1, 2], [1, 4], [1, 6]]);
    });

    it('should handle LeetCode example 2', () => {
        expect(kSmallestPairs([1,1,2], [1,2,3], 2)).toEqual([[1, 1], [1, 1]]);
    });

    it('should handle LeetCode example 3', () => {
        expect(kSmallestPairs([1,2], [3], 3)).toEqual([[1, 3], [2, 3]]);
    });

    it('should return single pair when k=1', () => {
        expect(kSmallestPairs([1,2,3], [4,5,6], 1)).toEqual([[1, 4]]);
    });

    it('should return all pairs when k larger than total possible pairs', () => {
        expect(kSmallestPairs([1,2], [3,4], 10)).toEqual([[1, 3], [2, 3], [1, 4], [2, 4]]);
    });

    it('should handle arrays with equal values', () => {
        expect(kSmallestPairs([1,1,1], [1,1,1], 5)).toEqual([[1, 1], [1, 1], [1, 1], [1, 1], [1, 1]]);
    });

    it('should handle arrays with negative values', () => {
        expect(kSmallestPairs([-2,-1,0], [-3,-2,-1], 3)).toEqual([[-2, -3], [-1, -3], [-2, -2]]);
    });

    it('should handle single element arrays', () => {
        expect(kSmallestPairs([1], [2,3,4], 2)).toEqual([[1, 2], [1, 3]]);
    });

    it('should handle single element in both arrays', () => {
        expect(kSmallestPairs([1], [2], 1)).toEqual([[1, 2]]);
    });

    it('should handle large values', () => {
        expect(kSmallestPairs([1000,2000], [1000,2000], 2)).toEqual([[1000, 1000], [2000, 1000]]);
    });

    it('should handle k equal to number of elements in first array', () => {
        expect(kSmallestPairs([1,2,3], [4,5], 3)).toEqual([[1, 4], [2, 4], [1, 5]]);
    });

    it('should handle arrays with mixed magnitude values', () => {
        expect(kSmallestPairs([1,5,10], [2,3,4], 4)).toEqual([[1, 2], [1, 3], [1, 4], [5, 2]]);
    });
});
