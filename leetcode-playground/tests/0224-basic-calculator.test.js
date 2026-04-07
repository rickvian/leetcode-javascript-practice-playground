import { calculate } from '../0224-basic-calculator';

describe('0224-basic-calculator', () => {
    // Basic operations
    it('should evaluate simple addition', () => {
        expect(calculate('1 + 1')).toBe(2);
    });

    it('should evaluate simple subtraction', () => {
        expect(calculate('2-1')).toBe(1);
    });

    it('should evaluate expression with multiple operations', () => {
        expect(calculate('2-1+2')).toBe(3);
    });

    // Parentheses
    it('should handle single parentheses group', () => {
        expect(calculate('(1+(4+5+2)-3)+(6+8)')).toBe(23);
    });

    it('should handle nested parentheses', () => {
        expect(calculate('(1+(4+(5+2)))')).toBe(12);
    });

    it('should handle expression starting with parentheses', () => {
        expect(calculate('(3)')).toBe(3);
    });

    // Unary minus / negative numbers
    it('should handle unary minus at the start', () => {
        expect(calculate('-2+1')).toBe(-1);
    });

    it('should handle unary minus inside parentheses', () => {
        expect(calculate('(-2+1)')).toBe(-1);
    });

    it('should handle double negation via nested parens', () => {
        expect(calculate('-(-(1))')).toBe(1);
    });

    // Whitespace variations
    it('should handle leading whitespace', () => {
        expect(calculate('   3 + 2')).toBe(5);
    });

    it('should handle trailing whitespace', () => {
        expect(calculate('3 + 2   ')).toBe(5);
    });

    it('should handle tabs and mixed whitespace', () => {
        expect(calculate('1 +  2')).toBe(3);
    });

    it('should handle expression with no spaces', () => {
        expect(calculate('1+2-3')).toBe(0);
    });

    // Single element
    it('should return single digit', () => {
        expect(calculate('5')).toBe(5);
    });

    it('should return single zero', () => {
        expect(calculate('0')).toBe(0);
    });

    // Large numbers
    it('should handle multi-digit numbers', () => {
        expect(calculate('100 + 200 - 50')).toBe(250);
    });

    it('should handle large number operands', () => {
        expect(calculate('1000000 - 999999')).toBe(1);
    });

    // Range limits / boundary cases
    it('should handle deeply nested parentheses', () => {
        expect(calculate('((((1))))')).toBe(1);
    });

    it('should handle deeply nested subtraction', () => {
        expect(calculate('1-(1-(1-(1-(1))))')).toBe(1);
    });

    // Result crossing zero
    it('should handle result of zero', () => {
        expect(calculate('5 - 5')).toBe(0);
    });

    it('should handle expression yielding negative result', () => {
        expect(calculate('1 - 5')).toBe(-4);
    });

    // Repetitive patterns
    it('should handle long chain of additions', () => {
        expect(calculate('1+1+1+1+1+1+1+1+1+1')).toBe(10);
    });

    it('should handle long chain of subtractions', () => {
        expect(calculate('10-1-1-1-1-1-1-1-1-1-1')).toBe(0);
    });

    // Complex mixed
    it('should handle complex mixed expression', () => {
        expect(calculate('1 + (2 - (3 + (4 - 5)))')).toBe(1);
    });

    it('should handle subtraction of parenthesized sum', () => {
        expect(calculate('10 - (3 + 2)')).toBe(5);
    });
});
