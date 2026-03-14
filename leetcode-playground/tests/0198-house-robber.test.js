import { rob } from '../0198-house-robber';

describe('0198-house-robber', () => {
    it('should return 4 for [1,2,3,1]', () => {
        expect(rob([1, 2, 3, 1])).toBe(4);
    });

    it('should return 12 for [2,7,9,3,1]', () => {
        expect(rob([2, 7, 9, 3, 1])).toBe(12);
    });

    it('should return the single element for single house', () => {
        expect(rob([5])).toBe(5);
    });

    it('should return max of two houses', () => {
        expect(rob([2, 1])).toBe(2);
        expect(rob([1, 2])).toBe(2);
    });

    it('should handle all same values', () => {
        expect(rob([3, 3, 3, 3])).toBe(6);
    });

    it('should handle large values', () => {
        expect(rob([200, 3, 140, 20, 10])).toBe(340);
    });

    it('should handle alternating high values', () => {
        expect(rob([2, 1, 1, 2])).toBe(4);
    });

    it('should return 0 for empty array', () => {
        expect(rob([])).toBe(0);
    });
});
