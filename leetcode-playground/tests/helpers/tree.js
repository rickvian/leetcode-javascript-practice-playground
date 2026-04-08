class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Builds a binary tree from a level-order array (LeetCode input format).
 * null means no node at that position.
 *
 * Example:
 *   buildTree([1, 2, 3, null, null, 4])
 *       1
 *      / \
 *     2   3
 *        /
 *       4
 */
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

export { TreeNode, buildTree };
