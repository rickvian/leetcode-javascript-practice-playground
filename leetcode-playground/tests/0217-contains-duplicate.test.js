import { containsDuplicate } from '../0217-contains-duplicate';

describe('0217-contains-duplicate', () => {
    it('should return true for [1,2,3,1]', () => {
        expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
    });

    it('should return false for [1,2,3,4]', () => {
        expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
    });

    it('should return true for [1,1,1,3,3,4,3,2,4,2]', () => {
        expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });

    it('should return false for single element', () => {
        expect(containsDuplicate([1])).toBe(false);
    });

    it('should return false for empty array', () => {
        expect(containsDuplicate([])).toBe(false);
    });

    it('should handle negative numbers with duplicates', () => {
        expect(containsDuplicate([-1, -2, -3, -1])).toBe(true);
    });

    it('should handle negative numbers without duplicates', () => {
        expect(containsDuplicate([-1, -2, -3, -4])).toBe(false);
    });

    it('should return true for two same elements', () => {
        expect(containsDuplicate([5, 5])).toBe(true);
    });
});
