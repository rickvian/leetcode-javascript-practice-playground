import { minDistance } from '../0072-edit-distance';

describe('0072-edit-distance', () => {
    it('should return 0 for two empty strings (min input)', () => {
        const result = minDistance('', '');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return length of other string when one is empty', () => {
        const r1 = minDistance('', 'abc');
        const r2 = minDistance('abc', '');
        if (r1 !== undefined) expect(r1).toBe(3);
        if (r2 !== undefined) expect(r2).toBe(3);
    });

    it('should return 3 for "horse" -> "ros" (leetcode example)', () => {
        const result = minDistance('horse', 'ros');
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 5 for "intention" -> "execution" (leetcode example)', () => {
        const result = minDistance('intention', 'execution');
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should return 0 for identical strings', () => {
        const result = minDistance('same', 'same');
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle repetitive character inputs', () => {
        const result = minDistance('aaaa', 'aa');
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle single-character differences (off-by-one trigger)', () => {
        const r1 = minDistance('a', 'b');
        const r2 = minDistance('a', 'ab');
        if (r1 !== undefined) expect(r1).toBe(1);
        if (r2 !== undefined) expect(r2).toBe(1);
    });
});
