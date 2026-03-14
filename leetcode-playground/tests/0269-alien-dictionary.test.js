import { alienOrder } from '../0269-alien-dictionary';

describe('0269-alien-dictionary', () => {
    it('should return valid order for ["wrt","wrf","er","ett","rftt"]', () => {
        const result = alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt']);
        // Expected: "wertf" (one valid solution)
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
        // Validate that w < e (w comes before e)
        expect(result.indexOf('w')).toBeLessThan(result.indexOf('e'));
    });

    it('should return "" for invalid dictionary (cycle) ["z","x","z"]', () => {
        expect(alienOrder(['z', 'x', 'z'])).toBe('');
    });

    it('should return single char for single word', () => {
        const result = alienOrder(['z']);
        expect(result).toBe('z');
    });

    it('should handle two words that share prefix', () => {
        const result = alienOrder(['ab', 'adc']);
        // b < d
        expect(typeof result).toBe('string');
        if (result.length > 0) {
            expect(result.indexOf('b')).toBeLessThan(result.indexOf('d'));
        }
    });

    it('should return "" when longer word precedes shorter prefix (invalid)', () => {
        expect(alienOrder(['abc', 'ab'])).toBe('');
    });

    it('should handle words with no ordering constraints', () => {
        const result = alienOrder(['a', 'b', 'c']);
        expect(typeof result).toBe('string');
        expect(result.indexOf('a')).toBeLessThan(result.indexOf('b'));
        expect(result.indexOf('b')).toBeLessThan(result.indexOf('c'));
    });

    it('should return valid order for ["z","x"]', () => {
        const result = alienOrder(['z', 'x']);
        expect(result).toBe('zx');
    });
});
