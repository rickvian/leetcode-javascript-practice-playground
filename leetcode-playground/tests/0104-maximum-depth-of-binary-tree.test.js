import { maxDepth, TreeNode } from '../0104-maximum-depth-of-binary-tree';

describe('0104-maximum-depth-of-binary-tree', () => {
    it('should return 3 for [3,9,20,null,null,15,7]', () => {
        const root = new TreeNode(3,
            new TreeNode(9),
            new TreeNode(20, new TreeNode(15), new TreeNode(7))
        );
        expect(maxDepth(root)).toBe(3);
    });

    it('should return 2 for [1,null,2]', () => {
        const root = new TreeNode(1, null, new TreeNode(2));
        expect(maxDepth(root)).toBe(2);
    });

    it('should return 0 for null root', () => {
        expect(maxDepth(null)).toBe(0);
    });

    it('should return 1 for single node [1]', () => {
        expect(maxDepth(new TreeNode(1))).toBe(1);
    });

    it('should return 4 for a balanced tree of depth 4', () => {
        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(4, new TreeNode(8), new TreeNode(9)),
                new TreeNode(5, new TreeNode(10), new TreeNode(11))
            ),
            new TreeNode(3,
                new TreeNode(6, new TreeNode(12), new TreeNode(13)),
                new TreeNode(7, new TreeNode(14), new TreeNode(15))
            )
        );
        expect(maxDepth(root)).toBe(4);
    });

    it('should return 4 for left-skewed tree [1,2,null,3,null,4]', () => {
        const root = new TreeNode(1,
            new TreeNode(2,
                new TreeNode(3,
                    new TreeNode(4),
                    null
                ),
                null
            ),
            null
        );
        expect(maxDepth(root)).toBe(4);
    });
});
