import { rob } from '../0213-house-robber-ii';

describe('0213-house-robber-ii', () => {
    it('should return 3 for [2,3,2]', () => {
        expect(rob([2, 3, 2])).toBe(3);
    });

    it('should return 4 for [1,2,3,1]', () => {
        expect(rob([1, 2, 3, 1])).toBe(4);
    });

    it('should return 0 for [0]', () => {
        expect(rob([0])).toBe(0);
    });

    it('should return the single value for one house', () => {
        expect(rob([5])).toBe(5);
    });

    it('should return max of two for two houses', () => {
        expect(rob([2, 3])).toBe(3);
    });

    it('should handle all zeros', () => {
        expect(rob([0, 0, 0, 0])).toBe(0);
    });

    it('should handle circular constraint correctly', () => {
        // cannot rob both first and last
        expect(rob([1, 2, 3])).toBe(3);
    });

    it('should handle larger array', () => {
        expect(rob([200, 3, 140, 20, 10])).toBe(340);
    });
});
