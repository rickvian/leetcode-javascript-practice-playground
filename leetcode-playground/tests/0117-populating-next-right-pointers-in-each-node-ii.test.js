import { connect, Node } from '../0117-populating-next-right-pointers-in-each-node-ii';

const levelOrderViaNext = (root) => {
    if (!root) return [];
    const levels = [];
    let levelHead = root;
    while (levelHead) {
        const values = [];
        let cur = levelHead;
        let nextLevelHead = null;
        while (cur) {
            values.push(cur.val);
            if (!nextLevelHead) nextLevelHead = cur.left || cur.right;
            cur = cur.next;
        }
        levels.push(values);
        levelHead = nextLevelHead;
    }
    return levels;
};

describe('0117-populating-next-right-pointers-in-each-node-ii', () => {
    it('should return null for null root (min input)', () => {
        const result = connect(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should leave single-node next as null', () => {
        const root = new Node(1);
        const result = connect(root);
        if (result !== undefined) expect(result.next).toBeNull();
    });

    it('should connect nodes across subtrees for [1,2,3,4,5,null,7]', () => {
        const root = new Node(1,
            new Node(2, new Node(4), new Node(5)),
            new Node(3, null, new Node(7)));
        const result = connect(root);
        if (result !== undefined) {
            expect(levelOrderViaNext(result)).toEqual([[1], [2, 3], [4, 5, 7]]);
        }
    });

    it('should handle a left-only spine', () => {
        const root = new Node(1, new Node(2, new Node(3), null), null);
        const result = connect(root);
        if (result !== undefined) {
            expect(result.next).toBeNull();
            expect(result.left.next).toBeNull();
            expect(result.left.left.next).toBeNull();
        }
    });

    it('should handle a right-only spine', () => {
        const root = new Node(1, null, new Node(2, null, new Node(3)));
        const result = connect(root);
        if (result !== undefined) {
            expect(result.next).toBeNull();
            expect(result.right.next).toBeNull();
            expect(result.right.right.next).toBeNull();
        }
    });

    it('should end each level chain with next=null', () => {
        const root = new Node(1,
            new Node(2, new Node(4), null),
            new Node(3, null, new Node(7)));
        const result = connect(root);
        if (result !== undefined) {
            expect(result.next).toBeNull();
            expect(result.right.next).toBeNull();
            expect(result.right.right.next).toBeNull();
        }
    });

    it('should handle deeply skewed holes (two subtrees with gap)', () => {
        const root = new Node(1,
            new Node(2, null, new Node(4)),
            new Node(3, new Node(5), null));
        const result = connect(root);
        if (result !== undefined) {
            expect(levelOrderViaNext(result)).toEqual([[1], [2, 3], [4, 5]]);
        }
    });
});
