import { subsets } from '../0078-subsets.js';

describe('0078-subsets', () => {
    it('should handle empty array', () => {
        expect(subsets([])).toEqual([[]]);
    });

    it('should handle single element array', () => {
        expect(subsets([1])).toEqual([[], [1]]);
    });

    it('should handle two elements', () => {
        expect(subsets([1, 2])).toEqual([[], [1], [2], [1, 2]]);
    });

    it('should handle three elements', () => {
        expect(subsets([1, 2, 3])).toEqual([[],
            [1], 
            [2],
            [1, 2], 
            [3], 
            [1, 3], 
            [2, 3], 
            [1, 2, 3]]);
    });

    it('should handle null input', () => {
        expect(() => subsets(null)).toThrow();
    });

    it('should handle undefined input', () => {
        expect(() => subsets(undefined)).toThrow();
    });

    it('should handle non-array input', () => {
        expect(() => subsets(123)).toThrow();
    });
});