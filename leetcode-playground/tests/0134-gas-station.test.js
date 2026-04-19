import { canCompleteCircuit } from '../0134-gas-station';

describe('0134-gas-station', () => {
    it('should return 0 for a single station where gas >= cost (min input)', () => {
        const result = canCompleteCircuit([5], [4]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return -1 for a single station where gas < cost', () => {
        const result = canCompleteCircuit([1], [5]);
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should return 3 for the classic LeetCode example', () => {
        const result = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
        if (result !== undefined) expect(result).toBe(3);
    });

    it('should return -1 when total gas < total cost', () => {
        const result = canCompleteCircuit([2, 3, 4], [3, 4, 3]);
        if (result !== undefined) expect(result).toBe(-1);
    });

    it('should return 0 for repetitive gas==cost arrays', () => {
        const result = canCompleteCircuit([2, 2, 2], [2, 2, 2]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should handle a zero-gas all-around-full route', () => {
        const result = canCompleteCircuit([5, 0, 0, 0], [1, 1, 1, 1]);
        if (result !== undefined) expect(result).toBe(0);
    });

    it('should return the last index when only the last station is a valid start', () => {
        const result = canCompleteCircuit([0, 0, 0, 5], [1, 1, 1, 1]);
        if (result !== undefined) expect(result).toBe(3);
    });
});
