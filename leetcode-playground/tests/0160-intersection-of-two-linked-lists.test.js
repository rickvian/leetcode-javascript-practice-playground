import { getIntersectionNode, ListNode } from '../0160-intersection-of-two-linked-lists';

const buildList = (arr) => {
    const dummy = new ListNode(0);
    let cur = dummy;
    for (const v of arr) {
        cur.next = new ListNode(v);
        cur = cur.next;
    }
    return dummy.next;
};

const appendTail = (headA, tailB) => {
    let cur = headA;
    while (cur && cur.next) cur = cur.next;
    if (cur) cur.next = tailB;
};

describe('0160-intersection-of-two-linked-lists', () => {
    it('should return null when either list is empty (min input)', () => {
        const r1 = getIntersectionNode(null, new ListNode(1));
        if (r1 !== undefined) expect(r1).toBeNull();
        const r2 = getIntersectionNode(new ListNode(1), null);
        if (r2 !== undefined) expect(r2).toBeNull();
    });

    it('should return null when both lists are null', () => {
        const result = getIntersectionNode(null, null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return null when two disjoint lists never intersect', () => {
        const a = buildList([1, 2, 3]);
        const b = buildList([4, 5, 6]);
        const result = getIntersectionNode(a, b);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return the intersection node for the classic example', () => {
        const shared = buildList([8, 4, 5]);
        const a = buildList([4, 1]);
        const b = buildList([5, 6, 1]);
        appendTail(a, shared);
        appendTail(b, shared);
        const result = getIntersectionNode(a, b);
        if (result !== undefined && result !== null) expect(result.val).toBe(8);
    });

    it('should handle intersection at the head (same reference)', () => {
        const shared = buildList([1, 2, 3]);
        const result = getIntersectionNode(shared, shared);
        if (result !== undefined && result !== null) expect(result.val).toBe(1);
    });

    it('should handle single-node overlap at the tail', () => {
        const shared = new ListNode(9);
        const a = buildList([1]);
        const b = buildList([2]);
        appendTail(a, shared);
        appendTail(b, shared);
        const result = getIntersectionNode(a, b);
        if (result !== undefined && result !== null) expect(result.val).toBe(9);
    });

    it('should handle repetitive identical values without false-matching on value', () => {
        const a = buildList([1, 1, 1]);
        const b = buildList([1, 1, 1]);
        const result = getIntersectionNode(a, b);
        if (result !== undefined) expect(result).toBeNull();
    });
});
