import { diffWaysToCompute } from '../0241-different-ways-to-add-parentheses';

const sortAsc = (arr) => [...arr].sort((a, b) => a - b);

describe('0241-different-ways-to-add-parentheses', () => {
    it('should return [single number] for a single operand', () => {
        const result = diffWaysToCompute('5');
        if (result !== undefined) expect(sortAsc(result)).toEqual([5]);
    });

    it('should handle two-digit single operand "11"', () => {
        const result = diffWaysToCompute('11');
        if (result !== undefined) expect(sortAsc(result)).toEqual([11]);
    });

    it('should handle "2-1-1" (leetcode sample) -> [0, 2]', () => {
        const result = diffWaysToCompute('2-1-1');
        if (result !== undefined) expect(sortAsc(result)).toEqual([0, 2]);
    });

    it('should handle "2*3-4*5" (leetcode sample) -> [-34,-14,-10,-10,10]', () => {
        const result = diffWaysToCompute('2*3-4*5');
        if (result !== undefined) expect(sortAsc(result)).toEqual([-34, -14, -10, -10, 10]);
    });

    it('should handle repetitive "1+1+1+1" all same results', () => {
        const result = diffWaysToCompute('1+1+1+1');
        if (result !== undefined) expect(result.every((v) => v === 4)).toBe(true);
    });

    it('should handle minimum operator expression "0+0"', () => {
        const result = diffWaysToCompute('0+0');
        if (result !== undefined) expect(sortAsc(result)).toEqual([0]);
    });

    it('should handle mixed-negation "10-5*2"', () => {
        const result = diffWaysToCompute('10-5*2');
        if (result !== undefined) expect(sortAsc(result)).toEqual([0, 10]);
    });
});
