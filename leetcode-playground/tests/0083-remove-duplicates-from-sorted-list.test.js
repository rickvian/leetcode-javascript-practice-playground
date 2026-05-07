import { deleteDuplicates, ListNode } from '../0083-remove-duplicates-from-sorted-list';

const toList = (arr) => {
    const dummy = new ListNode();
    let tail = dummy;
    for (const v of arr) {
        tail.next = new ListNode(v);
        tail = tail.next;
    }
    return dummy.next;
};

const toArr = (head) => {
    const out = [];
    let cur = head;
    while (cur) {
        out.push(cur.val);
        cur = cur.next;
    }
    return out;
};

describe('0083-remove-duplicates-from-sorted-list', () => {
    it('should return null for empty list (min input)', () => {
        const result = deleteDuplicates(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should preserve single-element list', () => {
        const result = deleteDuplicates(toList([1]));
        if (result !== undefined) expect(toArr(result)).toEqual([1]);
    });

    it('should collapse [1,1,2] -> [1,2] (one occurrence each)', () => {
        const result = deleteDuplicates(toList([1, 1, 2]));
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2]);
    });

    it('should collapse [1,1,2,3,3] -> [1,2,3]', () => {
        const result = deleteDuplicates(toList([1, 1, 2, 3, 3]));
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 3]);
    });

    it('should collapse all-identical values to a single node', () => {
        const result = deleteDuplicates(toList([5, 5, 5, 5]));
        if (result !== undefined) expect(toArr(result)).toEqual([5]);
    });

    it('should preserve list with all unique values', () => {
        const result = deleteDuplicates(toList([1, 2, 3, 4, 5]));
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should collapse dup pairs at both ends ([1,1,2,3,3] via distinct shape)', () => {
        const result = deleteDuplicates(toList([-1, -1, 0, 0, 1]));
        if (result !== undefined) expect(toArr(result)).toEqual([-1, 0, 1]);
    });
});
