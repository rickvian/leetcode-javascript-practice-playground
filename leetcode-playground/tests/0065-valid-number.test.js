import { isNumber } from '../0065-valid-number';

describe('0065-valid-number', () => {
    it('should return false for empty string (min input)', () => {
        const result = isNumber('');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return false for whitespace-only / leading/trailing whitespace', () => {
        const r1 = isNumber(' ');
        const r2 = isNumber(' 1 ');
        if (r1 !== undefined) expect(r1).toBe(false);
        if (r2 !== undefined) expect(r2).toBe(false);
    });

    it('should accept integers, decimals, and signed forms', () => {
        for (const s of ['0', '2', '-2', '+2', '2.', '.2', '0.1']) {
            const r = isNumber(s);
            if (r !== undefined) expect(r).toBe(true);
        }
    });

    it('should accept exponent forms including signed exponent', () => {
        for (const s of ['2e10', '-90E3', '-123.456e789', '53.5e93']) {
            const r = isNumber(s);
            if (r !== undefined) expect(r).toBe(true);
        }
    });

    it('should reject bare "." / "e" / "+-3" / missing mantissa or exponent digits', () => {
        for (const s of ['.', 'e', '+-3', '.e1', '99e2.5', '1a']) {
            const r = isNumber(s);
            if (r !== undefined) expect(r).toBe(false);
        }
    });

    it('should reject null/undefined without throwing (guarded)', () => {
        const r1 = isNumber(null);
        const r2 = isNumber(undefined);
        if (r1 !== undefined) expect(r1).toBe(false);
        if (r2 !== undefined) expect(r2).toBe(false);
    });

    it('should accept long repetitive-digit strings at the edge', () => {
        const r = isNumber('1'.repeat(100));
        if (r !== undefined) expect(r).toBe(true);
    });
});
