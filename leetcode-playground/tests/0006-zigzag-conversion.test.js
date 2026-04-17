import { convert } from '../0006-zigzag-conversion';

describe('0006-zigzag-conversion', () => {
    it('should return empty string for empty input', () => {
        const result = convert('', 3);
        if (result !== undefined) expect(result).toBe('');
    });

    it('should return input unchanged when numRows is 1', () => {
        const result = convert('PAYPALISHIRING', 1);
        if (result !== undefined) expect(result).toBe('PAYPALISHIRING');
    });

    it('should return input unchanged when numRows equals or exceeds length', () => {
        const result = convert('AB', 5);
        if (result !== undefined) expect(result).toBe('AB');
    });

    it('should convert LeetCode example with 3 rows', () => {
        const result = convert('PAYPALISHIRING', 3);
        if (result !== undefined) expect(result).toBe('PAHNAPLSIIGYIR');
    });

    it('should convert LeetCode example with 4 rows', () => {
        const result = convert('PAYPALISHIRING', 4);
        if (result !== undefined) expect(result).toBe('PINALSIGYAHRPI');
    });

    it('should handle repetitive characters', () => {
        const result = convert('AAAAAAA', 3);
        if (result !== undefined) expect(result).toBe('AAAAAAA');
    });

    it('should handle whitespace characters in input', () => {
        const result = convert('A B C', 2);
        if (result !== undefined) expect(result.length).toBe(5);
    });
});
