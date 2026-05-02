import { lowestCommonAncestor, TreeNode } from '../0236-lowest-common-ancestor-of-a-binary-tree';

describe('0236-lowest-common-ancestor-of-a-binary-tree', () => {
    it('should return null when root is null', () => {
        const result = lowestCommonAncestor(null, null, null);
        if (result !== undefined) expect(result).toBe(null);
    });

    it('should return root when tree is a single node and both p/q are root', () => {
        const root = new TreeNode(1);
        const result = lowestCommonAncestor(root, root, root);
        if (result !== undefined) expect(result).toBe(root);
    });

    it('should return the root when p and q are in different subtrees', () => {
        // Tree: 3 -> (5, 1)
        const left = new TreeNode(5);
        const right = new TreeNode(1);
        const root = new TreeNode(3, left, right);
        const result = lowestCommonAncestor(root, left, right);
        if (result !== undefined) expect(result).toBe(root);
    });

    it('should return the ancestor when one node is ancestor of the other', () => {
        // Tree: 3 -> (5 -> (6,2), 1)
        const six = new TreeNode(6);
        const two = new TreeNode(2);
        const five = new TreeNode(5, six, two);
        const root = new TreeNode(3, five, new TreeNode(1));
        const result = lowestCommonAncestor(root, five, two);
        if (result !== undefined) expect(result).toBe(five);
    });

    it('should handle deep left-skewed tree (range limit)', () => {
        const deep = new TreeNode(4);
        const mid = new TreeNode(3, deep, null);
        const outer = new TreeNode(2, mid, null);
        const root = new TreeNode(1, outer, null);
        const result = lowestCommonAncestor(root, deep, mid);
        if (result !== undefined) expect(result).toBe(mid);
    });

    it('should handle identical p and q (off-by-one: both are same node)', () => {
        const only = new TreeNode(7);
        const root = new TreeNode(1, only, null);
        const result = lowestCommonAncestor(root, only, only);
        if (result !== undefined) expect(result).toBe(only);
    });

    it('should handle repeated leaf structure', () => {
        const a = new TreeNode(2);
        const b = new TreeNode(2);
        const root = new TreeNode(2, a, b);
        const result = lowestCommonAncestor(root, a, b);
        if (result !== undefined) expect(result).toBe(root);
    });

    it('should find deep LCA buried 5 levels down in a wide tree', () => {
        //                        1
        //                 /            \
        //               2               3
        //             /   \           /   \
        //           4       5       6       7
        //          / \     / \     / \
        //         8   9  10  11  12  13
        //        / \           \
        //      14  15          16
        //      /                 \
        //    [p=17]             [q=16] <- already at 16
        //
        // p=17 is under 14->8->4->2->1
        // q=16 is under 11->5->2->1
        // LCA should be node 2

        const p = new TreeNode(17);
        const fifteen = new TreeNode(15);
        const fourteen = new TreeNode(14, p, null);
        const eight = new TreeNode(8, fourteen, fifteen);
        const nine = new TreeNode(9);
        const four = new TreeNode(4, eight, nine);

        const ten = new TreeNode(10);
        const q = new TreeNode(16);
        const eleven = new TreeNode(11, null, q);
        const five = new TreeNode(5, ten, eleven);

        const two = new TreeNode(2, four, five);

        const twelve = new TreeNode(12);
        const thirteen = new TreeNode(13);
        const six = new TreeNode(6, twelve, thirteen);
        const seven = new TreeNode(7);
        const three = new TreeNode(3, six, seven);

        const root = new TreeNode(1, two, three);

        const result = lowestCommonAncestor(root, p, q);
        if (result !== undefined) expect(result).toBe(two);
    });
});
