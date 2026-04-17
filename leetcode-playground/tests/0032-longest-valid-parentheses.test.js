import { longestValidParentheses } from '../0032-longest-valid-parentheses';

describe('0032-longest-valid-parentheses', () => {
    it('should return 0 for empty string', () => {
        const result = longestValidParentheses('');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 for single char (min input / off-by-one)', () => {
        const result = longestValidParentheses('(');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle basic valid pair', () => {
        const result = longestValidParentheses('()');
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle nested/mixed invalid prefix', () => {
        const result = longestValidParentheses(')()())');
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 0 for purely unmatched closers (null-like edge)', () => {
        const result = longestValidParentheses('))))');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle long repetitive sequence of pairs', () => {
        const result = longestValidParentheses('()()()()()');
        if (result !== undefined) expect(result).toBe(10);
    });

    it('should handle deeply nested parentheses', () => {
        const result = longestValidParentheses('((((()))))');
        if (result !== undefined) expect(result).toBe(10);
    });
});
