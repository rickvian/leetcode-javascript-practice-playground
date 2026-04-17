import { calculate } from '../0227-basic-calculator-ii';

describe('0227-basic-calculator-ii', () => {
    it('should evaluate "3+2*2" to 7', () => {
        expect(calculate('3+2*2')).toBe(7);
    });

    it('should evaluate " 3/2 " to 1 (truncate toward zero)', () => {
        expect(calculate(' 3/2 ')).toBe(1);
    });

    it('should evaluate " 3+5 / 2 " to 5', () => {
        expect(calculate(' 3+5 / 2 ')).toBe(5);
    });

    it('should handle multiplication and addition', () => {
        expect(calculate('2*3+4')).toBe(10);
    });

    it('should handle subtraction', () => {
        expect(calculate('10-3-2')).toBe(5);
    });

    it('should handle single number', () => {
        expect(calculate('42')).toBe(42);
    });

    it('should handle expression with all whitespace between tokens', () => {
        expect(calculate('1 + 1')).toBe(2);
    });

    it('should handle division truncating toward zero', () => {
        expect(calculate('7/2')).toBe(3);
    });

    it('should respect operator precedence (* before +)', () => {
        expect(calculate('2+3*4-1')).toBe(13);
    });

    it('should handle multi-digit numbers', () => {
        expect(calculate('100+200')).toBe(300);
    });

    it('should handle complex expression with spaces', () => {
        expect(calculate('14 - 3 / 2')).toBe(13);
    });

    it('should handle consecutive same operators', () => {
        expect(calculate('1+1+1+1')).toBe(4);
    });

    it('should handle division then subtraction', () => {
        expect(calculate('10/2-1')).toBe(4);
    });
});
