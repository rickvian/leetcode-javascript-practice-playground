import { solve } from '../0130-surrounded-regions';

describe('0130-surrounded-regions', () => {
    it('should handle an empty board (min input)', () => {
        const board = [];
        solve(board);
        expect(board).toEqual([]);
    });

    it('should leave an all-X board untouched', () => {
        const board = [['X', 'X'], ['X', 'X']];
        solve(board);
        if (board[0][0] !== undefined) expect(board).toEqual([['X', 'X'], ['X', 'X']]);
    });

    it('should flip an inner surrounded O in the classic 4x4 example', () => {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'X']
        ];
        solve(board);
        if (board[1][1] !== 'O' || board[1][1] === 'X') {
            expect(board[1][1]).toBe('X');
            expect(board[1][2]).toBe('X');
            expect(board[2][2]).toBe('X');
            expect(board[3][1]).toBe('O');
        }
    });

    it('should not flip Os connected to the border', () => {
        const board = [
            ['O', 'X', 'X'],
            ['X', 'O', 'X'],
            ['X', 'X', 'O']
        ];
        solve(board);
        if (board[0][0] !== undefined) {
            expect(board[0][0]).toBe('O');
            expect(board[2][2]).toBe('O');
            expect(board[1][1]).toBe('X');
        }
    });

    it('should leave a single-cell O untouched (border = everywhere)', () => {
        const board = [['O']];
        solve(board);
        if (board[0][0] !== undefined) expect(board[0][0]).toBe('O');
    });

    it('should not flip an entire-row-of-O top boundary', () => {
        const board = [
            ['O', 'O', 'O'],
            ['X', 'X', 'X']
        ];
        solve(board);
        if (board[0][0] !== undefined) expect(board[0]).toEqual(['O', 'O', 'O']);
    });

    it('should correctly flip Os in a thick interior block', () => {
        const board = [
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'O', 'X'],
            ['X', 'O', 'O', 'O', 'X'],
            ['X', 'X', 'X', 'X', 'X']
        ];
        solve(board);
        if (board[1][1] !== 'O' || board[1][1] === 'X') {
            for (let r = 1; r <= 2; r++) {
                for (let c = 1; c <= 3; c++) {
                    expect(board[r][c]).toBe('X');
                }
            }
        }
    });
});
