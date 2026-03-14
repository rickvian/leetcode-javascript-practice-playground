import { countBits } from '../0338-counting-bits';

describe('0338-counting-bits', () => {
    it('should return [0,1,1] for n=2', () => {
        expect(countBits(2)).toEqual([0, 1, 1]);
    });

    it('should return [0,1,1,2,1,2] for n=5', () => {
        expect(countBits(5)).toEqual([0, 1, 1, 2, 1, 2]);
    });

    it('should handle n=0', () => {
        expect(countBits(0)).toEqual([0]);
    });

    it('should handle n=1', () => {
        expect(countBits(1)).toEqual([0, 1]);
    });

    it('should handle n=4', () => {
        expect(countBits(4)).toEqual([0, 1, 1, 2, 1]);
    });

    it('should handle n=7', () => {
        expect(countBits(7)).toEqual([0, 1, 1, 2, 1, 2, 2, 3]);
    });

    it('should have correct length n+1', () => {
        const result = countBits(10);
        expect(result).toHaveLength(11);
    });

    it('should handle n=8', () => {
        expect(countBits(8)).toEqual([0, 1, 1, 2, 1, 2, 2, 3, 1]);
    });

    it('should correctly count bits for powers of 2', () => {
        const result = countBits(16);
        // Powers of 2 should have exactly 1 bit
        expect(result[1]).toBe(1);
        expect(result[2]).toBe(1);
        expect(result[4]).toBe(1);
        expect(result[8]).toBe(1);
        expect(result[16]).toBe(1);
    });
});
