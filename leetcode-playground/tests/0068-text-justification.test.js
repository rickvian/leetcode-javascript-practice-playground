import { fullJustify } from '../0068-text-justification';

describe('0068-text-justification', () => {
    it('should handle official example 1', () => {
        const words = ["This","is","an","example","of","text","justification."];
        const maxWidth = 16;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual([
                "This    is    an",
                "example  of text",
                "justification.  "
            ]);
        }
    });

    it('should handle official example 2', () => {
        const words = ["What","must","be","acknowledgment","shall","be"];
        const maxWidth = 16;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual([
                "What   must   be",
                "acknowledgment  ",
                "shall be        "
            ]);
        }
    });

    it('should handle official example 3', () => {
        const words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"];
        const maxWidth = 20;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual([
                "Science  is  what we",
                "understand      well",
                "enough to explain to",
                "a  computer.  Art is",
                "everything  else  we",
                "do                  "
            ]);
        }
    });

    it('should handle single word that exactly fills maxWidth', () => {
        const words = ["a"];
        const maxWidth = 1;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["a"]);
        }
    });

    it('should handle single word with padding', () => {
        const words = ["hello"];
        const maxWidth = 10;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["hello     "]);
        }
    });

    it('should handle single long word on each line', () => {
        const words = ["justification"];
        const maxWidth = 16;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["justification   "]);
        }
    });

    it('should left-justify when all words fit on single last line', () => {
        const words = ["What","must","be"];
        const maxWidth = 12;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["What must be"]);
        }
    });

    it('should left-justify last line with right-padding', () => {
        const words = ["This","is","an"];
        const maxWidth = 11;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["This is an "]);
        }
    });

    it('should left-justify single-line result', () => {
        const words = ["a","b","c"];
        const maxWidth = 5;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["a b c"]);
        }
    });

    it('should left-justify the last line', () => {
        const words = ["This","is","an","example"];
        const maxWidth = 10;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["This is an", "example   "]);
        }
    });

    it('should left-justify last line with single word', () => {
        const words = ["This","is","an","example","of"];
        const maxWidth = 10;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["This is an", "example of"]);
        }
    });

    it('should distribute extra spaces to left gaps first', () => {
        const words = ["The","quick","brown","fox"];
        const maxWidth = 13;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["The     quick", "brown fox    "]);
        }
    });

    it('should handle words that fill line exactly', () => {
        const words = ["ab","cd","ef"];
        const maxWidth = 5;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["ab cd", "ef   "]);
        }
    });

    it('should handle even space distribution', () => {
        const words = ["a","b","c","d"];
        const maxWidth = 6;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["a  b c", "d     "]);
        }
    });

    it('should handle complex space distribution with multiple gaps', () => {
        const words = ["a","b","c","d","e","f"];
        const maxWidth = 7;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            expect(result).toEqual(["a b c d", "e f    "]);
        }
    });

    it('should verify each line has exactly maxWidth characters', () => {
        const words = ["This","is","an","example","of","text","justification."];
        const maxWidth = 16;
        const result = fullJustify(words, maxWidth);
        if (result !== undefined) {
            result.forEach(line => {
                expect(line.length).toBe(maxWidth);
            });
        }
    });
});
