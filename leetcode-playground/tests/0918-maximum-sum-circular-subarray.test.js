import { maxSubarraySumCircular } from '../0918-maximum-sum-circular-subarray';

describe('0918-maximum-sum-circular-subarray', () => {
    // LeetCode official examples
    it('should return 3 for [1,-2,3,-2] (max is 3, not circular)', () => {
        expect(maxSubarraySumCircular([1, -2, 3, -2])).toEqual(3);
    });

    it('should return 10 for [5,-3,5] (circular wrapping around [5,-3,5] = 5+5 = 10)', () => {
        expect(maxSubarraySumCircular([5, -3, 5])).toEqual(10);
    });

    it('should return 15 for [1,2,3,4,5] (linear subarray beats circular)', () => {
        expect(maxSubarraySumCircular([1, 2, 3, 4, 5])).toEqual(15);
    });

    // All negative values: must return single largest element, not empty subarray
    it('should return -1 for [-1,-2,-3] (all negative, returns largest)', () => {
        expect(maxSubarraySumCircular([-1, -2, -3])).toEqual(-1);
    });

    it('should return -1 for [-5,-2,-8,-1,-9] (all negative, returns largest)', () => {
        expect(maxSubarraySumCircular([-5, -2, -8, -1, -9])).toEqual(-1);
    });

    // Single element
    it('should return 5 for [5] (single positive element)', () => {
        expect(maxSubarraySumCircular([5])).toEqual(5);
    });

    it('should return -3 for [-3] (single negative element)', () => {
        expect(maxSubarraySumCircular([-3])).toEqual(-3);
    });

    // Circular subarray beats linear subarray
    it('should return 7 for [3,-1,2,-1,3] (linear subarray [3,2,3] or [3,-1,2,-1,3])', () => {
        expect(maxSubarraySumCircular([3, -1, 2, -1, 3])).toEqual(7);
    });

    it('should return 11 for [2,-2,3,-3,4,-4,5,-5,6] (max subarray [5,6])', () => {
        expect(maxSubarraySumCircular([2, -2, 3, -3, 4, -4, 5, -5, 6])).toEqual(11);
    });

    // Linear subarray beats circular
    it('should return 8 for [2,1,3,1,1] (linear [2,1,3,1,1] beats wrapping)', () => {
        expect(maxSubarraySumCircular([2, 1, 3, 1, 1])).toEqual(8);
    });

    it('should return 12 for [1,2,3,4,2] (linear beats circular)', () => {
        expect(maxSubarraySumCircular([1, 2, 3, 4, 2])).toEqual(12);
    });

    // Mixed positive and negative: various patterns
    it('should return 6 for [-2,1,-3,4,-1,2,1,-5,4] (max subarray [4,-1,2,1])', () => {
        expect(maxSubarraySumCircular([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
    });

    it('should return 7 for [0,1,2,3,1] (linear [0,1,2,3,1])', () => {
        expect(maxSubarraySumCircular([0, 1, 2, 3, 1])).toEqual(7);
    });

    // Smallest negative in the middle creates large circular sum
    it('should return 12 for [5,1,-10,1,5] (circular [5,1,5] wrapping wins)', () => {
        expect(maxSubarraySumCircular([5, 1, -10, 1, 5])).toEqual(12);
    });

    // Multiple subarrays with same max
    it('should return 2 for [1,-2,1,-2,1] (linear wins over circular)', () => {
        expect(maxSubarraySumCircular([1, -2, 1, -2, 1])).toEqual(2);
    });

    // Zero values included
    it('should return 5 for [0,5,0,-1,0] (linear [0,5,0] or [5])', () => {
        expect(maxSubarraySumCircular([0, 5, 0, -1, 0])).toEqual(5);
    });

    // Two elements
    it('should return 3 for [1,2] (linear [1,2])', () => {
        expect(maxSubarraySumCircular([1, 2])).toEqual(3);
    });

    it('should return -1 for [-1,-2] (all negative, returns -1)', () => {
        expect(maxSubarraySumCircular([-1, -2])).toEqual(-1);
    });
});
