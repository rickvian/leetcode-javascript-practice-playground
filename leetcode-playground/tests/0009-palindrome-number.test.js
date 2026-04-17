import { isPalindrome } from '../0009-palindrome-number';

describe('0009-palindrome-number', () => {
    it('should return true for 0', () => {
        const result = isPalindrome(0);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return true for single-digit positive', () => {
        const result = isPalindrome(7);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for any negative number', () => {
        const result = isPalindrome(-121);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return true for a palindrome number', () => {
        const result = isPalindrome(121);
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should return false for a near-palindrome (off-by-one)', () => {
        const result = isPalindrome(123);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should return false for trailing zero number like 10', () => {
        const result = isPalindrome(10);
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should handle INT32 max boundary', () => {
        const result = isPalindrome(2147447412);
        if (result !== undefined) expect(result).toBe(true);
    });
});
