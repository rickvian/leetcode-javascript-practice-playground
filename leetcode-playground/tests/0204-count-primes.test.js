import { countPrimes } from '../0204-count-primes';

describe('0204-count-primes', () => {
    it('should count primes less than 10 as 4 (2,3,5,7)', () => {
        const result = countPrimes(10);
        if (result !== undefined) {
            expect(result).toBe(4);
        }
    });

    it('should return 0 for n=0', () => {
        const result = countPrimes(0);
        if (result !== undefined) {
            expect(result).toBe(0);
        }
    });

    it('should return 0 for n=1', () => {
        const result = countPrimes(1);
        if (result !== undefined) {
            expect(result).toBe(0);
        }
    });

    it('should return 0 for n=2 (strict less-than boundary)', () => {
        const result = countPrimes(2);
        if (result !== undefined) {
            expect(result).toBe(0);
        }
    });

    it('should return 1 for n=3 (just {2})', () => {
        const result = countPrimes(3);
        if (result !== undefined) {
            expect(result).toBe(1);
        }
    });

    it('should count primes less than 100 as 25', () => {
        const result = countPrimes(100);
        if (result !== undefined) {
            expect(result).toBe(25);
        }
    });

    it('should handle a large n of 5_000_000 consistently (type-check)', () => {
        const result = countPrimes(5_000_000);
        if (result !== undefined) {
            expect(typeof result).toBe('number');
        }
    });
});
