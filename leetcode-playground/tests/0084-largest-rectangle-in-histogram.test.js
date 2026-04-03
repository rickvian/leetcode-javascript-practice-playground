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

    it('should handle empty array', () => {
        expect(largestRectangleArea([])).toBe(0);
    });

    // All same height
    it('should handle all same height: [3,3,3,3]', () => {
        expect(largestRectangleArea([3, 3, 3, 3])).toBe(12);
    });

    // Strictly increasing
    it('should handle strictly increasing sequence', () => {
        // [1, 2, 3, 4, 5]
        // H:5 W:1=5 | H:4 W:2=8 | H:3 W:3=9 | H:2 W:4=8 | H:1 W:5=5
        expect(largestRectangleArea([1, 2, 3, 4, 5])).toBe(9);
    });

    // Large cases
    it('should handle large array with increasing height', () => {
        const heights = Array.from({ length: 100 }, (_, i) => i + 1);
        // For [1...100], max area occurs at height 50 with width 51 (or vice versa)
        // Formula: height * (total_length - height + 1) -> 50 * (100 - 50 + 1) = 2550
        expect(largestRectangleArea(heights)).toBe(2550);
    });

    it('should handle large array with decreasing height', () => {
        const heights = Array.from({ length: 100 }, (_, i) => 100 - i);
        // Symmetry with increasing: 50 * 51 = 2550
        expect(largestRectangleArea(heights)).toBe(2550);
    });

    it('should handle large array alternating', () => {
        // [10, 1, 10, 1, ...]
        // Height 10 bars have width 1 (Area 10)
        // Height 1 bar has width 1000 (Area 1000)
        const heights = Array.from({ length: 1000 }, (_, i) => (i % 2 === 0 ? 10 : 1));
        expect(largestRectangleArea(heights)).toBe(1000);
    });

    // Mixed patterns
    it('should handle valley pattern: [5,2,5]', () => {
        // H:5 W:1=5 | H:2 W:3=6
        expect(largestRectangleArea([5, 2, 5])).toBe(6);
    });

    it('should handle [6,9,7]', () => {
        // H:9 W:1=9 | H:7 W:2=14 | H:6 W:3=18
        expect(largestRectangleArea([6, 9, 7])).toBe(18);
    });

    it('should handle [3,0,5,4,3]', () => {
        // Before 0: [3] -> Max 3
        // After 0: [5,4,3] -> H:5 W:1=5 | H:4 W:2=8 | H:3 W:3=9
        expect(largestRectangleArea([3, 0, 5, 4, 3])).toBe(9);
    });

    // Long mountain pattern
    it('should handle long mountain pattern', () => {
        const heights = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            9, 8, 7, 6, 5, 4, 3, 2, 1
        ];
        // Height 5 starts at index 4 and ends at index 14. Width = 11.
        // 5 * 11 = 55. 
        expect(largestRectangleArea(heights)).toBe(55);
    });

    // Large span with small barrier
    it('should handle [10,10,1,10,10]', () => {
        // Either the 10x2 blocks (20) or the 1x5 block (5)
        expect(largestRectangleArea([10, 10, 1, 10, 10])).toBe(20);
    });

    it('should handle alternating 0 and high values: [10,0,10,0,10]', () => {
        // Zeros break connectivity, so it's just the max single bar
        expect(largestRectangleArea([10, 0, 10, 0, 10])).toBe(10);
    });
});