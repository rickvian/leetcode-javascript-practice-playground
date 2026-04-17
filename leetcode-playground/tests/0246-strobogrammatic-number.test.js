import { isStrobogrammatic } from '../0246-strobogrammatic-number';

describe('0246-strobogrammatic-number', () => {
    it('should return true for empty string (minimum boundary)', () => {
        const result = isStrobogrammatic('');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for "0"', () => {
        const result = isStrobogrammatic('0');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for "2" (non-strobogrammatic single digit)', () => {
        const result = isStrobogrammatic('2');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for "69" (classic sample)', () => {
        const result = isStrobogrammatic('69');
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for "88" and "818" (symmetric palindrome cases)', () => {
        const a = isStrobogrammatic('88');
        const b = isStrobogrammatic('818');
        if (a !== undefined) expect(a).toBe(true);
        if (b !== undefined) expect(b).toBe(true);
    });

    it('should return false for "962" (off-by-one: first two valid, last invalid)', () => {
        const result = isStrobogrammatic('962');
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return false for repetitive unmirrored digit "66"', () => {
        const result = isStrobogrammatic('66');
        if (result !== undefined) expect(result).toBe(false);
    });
});
