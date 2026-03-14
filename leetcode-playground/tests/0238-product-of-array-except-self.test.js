import { productExceptSelf } from '../0238-product-of-array-except-self';

describe('0238-product-of-array-except-self', () => {
    it('should return [24,12,8,6] for [1,2,3,4]', () => {
        expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    });

    it('should return [0,0,9,0,0] for [-1,1,0,-3,3]', () => {
        expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
    });

    it('should handle two elements', () => {
        expect(productExceptSelf([1, 2])).toEqual([2, 1]);
    });

    it('should handle array with one zero', () => {
        expect(productExceptSelf([0, 1, 2, 3])).toEqual([6, 0, 0, 0]);
    });

    it('should handle array with two zeros', () => {
        expect(productExceptSelf([0, 0, 1, 2])).toEqual([0, 0, 0, 0]);
    });

    it('should handle array with negative numbers', () => {
        expect(productExceptSelf([-1, -2, -3, -4])).toEqual([-24, -12, -8, -6]);
    });

    it('should handle array with all ones', () => {
        expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
    });

    it('should handle large product values', () => {
        const result = productExceptSelf([2, 3, 4, 5]);
        expect(result).toEqual([60, 40, 30, 24]);
    });
});
