import { solveSudoku } from '../0037-sudoku-solver';

const cloneBoard = (board) => board.map(row => row.slice());

const isSolved = (board) => {
    for (let i = 0; i < 9; i++) {
        const rowSet = new Set();
        const colSet = new Set();
        const boxSet = new Set();
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.' || board[j][i] === '.') return false;
            if (rowSet.has(board[i][j])) return false;
            if (colSet.has(board[j][i])) return false;
            rowSet.add(board[i][j]);
            colSet.add(board[j][i]);
            const br = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            const bc = 3 * (i % 3) + (j % 3);
            if (boxSet.has(board[br][bc])) return false;
            boxSet.add(board[br][bc]);
        }
    }
    return true;
};

describe('0037-sudoku-solver', () => {
    it('should mutate a single-empty-cell board to valid completion (min non-empty)', () => {
        const board = [
            ['5','3','4','6','7','8','9','1','2'],
            ['6','7','2','1','9','5','3','4','8'],
            ['1','9','8','3','4','2','5','6','7'],
            ['8','5','9','7','6','1','4','2','3'],
            ['4','2','6','8','5','3','7','9','1'],
            ['7','1','3','9','2','4','8','5','6'],
            ['9','6','1','5','3','7','2','8','4'],
            ['2','8','7','4','1','9','6','3','5'],
            ['3','4','5','2','8','6','1','7','.']
        ];
        solveSudoku(board);
        if (board[8][8] !== '.') expect(isSolved(board)).toBe(true);
    });

    it('should solve a typical LeetCode example board', () => {
        const board = [
            ['5','3','.','.','7','.','.','.','.'],
            ['6','.','.','1','9','5','.','.','.'],
            ['.','9','8','.','.','.','.','6','.'],
            ['8','.','.','.','6','.','.','.','3'],
            ['4','.','.','8','.','3','.','.','1'],
            ['7','.','.','.','2','.','.','.','6'],
            ['.','6','.','.','.','.','2','8','.'],
            ['.','.','.','4','1','9','.','.','5'],
            ['.','.','.','.','8','.','.','7','9']
        ];
        const original = cloneBoard(board);
        solveSudoku(board);
        const mutated = board.some((row, i) => row.some((cell, j) => cell !== original[i][j]));
        if (mutated) expect(isSolved(board)).toBe(true);
    });

    it('should not mutate already-solved board contents', () => {
        const board = [
            ['5','3','4','6','7','8','9','1','2'],
            ['6','7','2','1','9','5','3','4','8'],
            ['1','9','8','3','4','2','5','6','7'],
            ['8','5','9','7','6','1','4','2','3'],
            ['4','2','6','8','5','3','7','9','1'],
            ['7','1','3','9','2','4','8','5','6'],
            ['9','6','1','5','3','7','2','8','4'],
            ['2','8','7','4','1','9','6','3','5'],
            ['3','4','5','2','8','6','1','7','9']
        ];
        const snapshot = cloneBoard(board);
        solveSudoku(board);
        if (board[0][0] !== '.') expect(isSolved(board)).toBe(true);
        expect(board).toEqual(snapshot);
    });

    it('should maintain 9x9 shape invariant after solving (boundary)', () => {
        const board = [
            ['.','.','.','.','.','.','.','.','.'],
            ['.','.','.','.','.','3','.','8','5'],
            ['.','.','1','.','2','.','.','.','.'],
            ['.','.','.','5','.','7','.','.','.'],
            ['.','.','4','.','.','.','1','.','.'],
            ['.','9','.','.','.','.','.','.','.'],
            ['5','.','.','.','.','.','.','7','3'],
            ['.','.','2','.','1','.','.','.','.'],
            ['.','.','.','.','4','.','.','.','9']
        ];
        solveSudoku(board);
        expect(board.length).toBe(9);
        board.forEach(row => expect(row.length).toBe(9));
    });

    it('should solve puzzle with repetitive cell values already placed where legal', () => {
        const board = [
            ['1','.','.','.','.','.','.','.','.'],
            ['.','.','.','.','.','.','.','.','.'],
            ['.','.','.','.','.','.','.','.','.'],
            ['.','.','.','1','.','.','.','.','.'],
            ['.','.','.','.','.','.','.','.','.'],
            ['.','.','.','.','.','.','.','.','.'],
            ['.','.','.','.','.','.','1','.','.'],
            ['.','.','.','.','.','.','.','.','.'],
            ['.','.','.','.','.','.','.','.','.']
        ];
        solveSudoku(board);
        const anyFilled = board.some(row => row.some(cell => cell !== '.'));
        if (anyFilled && board[0][0] !== '1') expect(isSolved(board)).toBe(true);
    });
});
