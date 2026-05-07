import { restoreIpAddresses } from '../0093-restore-ip-addresses';

describe('0093-restore-ip-addresses', () => {
    it('should return [] for empty string (min input)', () => {
        const result = restoreIpAddresses('');
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] for strings shorter than 4 digits', () => {
        const result = restoreIpAddresses('123');
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] for strings longer than 12 digits (range limit)', () => {
        const result = restoreIpAddresses('1234567890123');
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return ["0.0.0.0"] for all-zero minimum valid input', () => {
        const result = restoreIpAddresses('0000');
        if (result !== undefined) expect([...result].sort()).toEqual(['0.0.0.0']);
    });

    it('should not produce octets with leading zeros like "01"', () => {
        const result = restoreIpAddresses('010010');
        if (result !== undefined) {
            expect([...result].sort()).toEqual(['0.10.0.10', '0.100.1.0']);
        }
    });

    it('should handle boundary 255.255.255.255', () => {
        const result = restoreIpAddresses('255255255255');
        if (result !== undefined) expect([...result].sort()).toEqual(['255.255.255.255']);
    });

    it('should return both valid splits for "25525511135"', () => {
        const result = restoreIpAddresses('25525511135');
        if (result !== undefined) {
            expect([...result].sort()).toEqual(['255.255.11.135', '255.255.111.35']);
        }
    });
});
