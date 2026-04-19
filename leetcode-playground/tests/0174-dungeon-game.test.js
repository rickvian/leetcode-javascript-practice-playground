import { calculateMinimumHP } from '../0174-dungeon-game';

describe('0174-dungeon-game', () => {
    it('should return 7 for the canonical LeetCode example', () => {
        const dungeon = [[-2, -3, 3], [-5, -10, 1], [10, 30, -5]];
        const result = calculateMinimumHP(dungeon);
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should require at least 1 HP for a single positive cell', () => {
        const result = calculateMinimumHP([[0]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should require 1 HP for a single very-positive cell (never drop below 1)', () => {
        const result = calculateMinimumHP([[100]]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should account for damage in a single negative cell', () => {
        const result = calculateMinimumHP([[-3]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle single-row dungeon with mixed values', () => {
        const result = calculateMinimumHP([[1, -3, 3]]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle single-column dungeon with mixed values', () => {
        const result = calculateMinimumHP([[1], [-4], [3]]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle repetitive zero cells (always at least 1)', () => {
        const result = calculateMinimumHP([[0, 0], [0, 0]]);
        if (result !== undefined) expect(result).toBe(1);
    });
});
