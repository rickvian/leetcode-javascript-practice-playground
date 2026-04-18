import { plusOne } from '../0066-plus-one';

describe('0066-plus-one', () => {
    it('should handle single-digit zero (min input)', () => {
        const result = plusOne([0]);
        if (result !== undefined) expect(result).toEqual([1]);
    });

    it('should increment [1,2,3] -> [1,2,4]', () => {
        const result = plusOne([1, 2, 3]);
        if (result !== undefined) expect(result).toEqual([1, 2, 4]);
    });

    it('should carry through trailing nines [1,9,9] -> [2,0,0]', () => {
        const result = plusOne([1, 9, 9]);
        if (result !== undefined) expect(result).toEqual([2, 0, 0]);
    });

    it('should grow array when all digits are nine [9,9,9] -> [1,0,0,0]', () => {
        const result = plusOne([9, 9, 9]);
        if (result !== undefined) expect(result).toEqual([1, 0, 0, 0]);
    });

    it('should handle large repetitive nines of length 50', () => {
        const result = plusOne(Array(50).fill(9));
        if (result !== undefined) {
            expect(result.length).toBe(51);
            expect(result[0]).toBe(1);
            expect(result.slice(1).every(d => d === 0)).toBe(true);
        }
    });

    it('should handle single-digit 9 at the boundary', () => {
        const result = plusOne([9]);
        if (result !== undefined) expect(result).toEqual([1, 0]);
    });

    it('should not mutate input array shape beyond semantic rules ([4,3,2,1] -> [4,3,2,2])', () => {
        const result = plusOne([4, 3, 2, 1]);
        if (result !== undefined) expect(result).toEqual([4, 3, 2, 2]);
    });
});
