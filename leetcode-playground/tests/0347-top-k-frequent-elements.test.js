import { topKFrequent } from '../0347-top-k-frequent-elements';

describe('0347-top-k-frequent-elements', () => {
    it('should return [1,2] for LeetCode example 1', () => {
        const result = topKFrequent([1, 1, 1, 2, 2, 3], 2);
        expect(result.sort()).toEqual([1, 2]);
    });

    it('should return [1] for LeetCode example 2', () => {
        expect(topKFrequent([1], 1)).toEqual([1]);
    });

    it('should return all elements when k equals array length', () => {
        const result = topKFrequent([1, 2, 3], 3);
        expect(result.sort()).toEqual([1, 2, 3]);
    });

    it('should handle all same elements', () => {
        expect(topKFrequent([1, 1, 1, 1], 1)).toEqual([1]);
    });

    it('should handle negative numbers', () => {
        const result = topKFrequent([-1, -1, 2, 2, 3], 2);
        expect(result.sort()).toEqual([-1, 2]);
    });

    it('should return top 1 most frequent', () => {
        const result = topKFrequent([1, 1, 1, 2, 2, 3], 1);
        expect(result).toEqual([1]);
    });

    it('should handle array where all frequencies are distinct', () => {
        const result = topKFrequent([4, 4, 4, 2, 2, 1], 2);
        expect(result.sort()).toEqual([2, 4]);
    });

    it('should handle k=2 with tie in frequency', () => {
        const result = topKFrequent([1, 2, 3, 1, 2, 3, 4], 2);
        expect(result).toHaveLength(2);
        expect([1, 2, 3]).toEqual(expect.arrayContaining(result));
    });

    it('should handle large input', () => {
        const nums = Array(1000).fill(1).concat(Array(500).fill(2)).concat(Array(100).fill(3));
        const result = topKFrequent(nums, 2);
        expect(result.sort()).toEqual([1, 2]);
    });
});
