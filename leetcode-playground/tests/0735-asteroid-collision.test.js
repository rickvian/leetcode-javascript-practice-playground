import { asteroidCollision } from '../0735-asteroid-collision';

describe('0735-asteroid-collision', () => {
    it('should return [5, 10] when small left-moving hits nothing and right-moving remains', () => {
        expect(asteroidCollision([5, 10, -5])).toEqual([5, 10]);
    });

    it('should return [] when equal asteroids destroy each other', () => {
        expect(asteroidCollision([8, -8])).toEqual([]);
    });

    it('should return [10] when right-moving destroys left-moving', () => {
        expect(asteroidCollision([10, 2, -5])).toEqual([10]);
    });

    it('should return [-2, -1, 1, 2] when no collisions', () => {
        expect(asteroidCollision([-2, -1, 1, 2])).toEqual([-2, -1, 1, 2]);
    });

    it('should handle empty array', () => {
        expect(asteroidCollision([])).toEqual([]);
    });

    it('should handle single asteroid', () => {
        expect(asteroidCollision([5])).toEqual([5]);
        expect(asteroidCollision([-5])).toEqual([-5]);
    });

    it('should handle all moving right (no collisions)', () => {
        expect(asteroidCollision([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should handle all moving left (no collisions)', () => {
        expect(asteroidCollision([-1, -2, -3])).toEqual([-1, -2, -3]);
    });

    it('should handle chain destruction', () => {
        // Each left-mover meets its equal right-mover: 3&-3 → both gone, 2&-2 → both gone, 1&-1 → both gone
        expect(asteroidCollision([1, 2, 3, -3, -2, -1])).toEqual([]);
    });

    it('should handle left-moving first (no collision)', () => {
        expect(asteroidCollision([-5, 5])).toEqual([-5, 5]);
    });

    it('should survive multiple right-movers being destroyed before large left-mover', () => {
        expect(asteroidCollision([3, 2, 1, -10])).toEqual([-10]);
    });

    it('should handle equal collision results in both destroyed', () => {
        expect(asteroidCollision([5, -5, 5, -5])).toEqual([]);
    });
});
