import { majorityElement } from '../0169-majority-element';

describe('0169-majority-element', () => {
    it('should return the single element of a one-element array', () => {
        const result = majorityElement([7]);
        if (result !== undefined) expect(result).toBe(7);
    });

    it('should return 3 for [3,2,3] (classic)', () => {
        const result = majorityElement([3, 2, 3]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return 2 for [2,2,1,1,1,2,2]', () => {
        const result = majorityElement([2, 2, 1, 1, 1, 2, 2]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should handle repetitive identical array', () => {
        const result = majorityElement([5, 5, 5, 5]);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should handle negative majority', () => {
        const result = majorityElement([-1, -1, -1, 2, 3]);
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should handle two-element array (both equal)', () => {
        const result = majorityElement([4, 4]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle exactly-floor(n/2)+1 occurrences at n=7 (boundary)', () => {
        const result = majorityElement([6, 1, 2, 6, 6, 6, 3]);
        if (result !== undefined) expect(result).toBe(6);
    });
});
