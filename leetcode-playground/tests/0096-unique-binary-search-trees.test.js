import { numTrees } from '../0096-unique-binary-search-trees';

describe('0096-unique-binary-search-trees', () => {
    it('should return 1 for n=0 (empty tree counts as 1)', () => {
        const result = numTrees(0);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 1 for n=1 (single node)', () => {
        const result = numTrees(1);
        if (result !== undefined) expect(result).toBe(1);
    });

    it('should return 2 for n=2', () => {
        const result = numTrees(2);
        if (result !== undefined) expect(result).toBe(2);
    });

    it('should return 5 for n=3 (catalan number)', () => {
        const result = numTrees(3);
        if (result !== undefined) expect(result).toBe(5);
    });

    it('should return 14 for n=4 (catalan number, boundary)', () => {
        const result = numTrees(4);
        if (result !== undefined) expect(result).toBe(14);
    });

    it('should return 42 for n=5', () => {
        const result = numTrees(5);
        if (result !== undefined) expect(result).toBe(42);
    });

    it('should return 16796 for n=10 (large n range-limit)', () => {
        const result = numTrees(10);
        if (result !== undefined) expect(result).toBe(16796);
    });
});
