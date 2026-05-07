import { snakesAndLadders } from '../0909-snakes-and-ladders';

describe('0909-snakes-and-ladders', () => {
    it('should handle LeetCode example 1 - board with ladder and snake', () => {
        const board = [[-1,4,-1],[6,-1,6],[-1,6,-1]];
        expect(snakesAndLadders(board)).toEqual(2);
    });

    it('should handle LeetCode example 2 - board with ladder', () => {
        const board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]];
        expect(snakesAndLadders(board)).toEqual(4);
    });

    it('should handle 2x2 board - no snakes or ladders', () => {
        const board = [[-1,-1],[-1,-1]];
        expect(snakesAndLadders(board)).toEqual(1);
    });

    it('should handle 2x2 board with immediate ladder to goal', () => {
        const board = [[-1,4],[-1,3]];
        expect(snakesAndLadders(board)).toEqual(1);
    });

    it('should handle single element board', () => {
        const board = [[-1]];
        expect(snakesAndLadders(board)).toEqual(0);
    });

    it('should handle board where all ladder destinations lead to snakes', () => {
        const board = [[-1,-1,-1],[-1,-1,16],[-1,15,-1]];
        expect(snakesAndLadders(board)).toEqual(2);
    });

    it('should handle 3x3 board - no snakes or ladders', () => {
        const board = [[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];
        expect(snakesAndLadders(board)).toEqual(2);
    });

    it('should handle 3x3 board with snake reducing distance', () => {
        const board = [[-1,-1,-1],[-1,2,-1],[-1,-1,-1]];
        expect(snakesAndLadders(board)).toEqual(2);
    });

    it('should handle 4x4 board with mixed snakes and ladders', () => {
        const board = [[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,-1,-1,-1],[-1,14,-1,31]];
        expect(snakesAndLadders(board)).toEqual(2);
    });

    it('should handle board with snake chain (unreachable goal)', () => {
        const board = [[-1,-1,-1],[-1,-1,-1],[2,-1,-1]];
        expect(snakesAndLadders(board)).toEqual(2);
    });

    it('should handle board where ladder directly reaches goal', () => {
        const board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,36]];
        expect(snakesAndLadders(board)).toEqual(1);
    });

    it('should handle 5x5 board - no snakes or ladders', () => {
        const board = [[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1]];
        expect(snakesAndLadders(board)).toEqual(4);
    });
});
