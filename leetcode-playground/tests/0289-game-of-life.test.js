import { gameOfLife } from '../0289-game-of-life';

describe('0289-game-of-life', () => {
    it('should handle LeetCode example 1', () => {
        const board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
        gameOfLife(board);
        expect(board).toEqual([[0,0,0],[1,0,1],[0,1,1],[0,1,0]]);
    });

    it('should handle LeetCode example 2', () => {
        const board = [[1,1],[1,0]];
        gameOfLife(board);
        expect(board).toEqual([[1,1],[1,1]]);
    });

    it('should handle all dead cells', () => {
        const board = [[0,0],[0,0]];
        gameOfLife(board);
        expect(board).toEqual([[0,0],[0,0]]);
    });

    it('should handle all live cells 2x2', () => {
        const board = [[1,1],[1,1]];
        gameOfLife(board);
        expect(board).toEqual([[1,1],[1,1]]);
    });

    it('should handle single live cell dies', () => {
        const board = [[1]];
        gameOfLife(board);
        expect(board).toEqual([[0]]);
    });

    it('should handle single dead cell stays dead', () => {
        const board = [[0]];
        gameOfLife(board);
        expect(board).toEqual([[0]]);
    });

    it('should handle 1x3 blinker horizontal', () => {
        const board = [[0,1,0],[0,1,0],[0,1,0]];
        gameOfLife(board);
        expect(board).toEqual([[0,0,0],[1,1,1],[0,0,0]]);
    });
});
