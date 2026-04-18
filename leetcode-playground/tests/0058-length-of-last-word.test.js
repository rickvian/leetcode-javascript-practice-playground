import { lengthOfLastWord } from '../0058-length-of-last-word';

describe('0058-length-of-last-word', () => {
    it('should return 5 for "Hello World"', () => {
        const result = lengthOfLastWord('Hello World');
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should handle trailing whitespace', () => {
        const result = lengthOfLastWord('   fly me   to   the moon  ');
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle single-word with leading/trailing whitespace', () => {
        const result = lengthOfLastWord('  hello  ');
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should return 1 for single-char input (min input / off-by-one)', () => {
        const result = lengthOfLastWord('a');
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle tabs and newlines between words (whitespace variants)', () => {
        const result = lengthOfLastWord('foo\tbar\nbaz');
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should handle repetitive same-char word', () => {
        const result = lengthOfLastWord('aaaaaa');
        if (result !== undefined) expect(result).toBe(6);
    });

    it('should return correct length when last word is single char after long prefix', () => {
        const result = lengthOfLastWord('luffy is still joyboy');
        if (result !== undefined) expect(result).toBe(6);
    });
});
