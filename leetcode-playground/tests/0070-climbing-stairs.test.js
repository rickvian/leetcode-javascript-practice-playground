import { climbStairs } from '../0070-climbing-stairs';

describe('0070-climbing-stairs', () => {
    it('should return correct number of ways to climb 2 stairs', () => {
        expect(climbStairs(2)).toBe(2);
    });

    it('should return correct number of ways to climb 3 stairs', () => {
        expect(climbStairs(3)).toBe(3);
    });

    it('should return correct number of ways to climb 4 stairs', () => {
        expect(climbStairs(4)).toBe(5);
    });
});
