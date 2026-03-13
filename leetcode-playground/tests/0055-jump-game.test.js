import { canJump } from '../0055-jump-game';

describe('0055-jump-game', () => {
    it('should return true when you can reach the last index', () => {
        expect(canJump([2, 3, 1, 1, 4])).toBe(true);
    });

    it('should return false when you cannot reach the last index', () => {
        expect(canJump([3, 2, 1, 0, 4])).toBe(false);
    });

    it('should return true for a single element array', () => {
        expect(canJump([0])).toBe(true);
    });
});
