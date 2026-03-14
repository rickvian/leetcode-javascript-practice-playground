import { longestConsecutive } from '../0128-longest-consecutive-sequence';

describe('0128-longest-consecutive-sequence', () => {
    it('should return 4 for [100,4,200,1,3,2]', () => {
        expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4);
    });

    it('should return 9 for [0,3,7,2,5,8,4,6,0,1]', () => {
        expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9);
    });

    it('should return 0 for empty array', () => {
        expect(longestConsecutive([])).toBe(0);
    });

    it('should return 1 for single element', () => {
        expect(longestConsecutive([5])).toBe(1);
    });

    it('should handle duplicates', () => {
        expect(longestConsecutive([1, 2, 0, 1])).toBe(3);
    });

    it('should return 1 when no consecutive elements', () => {
        expect(longestConsecutive([10, 20, 30])).toBe(1);
    });

    it('should handle all consecutive elements', () => {
        expect(longestConsecutive([1, 2, 3, 4, 5])).toBe(5);
    });

    it('should handle negative numbers', () => {
        expect(longestConsecutive([-3, -2, -1, 0, 1])).toBe(5);
    });
});
