import { exist } from '../0079-word-search';

describe('0079-word-search', () => {
    const board = [
        ["A","B","C","E"],
        ["S","F","C","S"],
        ["A","D","E","E"]
    ];

    it('should return true for word="ABCCED" on standard board', () => {
        expect(exist(board, "ABCCED")).toBe(true);
    });

    it('should return true for word="SEE" on standard board', () => {
        expect(exist(board, "SEE")).toBe(true);
    });

    it('should return false for word="ABCB" on standard board (cannot reuse cells)', () => {
        expect(exist(board, "ABCB")).toBe(false);
    });

    it('should return true for 1x1 board [["a"]] and word="a"', () => {
        expect(exist([["a"]], "a")).toBe(true);
    });

    it('should return false for 1x1 board [["a"]] and word="b"', () => {
        expect(exist([["a"]], "b")).toBe(false);
    });

    it('should return false when word is longer than total board cells', () => {
        expect(exist([["a","b"],["c","d"]], "abcde")).toBe(false);
    });

    it('should return true for board=[["A","B"],["C","D"]], word="ABDC"', () => {
        expect(exist([["A","B"],["C","D"]], "ABDC")).toBe(true);
    });

    it('should return false for board=[["A","B"],["C","D"]], word="ABCD"', () => {
        expect(exist([["A","B"],["C","D"]], "ABCD")).toBe(false);
    });
});
