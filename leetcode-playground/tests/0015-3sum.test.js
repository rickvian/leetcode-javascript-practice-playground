import { threeSum } from '../0015-3sum';

describe('0015-3sum', () => {
    it('should return [[-1,-1,2],[-1,0,1]] for [-1,0,1,2,-1,-4]', () => {
        const result = threeSum([-1, 0, 1, 2, -1, -4]);
        expect(result.length).toBe(2);
        expect(result).toContainEqual([-1, -1, 2]);
        expect(result).toContainEqual([-1, 0, 1]);
    });

    it('should return empty array for [0,1,1]', () => {
        expect(threeSum([0, 1, 1])).toEqual([]);
    });

    it('should return [[0,0,0]] for [0,0,0]', () => {
        expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
    });

    it('should handle array with negative numbers', () => {
        const result = threeSum([-2, 0, 1, 1, 2]);
        expect(result.length).toBe(2);
        expect(result).toContainEqual([-2, 0, 2]);
        expect(result).toContainEqual([-2, 1, 1]);
    });

    it('should return empty array for array with less than 3 elements', () => {
        expect(threeSum([1, 2])).toEqual([]);
    });

    it('should handle array with duplicates', () => {
        const result = threeSum([-1, 0, 1, 2, -1, -4, -1]);
        expect(result).toContainEqual([-1, -1, 2]);
        expect(result).toContainEqual([-1, 0, 1]);
    });

    it('should return empty array when no triplets sum to zero', () => {
        expect(threeSum([1, 2, 3, 4, 5])).toEqual([]);
    });

    it('should handle array with zeros', () => {
        const result = threeSum([0, 0, 0, 0]);
        expect(result).toEqual([[0, 0, 0]]);
    });
});
