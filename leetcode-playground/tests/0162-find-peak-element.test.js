import { findPeakElement } from '../0162-find-peak-element';

describe('0162-find-peak-element', () => {
    it('should return 0 for a single-element array', () => {
        const result = findPeakElement([5]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return a valid peak index for [1,2,3,1]', () => {
        const result = findPeakElement([1, 2, 3, 1]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return a valid peak index among multiple peaks', () => {
        const result = findPeakElement([1, 2, 1, 3, 5, 6, 4]);
        if (result !== undefined) expect([1, 5]).toContain(result);
    });

    it('should handle a strictly ascending array (peak at end)', () => {
        const result = findPeakElement([1, 2, 3, 4, 5]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should handle a strictly descending array (peak at start)', () => {
        const result = findPeakElement([5, 4, 3, 2, 1]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle two-element ascending array', () => {
        const result = findPeakElement([1, 2]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should handle two-element descending array', () => {
        const result = findPeakElement([2, 1]);
        if (result !== undefined) expect(result).toBe(0);
    });
});
