import { maxProduct } from '../0152-maximum-product-subarray';

describe('0152-maximum-product-subarray', () => {
    it('should return 6 for [2,3,-2,4]', () => {
        expect(maxProduct([2, 3, -2, 4])).toBe(6);
    });

    it('should return 0 for [-2,0,-1]', () => {
        expect(maxProduct([-2, 0, -1])).toBe(0);
    });

    it('should handle single element', () => {
        expect(maxProduct([3])).toBe(3);
    });

    it('should handle single negative element', () => {
        expect(maxProduct([-2])).toBe(-2);
    });

    it('should handle all negative even count', () => {
        expect(maxProduct([-2, -3, -4])).toBe(12);
    });

    it('should handle zeros in array', () => {
        expect(maxProduct([0, 2])).toBe(2);
    });

    it('should handle large product', () => {
        expect(maxProduct([2, 3, 4])).toBe(24);
    });

    it('should handle negative with positive', () => {
        expect(maxProduct([-2, 3, -4])).toBe(24);
    });

    it('should handle multiple zeros', () => {
        expect(maxProduct([-1, 0, -2, 0, 3])).toBe(3);
    });
});
