import { evalRPN } from '../0150-evaluate-reverse-polish-notation';

describe('0150-evaluate-reverse-polish-notation', () => {
    it('should handle single number token', () => {
        expect(evalRPN(['5'])).toEqual(5);
    });

    it('should handle simple addition', () => {
        expect(evalRPN(['2', '3', '+'])).toEqual(5);
    });

    it('should handle simple subtraction', () => {
        expect(evalRPN(['10', '3', '-'])).toEqual(7);
    });

    it('should handle simple multiplication', () => {
        expect(evalRPN(['4', '5', '*'])).toEqual(20);
    });

    it('should handle simple division (positive)', () => {
        expect(evalRPN(['15', '3', '/'])).toEqual(5);
    });

    it('should handle division with truncation toward zero', () => {
        expect(evalRPN(['6', '4', '/'])).toEqual(1);
    });

    it('should handle negative division (truncate toward zero not floor)', () => {
        expect(evalRPN(['-6', '4', '/'])).toEqual(-1);
    });

    it('should handle negative number tokens', () => {
        expect(evalRPN(['-5', '3', '+'])).toEqual(-2);
    });

    it('should handle single negative number', () => {
        expect(evalRPN(['-42'])).toEqual(-42);
    });

    it('should handle multiple negative numbers', () => {
        expect(evalRPN(['-5', '-3', '+'])).toEqual(-8);
    });

    it('should handle LeetCode official example 1', () => {
        expect(evalRPN(['2', '1', '+', '3', '*'])).toEqual(9);
    });

    it('should handle LeetCode official example 2', () => {
        expect(evalRPN(['4', '13', '5', '/', '+'])).toEqual(6);
    });

    it('should handle nested operations', () => {
        expect(evalRPN(['3', '4', '+', '5', '*'])).toEqual(35);
    });

    it('should handle longer expression with mixed operators', () => {
        expect(evalRPN(['2', '3', '*', '4', '5', '*', '+'])).toEqual(26);
    });

    it('should handle division with negative result', () => {
        expect(evalRPN(['10', '-3', '/'])).toEqual(-3);
    });

    it('should handle subtraction order (left - right)', () => {
        expect(evalRPN(['5', '3', '-'])).toEqual(2);
    });

    it('should handle division by negative number', () => {
        expect(evalRPN(['20', '-4', '/'])).toEqual(-5);
    });

    it('should handle zero result', () => {
        expect(evalRPN(['5', '5', '-'])).toEqual(0);
    });

    it('should handle large numbers', () => {
        expect(evalRPN(['100', '50', '*'])).toEqual(5000);
    });

    it('should handle complex expression with four operations', () => {
        expect(evalRPN(['3', '4', '5', '*', '+'])).toEqual(23);
    });

    it('should handle expression: 10 2 3 * -', () => {
        expect(evalRPN(['10', '2', '3', '*', '-'])).toEqual(4);
    });

    it('should handle expression: 2 3 4 * + 5 -', () => {
        expect(evalRPN(['2', '3', '4', '*', '+', '5', '-'])).toEqual(9);
    });

    it('should handle single operator at end', () => {
        expect(evalRPN(['100', '2', '/'])).toEqual(50);
    });

    it('should handle negative division truncating correctly', () => {
        expect(evalRPN(['7', '-2', '/'])).toEqual(-3);
    });
});
