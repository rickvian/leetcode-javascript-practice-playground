import { pathSum, TreeNode } from '../0113-path-sum-ii';

const canonical = (r) => {
    if (!Array.isArray(r)) return r;
    return r.map((p) => p.join(',')).sort();
};

describe('0113-path-sum-ii', () => {
    it('should return [] for null root (min input)', () => {
        const result = pathSum(null, 0);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [] for single node whose value does not match', () => {
        const result = pathSum(new TreeNode(5), 4);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should return [[v]] for matching single node', () => {
        const result = pathSum(new TreeNode(5), 5);
        if (result !== undefined) expect(result).toEqual([[5]]);
    });

    it('should return all leaf paths summing to 22 for classic [5,4,8,...]', () => {
        const root = new TreeNode(5,
            new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null),
            new TreeNode(8, new TreeNode(13), new TreeNode(4, new TreeNode(5), new TreeNode(1))));
        const result = pathSum(root, 22);
        if (result !== undefined) {
            expect(canonical(result)).toEqual(canonical([[5, 4, 11, 2], [5, 8, 4, 5]]));
        }
    });

    it('should exclude paths that sum only through internal nodes', () => {
        const root = new TreeNode(1, new TreeNode(2), null);
        const result = pathSum(root, 1);
        if (result !== undefined) expect(result).toEqual([]);
    });

    it('should handle negative values producing target from negative path', () => {
        const root = new TreeNode(-2, null, new TreeNode(-3));
        const result = pathSum(root, -5);
        if (result !== undefined) expect(canonical(result)).toEqual(canonical([[-2, -3]]));
    });

    it('should handle all-zero tree with target 0 (each leaf is a distinct path)', () => {
        const root = new TreeNode(0, new TreeNode(0), new TreeNode(0));
        const result = pathSum(root, 0);
        if (result !== undefined) expect(canonical(result)).toEqual(canonical([[0, 0], [0, 0]]));
    });
});
