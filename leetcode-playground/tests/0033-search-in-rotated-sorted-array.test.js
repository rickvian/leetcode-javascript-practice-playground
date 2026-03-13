import { search } from '../0033-search-in-rotated-sorted-array';

describe('0033-search-in-rotated-sorted-array', () => {
    it('should return 4 for [4,5,6,7,0,1,2], target = 0', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    });

    it('should return -1 for [4,5,6,7,0,1,2], target = 3', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    });

    it('should return 0 for [1], target = 1', () => {
        expect(search([1], 1)).toBe(0);
    });

    it('should handle target at beginning of rotated array', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 4)).toBe(0);
    });

    it('should handle target at end of rotated array', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 2)).toBe(6);
    });

    it('should handle non-rotated array', () => {
        expect(search([1, 3, 5, 7, 9], 5)).toBe(2);
    });

    it('should return -1 for target not in non-rotated array', () => {
        expect(search([1, 3, 5, 7, 9], 6)).toBe(-1);
    });

    it('should handle target in lower half of rotated array', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 5)).toBe(1);
    });

    it('should handle target in upper half of rotated array', () => {
        expect(search([4, 5, 6, 7, 0, 1, 2], 7)).toBe(3);
    });

    it('should handle large rotated array', () => {
        const arr = [7, 8, 9, 10, 1, 2, 3, 4, 5, 6];
        expect(search(arr, 1)).toBe(4);
    });

    it('should handle rotation at index 0', () => {
        expect(search([1, 2, 3, 4, 5], 3)).toBe(2);
    });
});
