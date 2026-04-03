import { findDuplicate } from '../0287-find-the-duplicate-number';

describe('0287-find-the-duplicate-number', () => {
    it('should find duplicate in array with one duplicate at end', () => {
        expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
    });

    it('should find duplicate in array with one duplicate at start', () => {
        expect(findDuplicate([3, 3, 3, 3, 3])).toBe(3);
    });

    it('should find duplicate when duplicate appears multiple times', () => {
        expect(findDuplicate([1, 4, 4, 2, 4])).toBe(4);
    });

    it('should find duplicate in small array', () => {
        expect(findDuplicate([1, 1])).toBe(1);
    });

    it('should find duplicate in array where duplicate is 1', () => {
        expect(findDuplicate([1, 1, 2])).toBe(1);
    });

    it('should find duplicate in array where duplicate is n', () => {
        expect(findDuplicate([2, 5, 9, 6, 4, 3, 7, 8, 1, 1])).toBe(1);
    });

    it('should find duplicate in larger array', () => {
        expect(findDuplicate([2, 5, 9, 6, 4, 3, 7, 8, 10, 1, 5])).toBe(5);
    });

    it('should find duplicate with n as range boundary', () => {
        expect(findDuplicate([1, 2, 3, 4, 5, 5])).toBe(5);
    });

    it('should find duplicate when it appears at beginning and middle', () => {
        expect(findDuplicate([2, 2, 2, 2, 2])).toBe(2);
    });
});
