import { convert } from '../0006-zigzag-conversion';

describe('0006-zigzag-conversion', () => {
    // Official example 1
    it('should convert "PAYPALISHIRING" with numRows=3 to "PAHNAPLSIIGYIR"', () => {
        expect(convert("PAYPALISHIRING", 3)).toBe("PAHNAPLSIIGYIR");
    });

    // Official example 2
    it('should convert "PAYPALISHIRING" with numRows=4 to "PINALSIGYAHRPI"', () => {
        expect(convert("PAYPALISHIRING", 4)).toBe("PINALSIGYAHRPI");
    });

    // Official example 3
    it('should convert "A" with numRows=1 to "A"', () => {
        expect(convert("A", 1)).toBe("A");
    });

    // Edge case: numRows=1 (no zigzag, output equals input)
    it('should return input as-is when numRows=1', () => {
        expect(convert("HELLO", 1)).toBe("HELLO");
    });

    // Edge case: numRows=1 with longer string
    it('should return "PAYPALISHIRING" unchanged when numRows=1', () => {
        expect(convert("PAYPALISHIRING", 1)).toBe("PAYPALISHIRING");
    });

    // Edge case: numRows >= string length (each char on its own row)
    it('should place each character on its own row when numRows >= string length', () => {
        expect(convert("ABC", 5)).toBe("ABC");
    });

    // Edge case: numRows equals string length
    it('should place each character on its own row when numRows equals string length', () => {
        expect(convert("ABCD", 4)).toBe("ABCD");
    });

    // Edge case: Single character string
    it('should return single character unchanged', () => {
        expect(convert("X", 2)).toBe("X");
    });

    // Special case: numRows=2
    it('should handle numRows=2 correctly', () => {
        expect(convert("ABCDE", 2)).toBe("ACEBD");
    });

    // Special case: numRows=2 with longer string
    it('should handle "PAYPALISHIRING" with numRows=2', () => {
        expect(convert("PAYPALISHIRING", 2)).toBe("PYAIHRNAPLSIIG");
    });

    // Two-character string with numRows=2
    it('should convert "AB" with numRows=2 to "AB"', () => {
        expect(convert("AB", 2)).toBe("AB");
    });

    // Two-character string with numRows=3
    it('should convert "AB" with numRows=3 to "AB"', () => {
        expect(convert("AB", 3)).toBe("AB");
    });

    // Empty string
    it('should return empty string when input is empty', () => {
        expect(convert("", 3)).toBe("");
    });

    // Numeric string
    it('should convert "123456789" with numRows=3', () => {
        expect(convert("123456789", 3)).toBe("159246837");
    });

    // String with repeated characters
    it('should convert repeated characters correctly', () => {
        expect(convert("AAABBBCCC", 2)).toBe("AABCCABBC");
    });

    // Large numRows
    it('should handle large numRows (10) with small string', () => {
        expect(convert("TEST", 10)).toBe("TEST");
    });

    // Another pattern verification: numRows=3, 6-character string
    it('should convert "ABCDEF" with numRows=3 to "AEBDFC"', () => {
        expect(convert("ABCDEF", 3)).toBe("AEBDFC");
    });
});
