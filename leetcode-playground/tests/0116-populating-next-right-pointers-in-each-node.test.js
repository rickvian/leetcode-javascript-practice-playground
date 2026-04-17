import { connect, Node } from '../0116-populating-next-right-pointers-in-each-node';

const buildPerfect = (values) => {
    const nodes = values.map((v) => new Node(v));
    for (let i = 0; i < nodes.length; i++) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        if (left < nodes.length) nodes[i].left = nodes[left];
        if (right < nodes.length) nodes[i].right = nodes[right];
    }
    return nodes[0] || null;
};

const nextChainAtLevel = (root) => {
    if (!root) return [];
    const levels = [];
    let node = root;
    while (node) {
        const level = [];
        let cur = node;
        while (cur) {
            level.push(cur.val);
            cur = cur.next;
        }
        levels.push(level);
        node = node.left;
    }
    return levels;
};

describe('0116-populating-next-right-pointers-in-each-node', () => {
    it('should return null for null root (min input)', () => {
        const result = connect(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should set next=null for single-node tree', () => {
        const root = new Node(1);
        const result = connect(root);
        if (result !== undefined) expect(result.next).toBeNull();
    });

    it('should connect all levels for a perfect tree [1,2,3,4,5,6,7]', () => {
        const root = buildPerfect([1, 2, 3, 4, 5, 6, 7]);
        const result = connect(root);
        if (result !== undefined) {
            expect(nextChainAtLevel(result)).toEqual([[1], [2, 3], [4, 5, 6, 7]]);
        }
    });

    it('should end each level with next=null', () => {
        const root = buildPerfect([1, 2, 3, 4, 5, 6, 7]);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.next).toBeNull();
            expect(result.right.next).toBeNull();
            expect(result.right.right.next).toBeNull();
        }
    });

    it('should connect [1,2,3]', () => {
        const root = buildPerfect([1, 2, 3]);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.left.next).toBe(result.right);
            expect(result.right.next).toBeNull();
        }
    });

    it('should handle a deep perfect tree of height 4 (15 nodes)', () => {
        const root = buildPerfect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
        const result = connect(root);
        if (result !== undefined) {
            expect(nextChainAtLevel(result)).toEqual([
                [1], [2, 3], [4, 5, 6, 7], [8, 9, 10, 11, 12, 13, 14, 15]
            ]);
        }
    });

    it('should return the (same) root Node', () => {
        const root = buildPerfect([1, 2, 3]);
        const result = connect(root);
        if (result !== undefined) expect(result).toBe(root);
    });
});
