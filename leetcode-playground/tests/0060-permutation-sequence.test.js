import { getPermutation } from '../0060-permutation-sequence';

describe('0060-permutation-sequence', () => {
    it('should return "1" for n=1,k=1 (min input)', () => {
        const result = getPermutation(1, 1);
        if (result !== undefined) expect(result).toBe('1');
    });

    it('should return "213" for n=3,k=3 (LeetCode example)', () => {
        const result = getPermutation(3, 3);
        if (result !== undefined) expect(result).toBe('213');
    });

    it('should return "2314" for n=4,k=9 (LeetCode example)', () => {
        const result = getPermutation(4, 9);
        if (result !== undefined) expect(result).toBe('2314');
    });

    it('should return first permutation "123" for n=3,k=1 (off-by-one bound)', () => {
        const result = getPermutation(3, 1);
        if (result !== undefined) expect(result).toBe('123');
    });

    it('should return last permutation "321" for n=3,k=6 (upper boundary)', () => {
        const result = getPermutation(3, 6);
        if (result !== undefined) expect(result).toBe('321');
    });

    it('should handle n=9, k=1 (ascending single digits, repetitive length)', () => {
        const result = getPermutation(9, 1);
        if (result !== undefined) expect(result).toBe('123456789');
    });

    it('should handle n=9, k=factorial(9) (upper range limit = 362880)', () => {
        const result = getPermutation(9, 362880);
        if (result !== undefined) expect(result).toBe('987654321');
    });
});
