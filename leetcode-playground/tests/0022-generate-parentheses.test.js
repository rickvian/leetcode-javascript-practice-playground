import { generateParenthesis } from '../0022-generate-parentheses';

describe('0022-generate-parentheses', () => {
    it('should handle n=0 (single empty combination)', () => {
        const result = generateParenthesis(0);
        expect(result?.sort()).toEqual([''].sort());
    });

    it('should handle n=1 (single combination)', () => {
        const result = generateParenthesis(1);
        expect(result?.sort()).toEqual(['()'].sort());
    });

    it('should handle n=2 (two combinations)', () => {
        const result = generateParenthesis(2);
        expect(result?.sort()).toEqual(['(())', '()()'].sort());
    });

    it('should handle n=3 (five combinations)', () => {
        const result = generateParenthesis(3);
        expect(result?.sort()).toEqual([
            '((()))',
            '(()())',
            '(())()',
            '()(())',
            '()()()'
        ].sort());
    });

    it('should handle n=4 (fourteen combinations)', () => {
        const result = generateParenthesis(4);
        const expected = [
            '(((())))',
            '((()()))',
            '((())())',
            '((()))()',
            '(()()())',
            '(()())()',
            '(())(())',
            '(())()()',
            '()(()())',
            '()(())()',
            '()()(())',
            '()()()()',
            '(()(()))',
            '()(()())'
        ];
        expect(result?.length).toBe(14);
        expect(result?.sort()).toEqual(expected.sort());
    });

    it('should produce well-formed parentheses', () => {
        const result = generateParenthesis(2);
        if (result) {
            result.forEach(s => {
                let count = 0;
                for (let char of s) {
                    count += char === '(' ? 1 : -1;
                    expect(count).toBeGreaterThanOrEqual(0);
                }
                expect(count).toBe(0);
            });
        }
    });

    it('should have correct count for n=2', () => {
        const result = generateParenthesis(2);
        expect(result?.length).toBe(2);
    });

    it('should have correct count for n=3', () => {
        const result = generateParenthesis(3);
        expect(result?.length).toBe(5);
    });

    it('should have correct count for n=1', () => {
        const result = generateParenthesis(1);
        expect(result?.length).toBe(1);
    });

    it('should have length 2*n for each string', () => {
        const result = generateParenthesis(3);
        if (result) {
            result.forEach(s => {
                expect(s.length).toBe(6);
            });
        }
    });

    it('should contain equal open and close parens', () => {
        const result = generateParenthesis(3);
        if (result) {
            result.forEach(s => {
                const open = s.split('(').length - 1;
                const close = s.split(')').length - 1;
                expect(open).toBe(3);
                expect(close).toBe(3);
            });
        }
    });
});
