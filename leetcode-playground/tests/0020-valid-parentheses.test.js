import { isValid } from '../0020-valid-parentheses';

describe('0020-valid-parentheses', () => {
    it('should return true for "()"', () => {
        expect(isValid('()')).toBe(true);
    });

    it('should return true for "()[]{}"', () => {
        expect(isValid('()[]{}')).toBe(true);
    });

    it('should return false for "(]"', () => {
        expect(isValid('(]')).toBe(false);
    });

    it('should return false for "([)]"', () => {
        expect(isValid('([)]')).toBe(false);
    });

    it('should return true for "{[]}"', () => {
        expect(isValid('{[]}')).toBe(true);
    });

    it('should return true for empty string ""', () => {
        expect(isValid('')).toBe(true);
    });

    it('should return false for "((((((((("', () => {
        expect(isValid('(((((((((')).toBe(false);
    });

    it('should return false for "["', () => {
        expect(isValid('[')).toBe(false);
    });

    it('should return true for "({[()]})"', () => {
        expect(isValid('({[()]})')).toBe(true);
    });

    it('should return false for "]"', () => {
        expect(isValid(']')).toBe(false);
    });

    it('should return false for "{[}]"', () => {
        expect(isValid('{[}]')).toBe(false);
    });

    it('should return true for "([])"', () => {
        expect(isValid('([])')).toBe(true);
    });
});
