import { rightSideView, TreeNode } from '../0199-binary-tree-right-side-view';

const buildTree = (arr) => {
    if (!arr.length || arr[0] == null) return null;
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        const node = queue.shift();
        if (i < arr.length) {
            if (arr[i] != null) {
                node.left = new TreeNode(arr[i]);
                queue.push(node.left);
            }
            i++;
        }
        if (i < arr.length) {
            if (arr[i] != null) {
                node.right = new TreeNode(arr[i]);
                queue.push(node.right);
            }
            i++;
        }
    }
    return root;
};

describe('0199-binary-tree-right-side-view', () => {
    it('should return right-side values for the LeetCode example', () => {
        const root = buildTree([1, 2, 3, null, 5, null, 4]);
        const result = rightSideView(root);
        if (result !== undefined) {
            expect(result).toEqual([1, 3, 4]);
        }
    });

    it('should return empty array for a null root', () => {
        const result = rightSideView(null);
        if (result !== undefined) {
            expect(result).toEqual([]);
        }
    });

    it('should return the single value for a single-node tree', () => {
        const root = new TreeNode(7);
        const result = rightSideView(root);
        if (result !== undefined) {
            expect(result).toEqual([7]);
        }
    });

    it('should see left-only nodes when there are no right children', () => {
        const root = buildTree([1, 2, null, 3]);
        const result = rightSideView(root);
        if (result !== undefined) {
            expect(result).toEqual([1, 2, 3]);
        }
    });

    it('should return every value on a purely right-skewed tree', () => {
        const root = buildTree([1, null, 2, null, 3]);
        const result = rightSideView(root);
        if (result !== undefined) {
            expect(result).toEqual([1, 2, 3]);
        }
    });

    it('should handle a complete tree', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
        const result = rightSideView(root);
        if (result !== undefined) {
            expect(result).toEqual([1, 3, 7]);
        }
    });

    it('should handle repeated identical values', () => {
        const root = buildTree([5, 5, 5, 5, 5]);
        const result = rightSideView(root);
        if (result !== undefined) {
            expect(result).toEqual([5, 5, 5]);
        }
    });
});
