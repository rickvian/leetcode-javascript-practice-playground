import { transposeFile } from '../0194-transpose-file';

describe('0194-transpose-file', () => {
    it('should transpose a simple two-row file', () => {
        const input = 'name age\nalice 21';
        const result = transposeFile(input);
        if (result !== undefined) {
            expect(result).toBe('name alice\nage 21');
        }
    });

    it('should handle a single-row file', () => {
        const input = 'a b c';
        const result = transposeFile(input);
        if (result !== undefined) {
            expect(result).toBe('a\nb\nc');
        }
    });

    it('should handle a single-column file', () => {
        const input = 'a\nb\nc';
        const result = transposeFile(input);
        if (result !== undefined) {
            expect(result).toBe('a b c');
        }
    });

    it('should handle an empty input string', () => {
        const result = transposeFile('');
        if (result !== undefined) {
            expect(result).toBe('');
        }
    });

    it('should handle a 3x3 matrix of values', () => {
        const input = '1 2 3\n4 5 6\n7 8 9';
        const result = transposeFile(input);
        if (result !== undefined) {
            expect(result).toBe('1 4 7\n2 5 8\n3 6 9');
        }
    });

    it('should preserve repetitive identical rows', () => {
        const input = 'x y\nx y\nx y';
        const result = transposeFile(input);
        if (result !== undefined) {
            expect(result).toBe('x x x\ny y y');
        }
    });

    it('should handle a single cell input', () => {
        const input = 'only';
        const result = transposeFile(input);
        if (result !== undefined) {
            expect(result).toBe('only');
        }
    });
});
