import { singleNumber } from '../0136-single-number';

describe('0136-single-number', () => {
    it('should handle official example 1', () => {
        expect(singleNumber([1, 1, 2, 2, 3])).toBe(3);
    });

    it('should handle official example 2', () => {
        expect(singleNumber([2, 2, 1])).toBe(1);
    });

    it('should handle official example 3', () => {
        expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
    });

    it('should handle single element array', () => {
        expect(singleNumber([5])).toBe(5);
    });

    it('should handle single number at the start', () => {
        expect(singleNumber([3, 1, 1, 2, 2])).toBe(3);
    });

    it('should handle single number at the end', () => {
        expect(singleNumber([1, 1, 2, 2, 3])).toBe(3);
    });

    it('should handle single number in the middle', () => {
        expect(singleNumber([1, 1, 2, 3, 3])).toBe(2);
    });

    it('should handle negative numbers', () => {
        expect(singleNumber([-1, -1, 2, 2, 3])).toBe(3);
    });

    it('should handle zero as the unique number', () => {
        expect(singleNumber([0, 1, 1, 2, 2])).toBe(0);
    });

    it('should handle single number with all negative pairs', () => {
        expect(singleNumber([-2, -2, -1, -1, 5])).toBe(5);
    });

    it('should handle all zeros except one', () => {
        expect(singleNumber([0, 0, 1])).toBe(1);
    });

    it('should handle mixed positive and negative', () => {
        expect(singleNumber([-3, -3, 1, 1, 7])).toBe(7);
    });

    it('should handle single large number', () => {
        expect(singleNumber([1, 1, 2, 2, 1000000])).toBe(1000000);
    });

    it('should handle negative single large number', () => {
        expect(singleNumber([1, 1, 2, 2, -1000000])).toBe(-1000000);
    });

    it('should handle five pairs with one single', () => {
        expect(singleNumber([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6])).toBe(6);
    });

    it('should handle single number between larger pairs', () => {
        expect(singleNumber([100, 100, 5, 200, 200])).toBe(5);
    });

    it('should handle single at start of larger array', () => {
        expect(singleNumber([7, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5])).toBe(7);
    });

    it('should handle single with all zeros and ones', () => {
        expect(singleNumber([0, 0, 1, 1, 2])).toBe(2);
    });

    it('should handle alternating pairs with single', () => {
        expect(singleNumber([10, 20, 10, 30, 20, 30, 99])).toBe(99);
    });
});
