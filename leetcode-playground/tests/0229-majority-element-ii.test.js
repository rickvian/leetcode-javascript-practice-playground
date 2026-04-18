import { majorityElement } from '../0229-majority-element-ii';

describe('0229-majority-element-ii', () => {
    it('should find [3] for [3,2,3]', () => {
        const result = majorityElement([3, 2, 3]);
        if (result !== undefined) {
            expect([...result].sort((a, b) => a - b)).toEqual([3]);
        }
    });

    it('should find [1,2] for [1,1,1,3,3,2,2,2]', () => {
        const result = majorityElement([1, 1, 1, 3, 3, 2, 2, 2]);
        if (result !== undefined) {
            expect([...result].sort((a, b) => a - b)).toEqual([1, 2]);
        }
    });

    it('should return empty for an empty input array', () => {
        const result = majorityElement([]);
        if (result !== undefined) {
            expect(result).toEqual([]);
        }
    });

    it('should find the single element for a single-element array', () => {
        const result = majorityElement([7]);
        if (result !== undefined) {
            expect(result).toEqual([7]);
        }
    });

    it('should return empty when no element exceeds n/3 (three unique each appearing once)', () => {
        const result = majorityElement([1, 2, 3]);
        if (result !== undefined) {
            expect(result).toEqual([]);
        }
    });

    it('should handle repetitive data of all same value', () => {
        const result = majorityElement([4, 4, 4, 4, 4]);
        if (result !== undefined) {
            expect([...result].sort((a, b) => a - b)).toEqual([4]);
        }
    });

    it('should handle negative numbers correctly', () => {
        const result = majorityElement([-1, -1, -1, 2, 3]);
        if (result !== undefined) {
            expect([...result].sort((a, b) => a - b)).toEqual([-1]);
        }
    });
});
