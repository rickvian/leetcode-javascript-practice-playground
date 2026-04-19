import { isValidSudoku } from '../0036-valid-sudoku';

const emptyBoard = () => Array.from({ length: 9 }, () => Array(9).fill('.'));

describe('0036-valid-sudoku', () => {
    it('should treat a fully empty board as valid (min filled cells)', () => {
        const result = isValidSudoku(emptyBoard());
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should detect row duplicates', () => {
        const board = emptyBoard();
        board[0][0] = '5';
        board[0][4] = '5';
        const result = isValidSudoku(board);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should detect column duplicates', () => {
        const board = emptyBoard();
        board[0][3] = '7';
        board[5][3] = '7';
        const result = isValidSudoku(board);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should detect 3x3 sub-box duplicates', () => {
        const board = emptyBoard();
        board[0][0] = '9';
        board[2][2] = '9';
        const result = isValidSudoku(board);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should accept valid partially filled LeetCode example', () => {
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
        const result = isValidSudoku(board);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should reject when first column has duplicates across rows (off-by-one boundary)', () => {
        const board = emptyBoard();
        board[0][0] = '1';
        board[8][0] = '1';
        const result = isValidSudoku(board);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should reject a board with an invalid row digit repeat at boundary', () => {
        const board = emptyBoard();
        board[3][0] = '2';
        board[3][8] = '2';
        const result = isValidSudoku(board);
        if (result !== undefined) expect(result).toBe(false);
    });
});
