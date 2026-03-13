import { maxArea } from '../0011-container-with-most-water';

describe('0011-container-with-most-water', () => {
    it('should return 49 for [1,8,6,2,5,4,8,3,7]', () => {
        expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
    });

    it('should return 1 for [1,1]', () => {
        expect(maxArea([1, 1])).toBe(1);
    });

    it('should return 16 for [4,3,2,1,4]', () => {
        expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
    });

    it('should return 2 for [1,2,1]', () => {
        expect(maxArea([1, 2, 1])).toBe(2);
    });

    it('should handle array with increasing heights', () => {
        expect(maxArea([1, 2, 3, 4, 5])).toBe(8);
    });

    it('should handle array with decreasing heights', () => {
        expect(maxArea([5, 4, 3, 2, 1])).toBe(8);
    });

    it('should handle array with one tall bar at end', () => {
        expect(maxArea([2, 3, 4, 5, 25, 24, 3, 4])).toBe(64);
    });

    it('should handle array with maximum width but low height', () => {
        expect(maxArea([1, 1, 1, 1])).toBe(3);
    });
});
