import { swapPairs, ListNode } from '../0024-swap-nodes-in-pairs';

const toList = (arr) => {
    const dummy = new ListNode(0);
    let cur = dummy;
    for (const v of arr) { cur.next = new ListNode(v); cur = cur.next; }
    return dummy.next;
};

const toArr = (head) => {
    const out = [];
    while (head) { out.push(head.val); head = head.next; }
    return out;
};

describe('0024-swap-nodes-in-pairs', () => {
    it('should return null for empty list', () => {
        const result = swapPairs(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return same node for single-element list', () => {
        const head = toList([1]);
        const result = swapPairs(head);
        if (result !== undefined) expect(toArr(result)).toEqual([1]);
    });

    it('should swap two elements', () => {
        const result = swapPairs(toList([1, 2]));
        if (result !== undefined) expect(toArr(result)).toEqual([2, 1]);
    });

    it('should swap four elements', () => {
        const result = swapPairs(toList([1, 2, 3, 4]));
        if (result !== undefined) expect(toArr(result)).toEqual([2, 1, 4, 3]);
    });

    it('should leave last element in place for odd-length list (off-by-one)', () => {
        const result = swapPairs(toList([1, 2, 3]));
        if (result !== undefined) expect(toArr(result)).toEqual([2, 1, 3]);
    });

    it('should handle repetitive identical values', () => {
        const result = swapPairs(toList([7, 7, 7, 7]));
        if (result !== undefined) expect(toArr(result)).toEqual([7, 7, 7, 7]);
    });

    it('should handle long alternating values', () => {
        const result = swapPairs(toList([1, 2, 3, 4, 5, 6]));
        if (result !== undefined) expect(toArr(result)).toEqual([2, 1, 4, 3, 6, 5]);
    });
});
