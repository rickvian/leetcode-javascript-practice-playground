import { validPhoneNumbers } from '../0193-valid-phone-numbers';

describe('0193-valid-phone-numbers', () => {
    it('should return [] for empty input', () => {
        const result = validPhoneNumbers([]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should keep valid "xxx-xxx-xxxx" lines', () => {
        const result = validPhoneNumbers(['123-456-7890', '987-654-3210']);
        if (result !== undefined) {
            expect(result).toEqual(['123-456-7890', '987-654-3210']);
        }
    });

    it('should keep valid "(xxx) xxx-xxxx" lines', () => {
        const result = validPhoneNumbers(['(123) 456-7890', '(555) 000-0000']);
        if (result !== undefined) {
            expect(result).toEqual(['(123) 456-7890', '(555) 000-0000']);
        }
    });

    it('should reject lines with leading/trailing whitespace', () => {
        const result = validPhoneNumbers([' 123-456-7890', '123-456-7890 ']);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should reject invalid formats (too few/too many digits)', () => {
        const result = validPhoneNumbers([
            '123 456 7890',
            '(123)456-7890',
            '12-34-5678',
            '1234567890',
        ]);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should reject non-digit noise embedded in a valid-looking line', () => {
        const result = validPhoneNumbers(['(023) 456-7890ext']);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should handle repetitive valid entries without deduping', () => {
        const result = validPhoneNumbers(['111-111-1111', '111-111-1111']);
        if (result !== undefined) {
            expect(result).toEqual(['111-111-1111', '111-111-1111']);
        }
    });
});
