import { invertTree, TreeNode } from '../0226-invert-binary-tree';

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

function treeToArray(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        if (node === null) {
            result.push(null);
        } else {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    while (result[result.length - 1] === null) result.pop();
    return result;
}

describe('0226-invert-binary-tree', () => {
    it('should invert tree [4,2,7,1,3,6,9] to [4,7,2,9,6,3,1]', () => {
        const root = buildTree([4, 2, 7, 1, 3, 6, 9]);
        const result = invertTree(root);
        expect(treeToArray(result)).toEqual([4, 7, 2, 9, 6, 3, 1]);
    });

    it('should invert tree [2,1,3] to [2,3,1]', () => {
        const root = buildTree([2, 1, 3]);
        const result = invertTree(root);
        expect(treeToArray(result)).toEqual([2, 3, 1]);
    });

    it('should return null for empty tree', () => {
        expect(invertTree(null)).toBeNull();
    });

    it('should handle single node tree', () => {
        const root = new TreeNode(1);
        const result = invertTree(root);
        expect(treeToArray(result)).toEqual([1]);
    });

    it('should handle tree with only left children', () => {
        const root = buildTree([1, 2, null, 3]);
        const result = invertTree(root);
        expect(result).toBeDefined();
        expect(result.val).toBe(1);
    });

    it('should handle two-level tree', () => {
        const root = buildTree([1, 2, 3]);
        const result = invertTree(root);
        expect(treeToArray(result)).toEqual([1, 3, 2]);
    });
});
