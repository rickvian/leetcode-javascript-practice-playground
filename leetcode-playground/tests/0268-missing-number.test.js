import { missingNumber } from '../0268-missing-number';

describe('0268-missing-number', () => {
    it('should return 2 for [3,0,1]', () => {
        expect(missingNumber([3, 0, 1])).toBe(2);
    });

    it('should return 2 for [0,1]', () => {
        expect(missingNumber([0, 1])).toBe(2);
    });

    it('should return 8 for [9,6,4,2,3,5,7,0,1]', () => {
        expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8);
    });

    it('should return 1 for [0]', () => {
        expect(missingNumber([0])).toBe(1);
    });

    it('should return 0 for [1]', () => {
        expect(missingNumber([1])).toBe(0);
    });

    it('should return 0 for [1,2,3]', () => {
        expect(missingNumber([1, 2, 3])).toBe(0);
    });

    it('should return n for [0,1,2,...,n-1]', () => {
        expect(missingNumber([0, 1, 2, 3, 4])).toBe(5);
    });

    it('should handle large n', () => {
        const nums = Array.from({ length: 99 }, (_, i) => i);
        // missing 99
        expect(missingNumber(nums)).toBe(99);
    });
});
