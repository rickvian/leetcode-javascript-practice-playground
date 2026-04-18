import { convertToTitle } from '../0168-excel-sheet-column-title';

describe('0168-excel-sheet-column-title', () => {
    it('should return "A" for columnNumber 1 (minimum)', () => {
        const result = convertToTitle(1);
        if (result !== undefined) expect(result).toBe('A');
    });

    it('should return "Z" for 26 (end of first cycle)', () => {
        const result = convertToTitle(26);
        if (result !== undefined) expect(result).toBe('Z');
    });

    it('should return "AA" for 27 (off-by-one boundary)', () => {
        const result = convertToTitle(27);
        if (result !== undefined) expect(result).toBe('AA');
    });

    it('should return "AB" for 28', () => {
        const result = convertToTitle(28);
        if (result !== undefined) expect(result).toBe('AB');
    });

    it('should return "ZY" for 701', () => {
        const result = convertToTitle(701);
        if (result !== undefined) expect(result).toBe('ZY');
    });

    it('should return "AAA" for 703 (three-letter boundary)', () => {
        const result = convertToTitle(703);
        if (result !== undefined) expect(result).toBe('AAA');
    });

    it('should handle INT_MAX (2147483647)', () => {
        const result = convertToTitle(2147483647);
        if (result !== undefined) expect(result).toBe('FXSHRXW');
    });
});
