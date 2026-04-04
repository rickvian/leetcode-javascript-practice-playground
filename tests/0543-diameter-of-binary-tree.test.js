import { diameterOfBinaryTree } from '../0543-diameter-of-binary-tree.js';

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Builds a tree from level-order array (same format as LeetCode)
// null means no node at that position
// e.g. [1, 2, 3, null, null, 4] =>
//       1
//      / \
//     2   3
//        /
//       4
function buildTree(vals) {
    if (!vals.length || vals[0] === null) return null;
    const root = new TreeNode(vals[0]);
    const queue = [root];
    let i = 1;
    while (i < vals.length) {
        const node = queue.shift();
        if (vals[i] !== null && vals[i] !== undefined) {
            node.left = new TreeNode(vals[i]);
            queue.push(node.left);
        }
        i++;
        if (i < vals.length && vals[i] !== null && vals[i] !== undefined) {
            node.right = new TreeNode(vals[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

describe('0543-diameter-of-binary-tree', () => {
    it('should return diameter when it passes through root', () => {
        //   1
        //  / \
        // 2   3
        const root = buildTree([1, 2, 3]);
        expect(diameterOfBinaryTree(root)).toBe(2);
    });

    it('should return diameter when it does not pass through root', () => {
        //        1
        //       / \
        //      2   3
        //     / \
        //    4   5
        //   /     \
        //  8       7
        //           \
        //            9
        // Path through root (8 to 3): 4 edges
        // Longest path (8 to 9): 5 edges (8-4-2-5-7-9)
        const root = buildTree([1, 2, 3, 4, 5, null, null, 8, null, null, 7, null, null, null, 9]);
        expect(diameterOfBinaryTree(root)).toBe(5);
    });

    it('should handle single node tree', () => {
        const root = buildTree([1]);
        expect(diameterOfBinaryTree(root)).toBe(0);
    });

    it('should handle two node tree', () => {
        //   1
        //  /
        // 2
        const root = buildTree([1, 2]);
        expect(diameterOfBinaryTree(root)).toBe(1);
    });

    it('should handle linear chain (skewed tree)', () => {
        //   1
        //  /
        // 2
        //  \
        //   3
        //    \
        //     4  (wait - skewed but with a right child on node 3... see diagram)
        // Actually:
        //   1
        //  /
        // 2
        //  \
        //   3
        //    \
        //     4
        const root = buildTree([1, 2, null, null, 3, null, 4]);
        expect(diameterOfBinaryTree(root)).toBe(3);
    });

    it('should handle balanced tree', () => {
        //       1
        //      / \
        //     2   3
        //    / \ / \
        //   4  5 6  7
        const root = buildTree([1, 2, 3, 4, 5, 6, 7]);
        expect(diameterOfBinaryTree(root)).toBe(4);
    });

    it('should handle tree with long right subtree', () => {
        //     1
        //    / \
        //   2   3
        //      / \
        //     4   5
        //        / \
        //       6   7
        const root = buildTree([1, 2, 3, null, null, 4, 5, null, null, 6, 7]);
        expect(diameterOfBinaryTree(root)).toBe(4);
    });
});
