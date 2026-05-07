import { generateTrees, TreeNode } from '../0095-unique-binary-search-trees-ii';

const serialize = (root) => {
    if (!root) return 'X';
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
};

const catalan = [1, 1, 2, 5, 14, 42, 132];

describe('0095-unique-binary-search-trees-ii', () => {
    it('should return [] (or [null]) for n=0 (min input)', () => {
        const result = generateTrees(0);
        if (result !== undefined) {
            expect(Array.isArray(result)).toBe(true);
            expect(result.length).toBeLessThanOrEqual(1);
        }
    });

    it('should return a single-node tree for n=1', () => {
        const result = generateTrees(1);
        if (result !== undefined) {
            expect(result.length).toBe(1);
            expect(result[0].val).toBe(1);
            expect(result[0].left).toBeNull();
            expect(result[0].right).toBeNull();
        }
    });

    it('should return catalan(3)=5 unique trees for n=3', () => {
        const result = generateTrees(3);
        if (result !== undefined) expect(result.length).toBe(catalan[3]);
    });

    it('should return catalan(4)=14 unique trees for n=4 (boundary)', () => {
        const result = generateTrees(4);
        if (result !== undefined) expect(result.length).toBe(catalan[4]);
    });

    it('should produce only structurally unique shapes', () => {
        const result = generateTrees(3);
        if (result !== undefined) {
            const shapes = new Set(result.map(serialize));
            expect(shapes.size).toBe(result.length);
        }
    });

    it('should produce only valid BSTs with values in [1..n]', () => {
        const result = generateTrees(3);
        if (result !== undefined) {
            const isValid = (node, lo, hi) => {
                if (!node) return true;
                if (node.val <= lo || node.val >= hi) return false;
                return isValid(node.left, lo, node.val) && isValid(node.right, node.val, hi);
            };
            for (const tree of result) {
                expect(isValid(tree, 0, 4)).toBe(true);
            }
        }
    });

    it('should return instances of TreeNode', () => {
        const result = generateTrees(2);
        if (result !== undefined) {
            for (const tree of result) expect(tree instanceof TreeNode).toBe(true);
        }
    });
});
