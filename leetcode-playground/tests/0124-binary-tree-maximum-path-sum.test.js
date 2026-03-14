import { maxPathSum, TreeNode } from '../0124-binary-tree-maximum-path-sum';

function buildTree(arr) {
    if (!arr || arr.length === 0) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (i < arr.length) {
        const node = queue.shift();
        if (arr[i] !== null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] !== null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

describe('0124-binary-tree-maximum-path-sum', () => {
    it('should return 6 for [1,2,3]', () => {
        const root = buildTree([1, 2, 3]);
        expect(maxPathSum(root)).toBe(6);
    });

    it('should return 42 for [-10,9,20,null,null,15,7]', () => {
        const root = buildTree([-10, 9, 20, null, null, 15, 7]);
        expect(maxPathSum(root)).toBe(42);
    });

    it('should handle single node', () => {
        const root = new TreeNode(-3);
        expect(maxPathSum(root)).toBe(-3);
    });

    it('should handle all negative values', () => {
        const root = buildTree([-1, -2, -3]);
        expect(maxPathSum(root)).toBe(-1);
    });

    it('should handle path through root with left/right gains', () => {
        const root = buildTree([1, -2, 3]);
        expect(maxPathSum(root)).toBe(4);
    });

    it('should handle two-node tree', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        expect(maxPathSum(root)).toBe(3);
    });

    it('should return single node value when all paths are worse', () => {
        const root = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]);
        expect(maxPathSum(root)).toBe(48);
    });
});
