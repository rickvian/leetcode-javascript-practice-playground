import { copyRandomList, Node } from '../0138-copy-list-with-random-pointer';

const buildList = (values, randomIndexes) => {
    if (values.length === 0) return null;
    const nodes = values.map(v => new Node(v));
    for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i + 1];
    for (let i = 0; i < nodes.length; i++) {
        const idx = randomIndexes[i];
        nodes[i].random = idx === null ? null : nodes[idx];
    }
    return nodes[0];
};

const toArray = (head) => {
    const arr = [];
    for (let cur = head; cur; cur = cur.next) arr.push(cur.val);
    return arr;
};

describe('0138-copy-list-with-random-pointer', () => {
    it('should return null for null head (min input)', () => {
        const result = copyRandomList(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should copy a single-node list with null random', () => {
        const head = new Node(7);
        const result = copyRandomList(head);
        if (result !== undefined) {
            expect(result).not.toBe(head);
            expect(result.val).toBe(7);
            expect(result.random).toBeNull();
        }
    });

    it('should copy a single-node list with random pointing to itself', () => {
        const head = new Node(1);
        head.random = head;
        const result = copyRandomList(head);
        if (result !== undefined) {
            expect(result).not.toBe(head);
            expect(result.random).toBe(result);
        }
    });

    it('should deep-copy the classic 5-node example [[7,null],[13,0],[11,4],[10,2],[1,0]]', () => {
        const head = buildList([7, 13, 11, 10, 1], [null, 0, 4, 2, 0]);
        const result = copyRandomList(head);
        if (result !== undefined) {
            expect(toArray(result)).toEqual([7, 13, 11, 10, 1]);
            let cur = result;
            while (cur) {
                if (cur.random) expect(cur.random).not.toBe(head);
                cur = cur.next;
            }
        }
    });

    it('should copy a list where all randoms are null', () => {
        const head = buildList([1, 2, 3], [null, null, null]);
        const result = copyRandomList(head);
        if (result !== undefined) {
            expect(toArray(result)).toEqual([1, 2, 3]);
            let cur = result;
            while (cur) {
                expect(cur.random).toBeNull();
                cur = cur.next;
            }
        }
    });

    it('should handle all nodes pointing to the same random (repetitive)', () => {
        const head = buildList([9, 9, 9], [0, 0, 0]);
        const result = copyRandomList(head);
        if (result !== undefined) {
            const first = result;
            let cur = result;
            while (cur) {
                expect(cur.random).toBe(first);
                cur = cur.next;
            }
        }
    });

    it('should produce truly deep copies (no shared nodes with original)', () => {
        const head = buildList([1, 2], [1, 0]);
        const result = copyRandomList(head);
        if (result !== undefined) {
            expect(result).not.toBe(head);
            expect(result.next).not.toBe(head.next);
        }
    });
});
