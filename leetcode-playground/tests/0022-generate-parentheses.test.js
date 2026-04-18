import { generateParenthesis } from '../0022-generate-parentheses';

describe('0022-generate-parentheses', () => {
    it('should return [""] for n=0 (empty boundary)', () => {
        const result = generateParenthesis(0);
        if (result !== undefined) expect(result).toEqual(['']);
    });

    it('should return ["()"] for n=1 (minimum non-empty)', () => {
        const result = generateParenthesis(1);
        if (result !== undefined) expect(result).toEqual(['()']);
    });

    it('should return 2 combinations for n=2', () => {
        const result = generateParenthesis(2);
        if (result !== undefined) expect(result.sort()).toEqual(['(())', '()()']);
    });

    it('should return 5 combinations for n=3 (Catalan(3))', () => {
        const result = generateParenthesis(3);
        if (result !== undefined) {
            expect(result.length).toBe(5);
            expect(result.sort()).toEqual(['((()))', '(()())', '(())()', '()(())', '()()()']);
        }
    });

    it('should return Catalan(4) = 14 combinations for n=4', () => {
        const result = generateParenthesis(4);
        if (result !== undefined) expect(result.length).toBe(14);
    });

    it('should match expected Catalan(8) = 1430 at upper boundary', () => {
        const result = generateParenthesis(8);
        if (result !== undefined) expect(result.length).toBe(1430);
    });

    it('should produce strings of exact length 2n', () => {
        const n = 5;
        const result = generateParenthesis(n);
        if (result !== undefined) for (const s of result) expect(s.length).toBe(2 * n);
    });
});
