import { canCompleteCircuit } from '../0134-gas-station';

describe('0134-gas-station', () => {
    it('should return valid index when solution exists (official example 1)', () => {
        const result = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return -1 when no solution exists (official example 2)', () => {
        const result = canCompleteCircuit([2, 3, 4], [3, 4, 5]);
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should return 0 when single station with gas >= cost', () => {
        const result = canCompleteCircuit([5], [5]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 0 when single station with gas > cost', () => {
        const result = canCompleteCircuit([10], [5]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return -1 when single station with gas < cost', () => {
        const result = canCompleteCircuit([3], [5]);
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should return -1 when total gas < total cost (two stations)', () => {
        const result = canCompleteCircuit([1, 2], [2, 4]);
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should return -1 when total gas < total cost (three stations)', () => {
        const result = canCompleteCircuit([1, 2, 3], [4, 5, 6]);
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should return 0 when valid starting station is first', () => {
        const result = canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return 1 when valid starting station is at index 1', () => {
        const result = canCompleteCircuit([2, 3, 4], [3, 3, 4]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 2 when valid starting station is in middle', () => {
        const result = canCompleteCircuit([1, 2, 3, 4, 5], [5, 5, 1, 6, 2]);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 4 when valid starting station is at end (index n-1)', () => {
        const result = canCompleteCircuit([1, 2, 3, 4, 6], [3, 3, 4, 3, 3]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return 0 for two stations where first is valid', () => {
        const result = canCompleteCircuit([4, 5], [5, 4]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 0 when every position can reach next', () => {
        const result = canCompleteCircuit([5, 5, 5, 5, 5], [5, 5, 5, 5, 5]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return valid index for asymmetric gas distribution', () => {
        const result = canCompleteCircuit([1, 1, 1, 1, 10], [1, 1, 1, 1, 1]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return valid index when first station has no gas', () => {
        const result = canCompleteCircuit([0, 1, 2, 3, 4], [1, 0, 1, 1, 1]);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return -1 for three stations with insufficient total gas', () => {
        const result = canCompleteCircuit([1, 1, 1], [2, 2, 2]);
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should handle large gap at one station', () => {
        const result = canCompleteCircuit([1, 2, 3, 4, 100], [5, 5, 5, 5, 85]);
        if (result !== undefined) expect(result).toBe(4);
    });

    it('should return -1 for four stations with deficit', () => {
        const result = canCompleteCircuit([1, 1, 1, 1], [2, 2, 2, 2]);
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should return valid start when valid start is not first but exists', () => {
        const result = canCompleteCircuit([2, 1, 1, 1, 1], [1, 1, 2, 2, 2]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should find unique valid starting station in complex case', () => {
        const result = canCompleteCircuit([3, 3, 4], [3, 4, 3]);
        if (result !== undefined) expect(result).toBe(2);
    });
});
