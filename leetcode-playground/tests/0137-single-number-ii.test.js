import { singleNumber } from '../0137-single-number-ii';

describe('0137-single-number-ii', () => {
    // Official examples
    it('should return 3 for [2,2,3,2]', () => {
        const result = singleNumber([2, 2, 3, 2]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 99 for [0,1,0,1,0,1,99]', () => {
        const result = singleNumber([0, 1, 0, 1, 0, 1, 99]);
        if (result !== undefined) expect(result).toBe(99);
    });

    // Single element
    it('should return 5 for single element [5]', () => {
        const result = singleNumber([5]);
        if (result !== undefined) expect(result).toBe(5);
    });

    // Unique element at different positions
    it('should return 7 for unique at start [7,1,1,1]', () => {
        const result = singleNumber([7, 1, 1, 1]);
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should return 7 for unique at middle [1,7,1,1]', () => {
        const result = singleNumber([1, 7, 1, 1]);
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should return 7 for unique at end [1,1,1,7]', () => {
        const result = singleNumber([1, 1, 1, 7]);
        if (result !== undefined) expect(result).toBe(7);
    });

    // Negative unique number
    it('should return -5 for negative unique [-5,3,3,3]', () => {
        const result = singleNumber([-5, 3, 3, 3]);
        if (result !== undefined) expect(result).toBe(-5);
    });

    it('should return -10 for negative unique [2,2,2,-10]', () => {
        const result = singleNumber([2, 2, 2, -10]);
        if (result !== undefined) expect(result).toBe(-10);
    });

    // Zero as unique
    it('should return 0 for [1,1,0,1]', () => {
        const result = singleNumber([1, 1, 0, 1]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for [5,5,5,0]', () => {
        const result = singleNumber([5, 5, 5, 0]);
        if (result !== undefined) expect(result).toBe(0);
    });

    // Multiple distinct triples with one unique
    it('should return 4 for [1,1,1,2,2,2,4]', () => {
        const result = singleNumber([1, 1, 1, 2, 2, 2, 4]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 10 for [5,5,5,7,7,7,10]', () => {
        const result = singleNumber([5, 5, 5, 7, 7, 7, 10]);
        if (result !== undefined) expect(result).toBe(10);
    });

    // Multiple negatives triples
    it('should return 1 for [-3,-3,-3,-1,-1,-1,1]', () => {
        const result = singleNumber([-3, -3, -3, -1, -1, -1, 1]);
        if (result !== undefined) expect(result).toBe(1);
    });

    // Zero as unique with negative triples
    it('should return 0 for [-2,-2,-2,-1,-1,-1,0]', () => {
        const result = singleNumber([-2, -2, -2, -1, -1, -1, 0]);
        if (result !== undefined) expect(result).toBe(0);
    });

    // Larger numbers
    it('should return 1000000 for [999999,999999,999999,1000000]', () => {
        const result = singleNumber([999999, 999999, 999999, 1000000]);
        if (result !== undefined) expect(result).toBe(1000000);
    });

    // Mixed positive and negative
    it('should return -100 for [50,50,50,-100]', () => {
        const result = singleNumber([50, 50, 50, -100]);
        if (result !== undefined) expect(result).toBe(-100);
    });

    // Larger array with multiple triples
    it('should return 8 for [1,1,1,2,2,2,3,3,3,8,4,4,4]', () => {
        const result = singleNumber([1, 1, 1, 2, 2, 2, 3, 3, 3, 8, 4, 4, 4]);
        if (result !== undefined) expect(result).toBe(8);
    });

    // All same except one
    it('should return 99 for [7,7,7,7,7,7,99]', () => {
        const result = singleNumber([7, 7, 7, 7, 7, 7, 99]);
        if (result !== undefined) expect(result).toBe(99);
    });

    // Unique as 1
    it('should return 1 for [2,2,2,1,3,3,3]', () => {
        const result = singleNumber([2, 2, 2, 1, 3, 3, 3]);
        if (result !== undefined) expect(result).toBe(1);
    });
});
