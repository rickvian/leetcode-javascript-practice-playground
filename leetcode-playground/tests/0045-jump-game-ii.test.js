import { jump } from '../0045-jump-game-ii';

describe('0045-jump-game-ii', () => {
    // Official examples
    it('should return 2 for [2,3,1,1,4]', () => {
        expect(jump([2, 3, 1, 1, 4])).toBe(2);
    });

    it('should return 2 for [2,3,0,1,4]', () => {
        expect(jump([2, 3, 0, 1, 4])).toBe(2);
    });

    // Single element — already at last index, 0 jumps
    it('should return 0 for single element [0]', () => {
        expect(jump([0])).toBe(0);
    });

    it('should return 0 for single element [5]', () => {
        expect(jump([5])).toBe(0);
    });

    // All 1s — requires n-1 jumps
    it('should return 4 for [1,1,1,1,1] (all ones, n-1 jumps)', () => {
        expect(jump([1, 1, 1, 1, 1])).toBe(4);
    });

    it('should return 2 for [1,1,1]', () => {
        expect(jump([1, 1, 1])).toBe(2);
    });

    // Large first jump reaches end in 1 jump
    it('should return 1 for [10,1,1,1,1] (large first jump)', () => {
        expect(jump([10, 1, 1, 1, 1])).toBe(1);
    });

    it('should return 1 for [5,0,0,0,0]', () => {
        expect(jump([5, 0, 0, 0, 0])).toBe(1);
    });

    // Two-element arrays
    it('should return 1 for [1,0]', () => {
        expect(jump([1, 0])).toBe(1);
    });

    it('should return 1 for [2,1]', () => {
        expect(jump([2, 1])).toBe(1);
    });

    // Greedy choices — locally suboptimal jump leads to more jumps
    it('should return 2 for [4,1,1,3,1,1,1] (greedy chooses best reach)', () => {
        expect(jump([4, 1, 1, 3, 1, 1, 1])).toBe(2);
    });

    it('should return 3 for [1,2,3,4,5]', () => {
        expect(jump([1, 2, 3, 4, 5])).toBe(3);
    });

    it('should return 3 for [3,4,3,2,5,4,3]', () => {
        expect(jump([3, 4, 3, 2, 5, 4, 3])).toBe(3);
    });
});
