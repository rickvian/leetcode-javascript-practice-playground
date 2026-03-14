import { isPalindrome } from '../0125-valid-palindrome';

describe('0125-valid-palindrome', () => {
    it('should return true for "A man, a plan, a canal: Panama"', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
    });

    it('should return false for "race a car"', () => {
        expect(isPalindrome('race a car')).toBe(false);
    });

    it('should return true for " " (empty after filtering)', () => {
        expect(isPalindrome(' ')).toBe(true);
    });

    it('should return true for a single character', () => {
        expect(isPalindrome('a')).toBe(true);
    });

    it('should return true for alphanumeric palindrome with mixed case', () => {
        expect(isPalindrome('Was it a car or a cat I saw?')).toBe(true);
    });

    it('should return false for non-palindrome', () => {
        expect(isPalindrome('hello')).toBe(false);
    });

    it('should handle string with only numbers', () => {
        expect(isPalindrome('121')).toBe(true);
    });

    it('should handle string with only special characters', () => {
        expect(isPalindrome('.,!')).toBe(true);
    });

    it('should handle mixed alphanumeric palindrome', () => {
        expect(isPalindrome('0P')).toBe(false);
    });
});
