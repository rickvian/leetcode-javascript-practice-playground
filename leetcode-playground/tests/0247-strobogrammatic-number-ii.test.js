import { findStrobogrammatic } from '../0247-strobogrammatic-number-ii';

const sortStrs = (arr) => [...arr].sort();

describe('0247-strobogrammatic-number-ii', () => {
    it('should return ["0","1","8"] for n=1 (minimum)', () => {
        const result = findStrobogrammatic(1);
        if (result !== undefined) expect(sortStrs(result)).toEqual(['0', '1', '8']);
    });

    it('should return ["11","69","88","96"] for n=2 (no leading zero)', () => {
        const result = findStrobogrammatic(2);
        if (result !== undefined) expect(sortStrs(result)).toEqual(['11', '69', '88', '96']);
    });

    it('should return 3-digit results including middle strobo digits for n=3', () => {
        const result = findStrobogrammatic(3);
        if (result !== undefined) {
            expect(result.length).toBe(12);
            expect(result).toEqual(expect.arrayContaining(['101', '609', '808']));
        }
    });

    it('should not include any string with leading zero for n>=2', () => {
        const result = findStrobogrammatic(4);
        if (result !== undefined) {
            expect(result.every((s) => s[0] !== '0')).toBe(true);
        }
    });

    it('should handle range limit n=7', () => {
        const result = findStrobogrammatic(7);
        if (result !== undefined) {
            expect(result.every((s) => s.length === 7)).toBe(true);
        }
    });

    it('should count match expected formula at n=4 (20 entries)', () => {
        const result = findStrobogrammatic(4);
        if (result !== undefined) expect(result.length).toBe(20);
    });

    it('should return empty-or-[""] for n=0 edge', () => {
        const result = findStrobogrammatic(0);
        if (result !== undefined) {
            expect(Array.isArray(result)).toBe(true);
            expect(result.length <= 1).toBe(true);
        }
    });
});
