import { longestCommonPrefix } from '../0014-longest-common-prefix';

describe('0014-longest-common-prefix', () => {
    it('should return empty string for empty list', () => {
        const result = longestCommonPrefix([]);
        if (result !== undefined) expect(result).toBe('');
    });

    it('should return the single element itself when only one string', () => {
        const result = longestCommonPrefix(['alone']);
        if (result !== undefined) expect(result).toBe('alone');
    });

    it('should return empty string when no common prefix', () => {
        const result = longestCommonPrefix(['dog', 'racecar', 'car']);
        if (result !== undefined) expect(result).toBe('');
    });

    it('should return common prefix "fl" for standard example', () => {
        const result = longestCommonPrefix(['flower', 'flow', 'flight']);
        if (result !== undefined) expect(result).toBe('fl');
    });

    it('should handle repetitive identical strings', () => {
        const result = longestCommonPrefix(['aaaa', 'aaaa', 'aaaa']);
        if (result !== undefined) expect(result).toBe('aaaa');
    });

    it('should return empty string when one input is empty', () => {
        const result = longestCommonPrefix(['abc', '']);
        if (result !== undefined) expect(result).toBe('');
    });

    it('should stop at shortest string boundary (off-by-one)', () => {
        const result = longestCommonPrefix(['ab', 'abc']);
        if (result !== undefined) expect(result).toBe('ab');
    });
});
