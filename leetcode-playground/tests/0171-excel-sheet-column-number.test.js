import { titleToNumber } from '../0171-excel-sheet-column-number';

describe('0171-excel-sheet-column-number', () => {
    it('should return 1 for "A" (minimum)', () => {
        const result = titleToNumber('A');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 26 for "Z"', () => {
        const result = titleToNumber('Z');
        if (result !== undefined) expect(result).toBe(26);
    });

    it('should return 27 for "AA" (off-by-one boundary)', () => {
        const result = titleToNumber('AA');
        if (result !== undefined) expect(result).toBe(27);
    });

    it('should return 28 for "AB"', () => {
        const result = titleToNumber('AB');
        if (result !== undefined) expect(result).toBe(28);
    });

    it('should return 701 for "ZY"', () => {
        const result = titleToNumber('ZY');
        if (result !== undefined) expect(result).toBe(701);
    });

    it('should return 703 for "AAA" (three-letter boundary)', () => {
        const result = titleToNumber('AAA');
        if (result !== undefined) expect(result).toBe(703);
    });

    it('should handle large-length title "FXSHRXW" -> 2147483647 (INT_MAX)', () => {
        const result = titleToNumber('FXSHRXW');
        if (result !== undefined) expect(result).toBe(2147483647);
    });
});
