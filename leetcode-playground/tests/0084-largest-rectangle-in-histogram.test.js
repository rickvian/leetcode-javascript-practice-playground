import { largestRectangleArea } from '../0084-largest-rectangle-in-histogram.js';
import { describe, it, expect } from '@jest/globals';

describe('0084-largest-rectangle-in-histogram', () => {
    // Basic test cases
    it('should handle example case 1: [2,1,5,6,2,3]', () => {
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
    });

    it('should handle example case 2: [2,4]', () => {
        expect(largestRectangleArea([2, 4])).toBe(4);
    });

    // Edge cases
    it('should handle single element', () => {
        expect(largestRectangleArea([5])).toBe(5);
    });

    it('should handle single element: [0]', () => {
        expect(largestRectangleArea([0])).toBe(0);
    });

    it('should handle single element: [1]', () => {
        expect(largestRectangleArea([1])).toBe(1);
    });

    it('should handle two elements ascending', () => {
        expect(largestRectangleArea([1, 2])).toBe(2);
    });

    it('should handle two elements descending', () => {
        expect(largestRectangleArea([2, 1])).toBe(2);
    });

    it('should handle empty array', () => {
        expect(largestRectangleArea([])).toBe(0);
    });

    // All same height
    it('should handle all same height: [3,3,3,3]', () => {
        expect(largestRectangleArea([3, 3, 3, 3])).toBe(12);
    });

    it('should handle all same height: [1,1,1,1,1]', () => {
        expect(largestRectangleArea([1, 1, 1, 1, 1])).toBe(5);
    });

    // Strictly increasing
    it('should handle strictly increasing sequence', () => {
        expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9);
    });

    // Strictly decreasing
    it('should handle strictly decreasing sequence', () => {
        expect(largestRectangleArea([5, 4, 3, 2, 1])).toBe(5);
    });

    // Mixed patterns
    it('should handle valley pattern: [5,2,5]', () => {
        expect(largestRectangleArea([5, 2, 5])).toBe(6);
    });

    it('should handle peak pattern: [2,5,2]', () => {
        expect(largestRectangleArea([2, 5, 2])).toBe(5);
    });

    it('should handle zigzag pattern: [1,3,1,3,1]', () => {
        expect(largestRectangleArea([1, 3, 1, 3, 1])).toBe(3);
    });

    // Zero heights
    it('should handle all zeros', () => {
        expect(largestRectangleArea([0, 0, 0, 0])).toBe(0);
    });

    it('should handle zeros with heights: [0,5,0]', () => {
        expect(largestRectangleArea([0, 5, 0])).toBe(5);
    });

    it('should handle leading zeros: [0,0,5,5]', () => {
        expect(largestRectangleArea([0, 0, 5, 5])).toBe(10);
    });

    it('should handle trailing zeros: [5,5,0,0]', () => {
        expect(largestRectangleArea([5, 5, 0, 0])).toBe(10);
    });

    // Large cases
    it('should handle large array with uniform height', () => {
        const heights = Array(1000).fill(5);
        expect(largestRectangleArea(heights)).toBe(5000);
    });

    it('should handle large array with increasing height', () => {
        const heights = Array.from({ length: 100 }, (_, i) => i + 1);
        // For strictly increasing, the largest rectangle is the first element
        // Actually for [1,2,3,...,100], max area at height 1 is 100, at height 2 is 99*2=198, etc.
        expect(largestRectangleArea(heights)).toBe(5050);
    });

    it('should handle large array with decreasing height', () => {
        const heights = Array.from({ length: 100 }, (_, i) => 100 - i);
        // For [100,99,98,...,1], max area is 100*1
        expect(largestRectangleArea(heights)).toBe(100);
    });

    it('should handle large array alternating', () => {
        const heights = Array.from({ length: 1000 }, (_, i) => (i % 2 === 0 ? 10 : 1));
        expect(largestRectangleArea(heights)).toBe(500);
    });

    // Complex patterns
    it('should handle [6,9,7]', () => {
        expect(largestRectangleArea([6, 9, 7])).toBe(15);
    });

    it('should handle [3,0,2,0,4]', () => {
        expect(largestRectangleArea([3, 0, 2, 0, 4])).toBe(4);
    });

    it('should handle [3,0,5,4,3]', () => {
        expect(largestRectangleArea([3, 0, 5, 4, 3])).toBe(9);
    });

    it('should handle [2,1,5,6,2,3] again with visual check', () => {
        // Histogram: 2 1 5 6 2 3
        // Largest rectangle: height 6, width 1 = 6
        // Or: height 5, width 2 (indices 2,3 with height 5) = 10 ✓
        // Or: height 2, width 5 = 10 ✓
        expect(largestRectangleArea([2, 1, 5, 6, 2, 3])).toBe(10);
    });

    // Boundary values
    it('should handle max value: [100000]', () => {
        expect(largestRectangleArea([100000])).toBe(100000);
    });

    it('should handle multiple max values: [100000,100000,100000]', () => {
        expect(largestRectangleArea([100000, 100000, 100000])).toBe(300000);
    });

    // Long increasing then decreasing
    it('should handle long mountain pattern', () => {
        const heights = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            9, 8, 7, 6, 5, 4, 3, 2, 1
        ];
        expect(largestRectangleArea(heights)).toBe(55);
    });

    // Performance test: very large array
    it('should handle performance with 5000 elements', () => {
        const heights = Array.from({ length: 5000 }, (_, i) => (i % 100) + 1);
        const result = largestRectangleArea(heights);
        expect(typeof result).toBe('number');
        expect(result).toBeGreaterThan(0);
    });

    // Edge case: alternating 0 and max
    it('should handle alternating 0 and high values: [10,0,10,0,10]', () => {
        expect(largestRectangleArea([10, 0, 10, 0, 10])).toBe(10);
    });

    // Large span with small barrier
    it('should handle [10,10,1,10,10]', () => {
        expect(largestRectangleArea([10, 10, 1, 10, 10])).toBe(20);
    });
});
