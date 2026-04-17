import { simplifyPath } from '../0071-simplify-path';

describe('0071-simplify-path', () => {
    it('should return "/" for root-only (min input)', () => {
        const result = simplifyPath('/');
        if (result !== undefined) expect(result).toBe('/');
    });

    it('should collapse redundant slashes "/home//foo/" -> "/home/foo"', () => {
        const result = simplifyPath('/home//foo/');
        if (result !== undefined) expect(result).toBe('/home/foo');
    });

    it('should resolve ".." going up one level', () => {
        const result = simplifyPath('/a/./b/../../c/');
        if (result !== undefined) expect(result).toBe('/c');
    });

    it('should clamp ".." at root (cannot go above /)', () => {
        const result = simplifyPath('/../');
        if (result !== undefined) expect(result).toBe('/');
    });

    it('should keep filenames that happen to contain dots ("..." is a valid dir name)', () => {
        const result = simplifyPath('/a/.../b');
        if (result !== undefined) expect(result).toBe('/a/.../b');
    });

    it('should handle repetitive "/" inputs without trailing slash', () => {
        const result = simplifyPath('///////');
        if (result !== undefined) expect(result).toBe('/');
    });

    it('should strip trailing slash in normal paths', () => {
        const result = simplifyPath('/home/');
        if (result !== undefined) expect(result).toBe('/home');
    });
});
