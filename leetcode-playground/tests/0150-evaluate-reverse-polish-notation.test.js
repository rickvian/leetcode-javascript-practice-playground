import { evalRPN } from '../0150-evaluate-reverse-polish-notation';

describe('0150-evaluate-reverse-polish-notation', () => {
    it('should return the single number for a one-token expression', () => {
        const result = evalRPN(['42']);
        if (result !== undefined) expect(result).toBe(42);
    });

    it('should evaluate the classic example ["2","1","+","3","*"] -> 9', () => {
        const result = evalRPN(['2', '1', '+', '3', '*']);
        if (result !== undefined) expect(result).toBe(9);
    });

    it('should truncate division toward zero for negative results', () => {
        const result = evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']);
        if (result !== undefined) expect(result).toBe(22);
    });

    it('should handle a single negative operand token', () => {
        const result = evalRPN(['-5']);
        if (result !== undefined) expect(result).toBe(-5);
    });

    it('should truncate 7/-3 toward zero (-2, not -3)', () => {
        const result = evalRPN(['7', '-3', '/']);
        if (result !== undefined) expect(result).toBe(-2);
    });

    it('should handle repetitive additions resolving to 0', () => {
        const result = evalRPN(['0', '0', '+', '0', '+']);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle chained subtraction preserving left-to-right order', () => {
        const result = evalRPN(['4', '13', '5', '/', '+']);
        if (result !== undefined) expect(result).toBe(6);
    });
});
