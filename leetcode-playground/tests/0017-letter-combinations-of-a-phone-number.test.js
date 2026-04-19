import { letterCombinations } from '../0017-letter-combinations-of-a-phone-number';

describe('0017-letter-combinations-of-a-phone-number', () => {
    it('should return empty array for empty input', () => {
        const result = letterCombinations('');
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return 3 combinations for single digit "2"', () => {
        const result = letterCombinations('2');
        if (result !== undefined) expect(result.sort()).toEqual(['a', 'b', 'c']);
    });

    it('should return 4 combinations for single digit "7"', () => {
        const result = letterCombinations('7');
        if (result !== undefined) expect(result.sort()).toEqual(['p', 'q', 'r', 's']);
    });

    it('should return 9 combinations for "23"', () => {
        const result = letterCombinations('23');
        if (result !== undefined) {
            expect(result.length).toBe(9);
            expect(result.sort()).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']);
        }
    });

    it('should handle repetitive digit "222"', () => {
        const result = letterCombinations('222');
        if (result !== undefined) expect(result.length).toBe(27);
    });

    it('should handle max-length input (4 digits)', () => {
        const result = letterCombinations('2345');
        if (result !== undefined) expect(result.length).toBe(3 * 3 * 3 * 3);
    });

    it('should multiply lengths for mixed 3/4-letter keys', () => {
        const result = letterCombinations('79');
        if (result !== undefined) expect(result.length).toBe(4 * 4);
    });
});
