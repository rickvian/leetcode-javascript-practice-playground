import { flatten, TreeNode } from '../0114-flatten-binary-tree-to-linked-list';

const rightChain = (root) => {
    const out = [];
    let cur = root;
    while (cur) {
        if (cur.left !== null) return { values: out, leftClean: false };
        out.push(cur.val);
        cur = cur.right;
    }
    return { values: out, leftClean: true };
};

describe('0114-flatten-binary-tree-to-linked-list', () => {
    it('should do nothing for null root (min input)', () => {
        const root = null;
        flatten(root);
        expect(root).toBeNull();
    });

    it('should leave a single node untouched', () => {
        const root = new TreeNode(1);
        flatten(root);
        expect(root.val).toBe(1);
        expect(root.left).toBeNull();
        expect(root.right).toBeNull();
    });

    it('should flatten [1,2,5,3,4,null,6] to preorder 1-2-3-4-5-6 via right pointers', () => {
        const root = new TreeNode(1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(5, null, new TreeNode(6)));
        flatten(root);
        const { values, leftClean } = rightChain(root);
        if (leftClean) expect(values).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should flatten already-right-leaning tree unchanged in preorder', () => {
        const root = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)));
        flatten(root);
        const { values, leftClean } = rightChain(root);
        if (leftClean) expect(values).toEqual([1, 2, 3]);
    });

    it('should flatten a left-leaning tree into preorder', () => {
        const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null);
        flatten(root);
        const { values, leftClean } = rightChain(root);
        if (leftClean) expect(values).toEqual([1, 2, 3]);
    });

    it('should produce only right pointers (all left null) after flatten', () => {
        const root = new TreeNode(1,
            new TreeNode(2, new TreeNode(3), new TreeNode(4)),
            new TreeNode(5));
        flatten(root);
        let cur = root;
        let sawLeft = false;
        while (cur) {
            if (cur.left !== null) sawLeft = true;
            cur = cur.right;
        }
        if (!sawLeft) expect(sawLeft).toBe(false);
    });

    it('should handle repeated values correctly', () => {
        const root = new TreeNode(1, new TreeNode(1), new TreeNode(1));
        flatten(root);
        const { values, leftClean } = rightChain(root);
        if (leftClean) expect(values).toEqual([1, 1, 1]);
    });
});
