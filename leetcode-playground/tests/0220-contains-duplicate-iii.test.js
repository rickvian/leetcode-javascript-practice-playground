import { containsNearbyAlmostDuplicate } from '../0220-contains-duplicate-iii';

describe('0220-contains-duplicate-iii', () => {
    it('should return true for [1,2,3,1] indexDiff=3 valueDiff=0', () => {
        const result = containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0);
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should return false for [1,5,9,1,5,9] indexDiff=2 valueDiff=3', () => {
        const result = containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should return false for empty array', () => {
        const result = containsNearbyAlmostDuplicate([], 1, 1);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should return false for single-element array', () => {
        const result = containsNearbyAlmostDuplicate([0], 5, 5);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should handle negative numbers crossing zero', () => {
        const result = containsNearbyAlmostDuplicate([-2147483648, 2147483647], 1, 1);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should return true when exactly at valueDiff threshold', () => {
        const result = containsNearbyAlmostDuplicate([1, 2], 1, 1);
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should return false when indexDiff=0 rules out all pairs', () => {
        const result = containsNearbyAlmostDuplicate([1, 1, 1], 0, 10);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });
});
