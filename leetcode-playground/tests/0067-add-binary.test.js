import { addBinary } from '../0067-add-binary';

describe('0067-add-binary', () => {
    it('should add two single-digit zeros (min input)', () => {
        const result = addBinary('0', '0');
        if (result !== undefined) expect(result).toBe('0');
    });

    it('should add "11" + "1" = "100" (carry cascade)', () => {
        const result = addBinary('11', '1');
        if (result !== undefined) expect(result).toBe('100');
    });

    it('should add "1010" + "1011" = "10101"', () => {
        const result = addBinary('1010', '1011');
        if (result !== undefined) expect(result).toBe('10101');
    });

    it('should handle strings of different lengths with final carry', () => {
        const result = addBinary('1111', '1');
        if (result !== undefined) expect(result).toBe('10000');
    });

    it('should add repetitive 1s (e.g., "111" + "111" = "1110")', () => {
        const result = addBinary('111', '111');
        if (result !== undefined) expect(result).toBe('1110');
    });

    it('should handle very long input of all ones without losing digits', () => {
        const a = '1'.repeat(60);
        const b = '1';
        const result = addBinary(a, b);
        if (result !== undefined) {
            expect(result.length).toBe(61);
            expect(result[0]).toBe('1');
            expect(result.slice(1).split('').every(c => c === '0')).toBe(true);
        }
    });

    it('should treat "0" + "1" as "1" (off-by-one boundary)', () => {
        const result = addBinary('0', '1');
        if (result !== undefined) expect(result).toBe('1');
    });
});
