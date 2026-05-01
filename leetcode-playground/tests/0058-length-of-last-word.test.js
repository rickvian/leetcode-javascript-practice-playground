import { lengthOfLastWord } from '../0058-length-of-last-word';

describe('0058-length-of-last-word', () => {
    it('should return 5 for "Hello World"', () => {
        expect(lengthOfLastWord('Hello World')).toBe(5);
    });

    it('should return 4 for "   fly me   to   the moon  " (trailing spaces ignored)', () => {
        expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
    });

    it('should return 6 for "luffy is still joyboy"', () => {
        expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
    });

    it('should return length of single word with no spaces', () => {
        expect(lengthOfLastWord('hello')).toBe(5);
    });

    it('should return 1 for single character string', () => {
        expect(lengthOfLastWord('a')).toBe(1);
    });

    it('should handle single word with trailing spaces', () => {
        expect(lengthOfLastWord('world   ')).toBe(5);
    });

    it('should handle single word with leading spaces', () => {
        expect(lengthOfLastWord('   hello')).toBe(5);
    });

    it('should handle single word with both leading and trailing spaces', () => {
        expect(lengthOfLastWord('   test   ')).toBe(4);
    });

    it('should handle multiple words where last word is short', () => {
        expect(lengthOfLastWord('the quick brown fox')).toBe(3);
    });

    it('should handle string where last word is one character', () => {
        expect(lengthOfLastWord('hello a')).toBe(1);
    });

    it('should handle multiple trailing spaces', () => {
        expect(lengthOfLastWord('day    ')).toBe(3);
    });

    it('should handle two words only', () => {
        expect(lengthOfLastWord('ab cde')).toBe(3);
    });
});
