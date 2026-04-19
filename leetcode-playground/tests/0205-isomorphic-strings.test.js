import { isIsomorphic } from '../0205-isomorphic-strings';

describe('0205-isomorphic-strings', () => {
    it('should identify egg/add as isomorphic', () => {
        const result = isIsomorphic('egg', 'add');
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should identify foo/bar as NOT isomorphic', () => {
        const result = isIsomorphic('foo', 'bar');
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should identify paper/title as isomorphic', () => {
        const result = isIsomorphic('paper', 'title');
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should handle two empty strings as isomorphic', () => {
        const result = isIsomorphic('', '');
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should reject mismatched lengths as NOT isomorphic', () => {
        const result = isIsomorphic('ab', 'abc');
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should reject when two different s-chars map to the same t-char (badc vs baba)', () => {
        const result = isIsomorphic('badc', 'baba');
        if (result !== undefined) {
            expect(result).toBe(false);
        }
    });

    it('should handle whitespace characters correctly', () => {
        const result = isIsomorphic('a b', 'c d');
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });
});
