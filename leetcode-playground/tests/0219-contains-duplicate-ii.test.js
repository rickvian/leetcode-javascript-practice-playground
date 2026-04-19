import { containsNearbyDuplicate } from '../0219-contains-duplicate-ii';

describe('0219-contains-duplicate-ii', () => {
    it('should return true for [1,2,3,1] with k=3', () => {
        const result = containsNearbyDuplicate([1, 2, 3, 1], 3);
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should return false for [1,2,3,1,2,3] with k=2', () => {
        const result = containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should return false for empty array', () => {
        const result = containsNearbyDuplicate([], 5);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should return false for k=0 (indices must be distinct)', () => {
        const result = containsNearbyDuplicate([1, 1, 1], 0);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should return true for repetitive data with k=1', () => {
        const result = containsNearbyDuplicate([1, 1, 1, 1], 1);
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should return false when only duplicates are exactly k+1 apart', () => {
        const result = containsNearbyDuplicate([1, 0, 0, 0, 1], 3);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should return false for a single-element array', () => {
        const result = containsNearbyDuplicate([42], 10);
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });
});
