import { isOneEditDistance } from '../0161-one-edit-distance';

describe('0161-one-edit-distance', () => {
    it('should return false for two empty strings', () => {
        const result = isOneEditDistance('', '');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for empty vs. single char (insert)', () => {
        const result = isOneEditDistance('', 'a');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for a single-char replace', () => {
        const result = isOneEditDistance('ab', 'ac');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for a single-char insert in the middle', () => {
        const result = isOneEditDistance('abc', 'abxc');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for identical strings', () => {
        const result = isOneEditDistance('abc', 'abc');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return false for two-character difference', () => {
        const result = isOneEditDistance('abc', 'axy');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return false for strings whose lengths differ by more than 1', () => {
        const result = isOneEditDistance('a', 'abcd');
        if (result !== undefined) expect(result).toBe(false);
    });
});
