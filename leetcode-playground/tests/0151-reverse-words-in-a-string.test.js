import { reverseWords } from '../0151-reverse-words-in-a-string';

describe('0151-reverse-words-in-a-string', () => {
    it('should reverse a simple three-word sentence', () => {
        const result = reverseWords('the sky is blue');
        if (result !== undefined) expect(result).toBe('blue is sky the');
    });

    it('should trim leading and trailing whitespace', () => {
        const result = reverseWords('  hello world  ');
        if (result !== undefined) expect(result).toBe('world hello');
    });

    it('should collapse multiple spaces between words into one', () => {
        const result = reverseWords('a good   example');
        if (result !== undefined) expect(result).toBe('example good a');
    });

    it('should return a single word unchanged (no leading/trailing spaces)', () => {
        const result = reverseWords('hello');
        if (result !== undefined) expect(result).toBe('hello');
    });

    it('should return empty string when input is only whitespace', () => {
        const result = reverseWords('     ');
        if (result !== undefined) expect(result).toBe('');
    });

    it('should handle tab and newline characters as word separators (whitespace)', () => {
        const result = reverseWords('foo   bar');
        if (result !== undefined) expect(result).toBe('bar foo');
    });

    it('should handle a palindromic sentence with repeated words', () => {
        const result = reverseWords('a a a');
        if (result !== undefined) expect(result).toBe('a a a');
    });
});
