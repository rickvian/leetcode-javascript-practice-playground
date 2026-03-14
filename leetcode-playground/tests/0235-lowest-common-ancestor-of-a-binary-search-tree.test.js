import { lowestCommonAncestor, TreeNode } from '../0235-lowest-common-ancestor-of-a-binary-search-tree';

function buildBST(values) {
    if (!values || values.length === 0) return null;
    const nodes = {};
    const root = new TreeNode(values[0]);
    nodes[values[0]] = root;
    const queue = [root];
    let i = 1;
    while (i < values.length) {
        const node = queue.shift();
        if (i < values.length && values[i] !== null) {
            node.left = new TreeNode(values[i]);
            nodes[values[i]] = node.left;
            queue.push(node.left);
        }
        i++;
        if (i < values.length && values[i] !== null) {
            node.right = new TreeNode(values[i]);
            nodes[values[i]] = node.right;
            queue.push(node.right);
        }
        i++;
    }
    return { root, nodes };
}

describe('0235-lowest-common-ancestor-of-a-binary-search-tree', () => {
    it('should return LCA of 2 and 8 in BST [6,2,8,0,4,7,9,null,null,3,5] = 6', () => {
        const { root, nodes } = buildBST([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
        const result = lowestCommonAncestor(root, nodes[2], nodes[8]);
        expect(result && result.val).toBe(6);
    });

    it('should return LCA of 2 and 4 in BST [6,2,8,0,4,7,9,null,null,3,5] = 2', () => {
        const { root, nodes } = buildBST([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
        const result = lowestCommonAncestor(root, nodes[2], nodes[4]);
        expect(result && result.val).toBe(2);
    });

    it('should return LCA when one node is ancestor of another', () => {
        const { root, nodes } = buildBST([2, 1]);
        const result = lowestCommonAncestor(root, nodes[2], nodes[1]);
        expect(result && result.val).toBe(2);
    });

    it('should return root when p and q are on opposite sides', () => {
        const { root, nodes } = buildBST([4, 2, 6, 1, 3, 5, 7]);
        const result = lowestCommonAncestor(root, nodes[1], nodes[7]);
        expect(result && result.val).toBe(4);
    });

    it('should handle p and q both in left subtree', () => {
        const { root, nodes } = buildBST([4, 2, 6, 1, 3, 5, 7]);
        const result = lowestCommonAncestor(root, nodes[1], nodes[3]);
        expect(result && result.val).toBe(2);
    });

    it('should handle p and q both in right subtree', () => {
        const { root, nodes } = buildBST([4, 2, 6, 1, 3, 5, 7]);
        const result = lowestCommonAncestor(root, nodes[5], nodes[7]);
        expect(result && result.val).toBe(6);
    });
});
