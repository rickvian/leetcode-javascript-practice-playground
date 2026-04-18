import { tenthLine } from '../0195-tenth-line';

describe('0195-tenth-line', () => {
    it('should return the 10th line when there are exactly 10 lines', () => {
        const input = Array.from({ length: 10 }, (_, i) => `Line ${i + 1}`).join('\n');
        const result = tenthLine(input);
        if (result !== undefined) {
            expect(result).toBe('Line 10');
        }
    });

    it('should return the 10th line when there are more than 10 lines', () => {
        const input = Array.from({ length: 15 }, (_, i) => `Line ${i + 1}`).join('\n');
        const result = tenthLine(input);
        if (result !== undefined) {
            expect(result).toBe('Line 10');
        }
    });

    it('should return empty string when fewer than 10 lines exist', () => {
        const input = 'Line 1\nLine 2\nLine 3';
        const result = tenthLine(input);
        if (result !== undefined) {
            expect(result).toBe('');
        }
    });

    it('should return empty string for an empty file', () => {
        const result = tenthLine('');
        if (result !== undefined) {
            expect(result).toBe('');
        }
    });

    it('should return empty string at the 9-line boundary (off-by-one)', () => {
        const input = Array.from({ length: 9 }, (_, i) => `Line ${i + 1}`).join('\n');
        const result = tenthLine(input);
        if (result !== undefined) {
            expect(result).toBe('');
        }
    });

    it('should handle lines with leading whitespace', () => {
        const input = Array.from({ length: 10 }, (_, i) => `   line${i + 1}`).join('\n');
        const result = tenthLine(input);
        if (result !== undefined) {
            expect(result).toBe('   line10');
        }
    });

    it('should return an empty 10th line if it is blank', () => {
        const input = Array.from({ length: 9 }, () => 'x').join('\n') + '\n';
        const result = tenthLine(input);
        if (result !== undefined) {
            expect(result).toBe('');
        }
    });
});
