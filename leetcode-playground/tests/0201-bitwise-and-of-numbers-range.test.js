import { rangeBitwiseAnd } from '../0201-bitwise-and-of-numbers-range';

describe('0201-bitwise-and-of-numbers-range', () => {
    it('should handle same left and right', () => {
        expect(rangeBitwiseAnd(5, 5)).toEqual(5);
    });

    it('should handle left=0 range', () => {
        expect(rangeBitwiseAnd(0, 5)).toEqual(0);
    });

    it('should handle power of 2 boundary', () => {
        expect(rangeBitwiseAnd(5, 6)).toEqual(4);
    });

    it('should handle single bit result', () => {
        expect(rangeBitwiseAnd(3, 4)).toEqual(0);
    });

    it('should handle range with common prefix', () => {
        expect(rangeBitwiseAnd(6, 7)).toEqual(6);
    });

    it('should handle larger range', () => {
        expect(rangeBitwiseAnd(0, 2147483647)).toEqual(0);
    });

    it('should handle adjacent same values', () => {
        expect(rangeBitwiseAnd(1, 2)).toEqual(0);
    });

    it('should handle range crossing multiple bits', () => {
        expect(rangeBitwiseAnd(1, 7)).toEqual(0);
    });

    it('should handle left=right with large value', () => {
        expect(rangeBitwiseAnd(2147483647, 2147483647)).toEqual(2147483647);
    });

    it('should handle consecutive numbers in mid-range', () => {
        expect(rangeBitwiseAnd(8, 9)).toEqual(8);
    });

    it('should handle range with clear common bits', () => {
        expect(rangeBitwiseAnd(12, 15)).toEqual(12);
    });

    it('should handle binary alternating pattern', () => {
        expect(rangeBitwiseAnd(10, 11)).toEqual(10);
    });
});
