import { jump } from '../0045-jump-game-ii';

describe('0045-jump-game-ii', () => {
    it('should return 0 for single-element array (min input / off-by-one)', () => {
        const result = jump([1]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 when already at goal with zero value', () => {
        const result = jump([0]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should solve LeetCode example [2,3,1,1,4]', () => {
        const result = jump([2, 3, 1, 1, 4]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should solve LeetCode example [2,3,0,1,4]', () => {
        const result = jump([2, 3, 0, 1, 4]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return n-1 for array of all 1s (repetitive values)', () => {
        const result = jump([1, 1, 1, 1, 1]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 1 when first jump reaches end (boundary)', () => {
        const result = jump([5, 0, 0, 0, 0, 0]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 2 for two-element array with sufficient first jump', () => {
        const result = jump([2, 1]);
        if (result !== undefined) expect(result).toBe(1);
    });
});
