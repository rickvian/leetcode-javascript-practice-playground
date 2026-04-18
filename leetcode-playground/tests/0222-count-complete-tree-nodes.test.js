import { countNodes, TreeNode } from '../0222-count-complete-tree-nodes';

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

describe('0222-count-complete-tree-nodes', () => {
    it('should count 6 nodes for the LeetCode sample [1,2,3,4,5,6]', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6]);
        const result = countNodes(root);
        if (result !== undefined) {
            expect(result).toBe(6);
        }
    });

    it('should return 0 for a null root', () => {
        const result = countNodes(null);
        if (result !== undefined) {
            expect(result).toBe(0);
        }
    });

    it('should return 1 for a single-node tree', () => {
        const root = new TreeNode(1);
        const result = countNodes(root);
        if (result !== undefined) {
            expect(result).toBe(1);
        }
    });

    it('should count a perfect tree of height 3 as 15', () => {
        const root = buildTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        const result = countNodes(root);
        if (result !== undefined) {
            expect(result).toBe(15);
        }
    });

    it('should count a left-heavy complete tree', () => {
        const root = buildTree([1, 2, 3, 4]);
        const result = countNodes(root);
        if (result !== undefined) {
            expect(result).toBe(4);
        }
    });

    it('should count a complete tree with only left child at last level', () => {
        const root = buildTree([1, 2, 3, 4, 5]);
        const result = countNodes(root);
        if (result !== undefined) {
            expect(result).toBe(5);
        }
    });

    it('should count last-level boundary of just 1 node', () => {
        const root = buildTree([1, 2, 3, 4, null, null, null]);
        const result = countNodes(root);
        if (result !== undefined) {
            expect(result).toBe(4);
        }
    });
});
