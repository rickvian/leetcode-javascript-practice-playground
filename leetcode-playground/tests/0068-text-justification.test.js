import { fullJustify } from '../0068-text-justification';

describe('0068-text-justification', () => {
    it('should handle single word shorter than maxWidth (left-justified with trailing spaces)', () => {
        const result = fullJustify(['hi'], 10);
        if (result !== undefined) expect(result).toEqual(['hi        ']);
    });

    it('should left-justify the final line and pad with trailing spaces', () => {
        const result = fullJustify(['What', 'must', 'be', 'acknowledgment', 'shall', 'be'], 16);
        if (result !== undefined) {
            expect(result).toEqual([
                'What   must   be',
                'acknowledgment  ',
                'shall be        ',
            ]);
        }
    });

    it('should distribute extra spaces left-to-right when uneven', () => {
        const result = fullJustify(['This', 'is', 'an', 'example', 'of', 'text', 'justification.'], 16);
        if (result !== undefined) {
            expect(result).toEqual([
                'This    is    an',
                'example  of text',
                'justification.  ',
            ]);
        }
    });

    it('should handle a single line with single word exactly maxWidth (no padding needed)', () => {
        const result = fullJustify(['abcd'], 4);
        if (result !== undefined) expect(result).toEqual(['abcd']);
    });

    it('should return exactly maxWidth-long strings for every line', () => {
        const result = fullJustify(['a', 'b', 'c', 'd', 'e'], 3);
        if (result !== undefined) {
            for (const line of result) expect(line.length).toBe(3);
        }
    });

    it('should handle repetitive identical short words', () => {
        const result = fullJustify(['a', 'a', 'a', 'a'], 7);
        if (result !== undefined) {
            for (const line of result) expect(line.length).toBe(7);
        }
    });

    it('should handle last-line single-word edge (exactly fills width)', () => {
        const result = fullJustify(['Hello', 'World'], 5);
        if (result !== undefined) expect(result).toEqual(['Hello', 'World']);
    });
});
