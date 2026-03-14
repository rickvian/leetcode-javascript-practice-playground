import { kthSmallest, TreeNode } from '../0230-kth-smallest-element-in-a-bst';

function buildTree(values) {
    if (!values || values.length === 0) return null;
    const root = new TreeNode(values[0]);
    const queue = [root];
    let i = 1;
    while (i < values.length) {
        const node = queue.shift();
        if (values[i] !== null) {
            node.left = new TreeNode(values[i]);
            queue.push(node.left);
        }
        i++;
        if (i < values.length && values[i] !== null) {
            node.right = new TreeNode(values[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

describe('0230-kth-smallest-element-in-a-bst', () => {
    it('should return 1st smallest in [3,1,4,null,2] = 1', () => {
        const root = buildTree([3, 1, 4, null, 2]);
        expect(kthSmallest(root, 1)).toBe(1);
    });

    it('should return 3rd smallest in [5,3,6,2,4,null,null,1] = 3', () => {
        const root = buildTree([5, 3, 6, 2, 4, null, null, 1]);
        expect(kthSmallest(root, 3)).toBe(3);
    });

    it('should return kth smallest for single node k=1', () => {
        const root = new TreeNode(1);
        expect(kthSmallest(root, 1)).toBe(1);
    });

    it('should return 2nd smallest in [3,1,4,null,2] = 2', () => {
        const root = buildTree([3, 1, 4, null, 2]);
        expect(kthSmallest(root, 2)).toBe(2);
    });

    it('should return last element when k equals total nodes', () => {
        const root = buildTree([3, 1, 4, null, 2]);
        expect(kthSmallest(root, 4)).toBe(4);
    });

    it('should handle balanced BST', () => {
        const root = buildTree([4, 2, 6, 1, 3, 5, 7]);
        expect(kthSmallest(root, 4)).toBe(4);
        expect(kthSmallest(root, 1)).toBe(1);
        expect(kthSmallest(root, 7)).toBe(7);
    });
});
