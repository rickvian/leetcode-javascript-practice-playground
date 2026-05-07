import { solve } from '../0130-surrounded-regions';

describe('0130-surrounded-regions', () => {
    it('should handle official example 1', () => {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'X', 'X']
        ];
        const expected = [
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle official example 2', () => {
        const board = [
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'X'],
            ['X', 'X', 'O', 'X'],
            ['X', 'O', 'X', 'X']
        ];
        const expected = [
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X'],
            ['X', 'O', 'X', 'X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle all X board (no O to flip)', () => {
        const board = [
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'X']
        ];
        const expected = [
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle all O board (none flipped since all border-connected)', () => {
        const board = [
            ['O', 'O', 'O'],
            ['O', 'O', 'O'],
            ['O', 'O', 'O']
        ];
        const expected = [
            ['O', 'O', 'O'],
            ['O', 'O', 'O'],
            ['O', 'O', 'O']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should not flip O on border', () => {
        const board = [
            ['O', 'X', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'O']
        ];
        const expected = [
            ['O', 'X', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'O']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should flip O fully surrounded by X', () => {
        const board = [
            ['X', 'X', 'X'],
            ['X', 'O', 'X'],
            ['X', 'X', 'X']
        ];
        const expected = [
            ['X', 'X', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle 1xN board with single O', () => {
        const board = [['O']];
        const expected = [['O']];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle 1xN board all X', () => {
        const board = [['X', 'X', 'X', 'X']];
        const expected = [['X', 'X', 'X', 'X']];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle 1xN board all O', () => {
        const board = [['O', 'O', 'O', 'O']];
        const expected = [['O', 'O', 'O', 'O']];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle Nx1 board with single O', () => {
        const board = [['O'], ['O'], ['O']];
        const expected = [['O'], ['O'], ['O']];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle Nx1 board all X', () => {
        const board = [['X'], ['X'], ['X']];
        const expected = [['X'], ['X'], ['X']];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle multiple surrounded regions', () => {
        const board = [
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'O', 'X', 'O', 'X'],
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'O', 'X', 'O', 'X'],
            ['X', 'X', 'X', 'X', 'X']
        ];
        const expected = [
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle O connected to border via diagonal', () => {
        const board = [
            ['O', 'X', 'X'],
            ['X', 'O', 'X'],
            ['X', 'X', 'X']
        ];
        const expected = [
            ['O', 'X', 'X'],
            ['X', 'X', 'X'],
            ['X', 'X', 'X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle O in center not connected to border', () => {
        const board = [
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'O', 'X'],
            ['X', 'O', 'X', 'O', 'X'],
            ['X', 'O', 'O', 'O', 'X'],
            ['X', 'X', 'X', 'X', 'X']
        ];
        const expected = [
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle O only on edges (not flipped)', () => {
        const board = [
            ['O', 'O', 'O'],
            ['O', 'X', 'O'],
            ['O', 'O', 'O']
        ];
        const expected = [
            ['O', 'O', 'O'],
            ['O', 'X', 'O'],
            ['O', 'O', 'O']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle mixed pattern with border-connected and surrounded O', () => {
        const board = [
            ['O', 'X', 'X', 'X', 'O'],
            ['X', 'O', 'O', 'O', 'X'],
            ['X', 'O', 'X', 'O', 'X'],
            ['X', 'O', 'O', 'O', 'X'],
            ['O', 'X', 'X', 'X', 'O']
        ];
        const expected = [
            ['O', 'X', 'X', 'X', 'O'],
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X'],
            ['O', 'X', 'X', 'X', 'O']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle 2x2 all O (border-connected)', () => {
        const board = [
            ['O', 'O'],
            ['O', 'O']
        ];
        const expected = [
            ['O', 'O'],
            ['O', 'O']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle 2x2 with surrounded O', () => {
        const board = [
            ['X', 'X'],
            ['X', 'O']
        ];
        const expected = [
            ['X', 'X'],
            ['X', 'O']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle complex connected region', () => {
        const board = [
            ['X', 'X', 'X', 'X', 'X', 'X'],
            ['X', 'O', 'O', 'O', 'O', 'X'],
            ['X', 'O', 'X', 'X', 'O', 'X'],
            ['X', 'O', 'O', 'O', 'O', 'X'],
            ['X', 'X', 'X', 'X', 'X', 'X']
        ];
        const expected = [
            ['X', 'X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X', 'X'],
            ['X', 'X', 'X', 'X', 'X', 'X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });

    it('should handle partial border connection', () => {
        const board = [
            ['X', 'X', 'O', 'X', 'X'],
            ['X', 'O', 'O', 'O', 'X'],
            ['X', 'O', 'X', 'O', 'X'],
            ['X', 'O', 'O', 'O', 'X'],
            ['X', 'X', 'X', 'X', 'X']
        ];
        const expected = [
            ['X', 'X', 'O', 'X', 'X'],
            ['X', 'O', 'O', 'O', 'X'],
            ['X', 'O', 'X', 'O', 'X'],
            ['X', 'O', 'O', 'O', 'X'],
            ['X', 'X', 'X', 'X', 'X']
        ];
        solve(board);
        expect(board).toEqual(expected);
    });
});
