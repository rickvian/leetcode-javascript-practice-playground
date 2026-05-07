import { reverseWords } from '../0186-reverse-words-in-a-string-ii';

describe('0186-reverse-words-in-a-string-ii', () => {
    it('should reverse the canonical example in place', () => {
        const s = ['t', 'h', 'e', ' ', 's', 'k', 'y', ' ', 'i', 's', ' ', 'b', 'l', 'u', 'e'];
        reverseWords(s);
        if (s[0] !== undefined) {
            expect(s.join('')).toBe('blue is sky the');
        }
    });

    it('should handle a single-word array (no changes)', () => {
        const s = ['h', 'i'];
        reverseWords(s);
        if (s[0] !== undefined) {
            expect(s.join('')).toBe('hi');
        }
    });

    it('should handle two-word swap', () => {
        const s = ['a', ' ', 'b'];
        reverseWords(s);
        if (s[0] !== undefined) {
            expect(s.join('')).toBe('b a');
        }
    });

    it('should handle single-character words', () => {
        const s = ['a', ' ', 'b', ' ', 'c'];
        reverseWords(s);
        if (s[0] !== undefined) {
            expect(s.join('')).toBe('c b a');
        }
    });

    it('should handle repetitive data (identical words)', () => {
        const s = ['x', 'x', ' ', 'x', 'x', ' ', 'x', 'x'];
        reverseWords(s);
        if (s[0] !== undefined) {
            expect(s.join('')).toBe('xx xx xx');
        }
    });

    it('should preserve single-space separators (no collapse)', () => {
        const s = ['a', 'b', 'c', ' ', 'd'];
        reverseWords(s);
        if (s[0] !== undefined) {
            expect(s.join('')).toBe('d abc');
            expect(s.length).toBe(5);
        }
    });
});
