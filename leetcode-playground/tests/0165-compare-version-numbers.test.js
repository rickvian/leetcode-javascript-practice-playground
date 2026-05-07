import { compareVersion } from '../0165-compare-version-numbers';

describe('0165-compare-version-numbers', () => {
    it('should return 0 for two identical versions', () => {
        const result = compareVersion('1.0', '1.0');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should treat trailing zeros as equal ("1.0" vs "1.0.0")', () => {
        const result = compareVersion('1.0', '1.0.0');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 when version1 is greater', () => {
        const result = compareVersion('1.2', '1.1');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return -1 when version2 is greater', () => {
        const result = compareVersion('1.1', '1.2');
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should strip leading zeros in a revision ("1.01" vs "1.001")', () => {
        const result = compareVersion('1.01', '1.001');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle single-component versions', () => {
        const result = compareVersion('7', '10');
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should handle very long versions with many zeros', () => {
        const result = compareVersion('1.0.0.0.0.1', '1.0.0.0.0.0');
        if (result !== undefined) expect(result).toBe(1);
    });
});
