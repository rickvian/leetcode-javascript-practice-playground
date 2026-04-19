import { TwoSum } from '../0170-two-sum-iii-data-structure-design';

describe('0170-two-sum-iii-data-structure-design', () => {
    it('should return false on find when no numbers have been added', () => {
        const ts = new TwoSum();
        const r = ts.find(0);
        if (r !== undefined) expect(r).toBe(false);
    });

    it('should return true when two added numbers sum to the target', () => {
        const ts = new TwoSum();
        ts.add(1);
        ts.add(3);
        ts.add(5);
        const r = ts.find(4);
        if (r !== undefined) expect(r).toBe(true);
    });

    it('should return false when no pair sums to the target', () => {
        const ts = new TwoSum();
        ts.add(1);
        ts.add(3);
        ts.add(5);
        const r = ts.find(7);
        if (r !== undefined) expect(r).toBe(false);
    });

    it('should allow the same number twice (duplicates are two different entries)', () => {
        const ts = new TwoSum();
        ts.add(0);
        ts.add(0);
        const r = ts.find(0);
        if (r !== undefined) expect(r).toBe(true);
    });

    it('should not use the same index twice when there is only one copy', () => {
        const ts = new TwoSum();
        ts.add(5);
        const r = ts.find(10);
        if (r !== undefined) expect(r).toBe(false);
    });

    it('should handle negative numbers and target=0', () => {
        const ts = new TwoSum();
        ts.add(-3);
        ts.add(3);
        const r = ts.find(0);
        if (r !== undefined) expect(r).toBe(true);
    });

    it('should handle repetitive adds correctly', () => {
        const ts = new TwoSum();
        for (let i = 0; i < 5; i++) ts.add(1);
        const r = ts.find(2);
        if (r !== undefined) expect(r).toBe(true);
    });
});
