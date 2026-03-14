import { levelOrder, TreeNode } from '../0102-binary-tree-level-order-traversal';

describe('0102-binary-tree-level-order-traversal', () => {
    it('should return [[3],[9,20],[15,7]] for [3,9,20,null,null,15,7]', () => {
        const root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    });

    it('should return [[1]] for single node [1]', () => {
        expect(levelOrder(new TreeNode(1))).toEqual([[1]]);
    });

    it('should return [] for null root', () => {
        expect(levelOrder(null)).toEqual([]);
    });

    it('should return [[1],[2,3]] for single-level tree [1,2,3]', () => {
        const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
        expect(levelOrder(root)).toEqual([[1], [2, 3]]);
    });

    it('should return [[1],[2],[3]] for right-skewed tree [1,null,2,null,3]', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });
});
