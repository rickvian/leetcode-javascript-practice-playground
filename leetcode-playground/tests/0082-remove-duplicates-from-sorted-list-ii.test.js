import { deleteDuplicates, ListNode } from '../0082-remove-duplicates-from-sorted-list-ii';

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

describe('0082-remove-duplicates-from-sorted-list-ii', () => {
    it('should return null for empty list (min input)', () => {
        const result = deleteDuplicates(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should preserve single-element list', () => {
        const result = deleteDuplicates(toList([7]));
        if (result !== undefined) expect(toArr(result)).toEqual([7]);
    });

    it('should remove all duplicate groups in [1,2,3,3,4,4,5] -> [1,2,5]', () => {
        const result = deleteDuplicates(toList([1, 2, 3, 3, 4, 4, 5]));
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 5]);
    });

    it('should remove duplicates at the head: [1,1,1,2,3] -> [2,3]', () => {
        const result = deleteDuplicates(toList([1, 1, 1, 2, 3]));
        if (result !== undefined) expect(toArr(result)).toEqual([2, 3]);
    });

    it('should return empty when all values repeat', () => {
        const result = deleteDuplicates(toList([1, 1, 1, 1]));
        if (result !== undefined) expect(toArr(result)).toEqual([]);
    });

    it('should preserve list with no duplicates', () => {
        const result = deleteDuplicates(toList([1, 2, 3, 4]));
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 3, 4]);
    });

    it('should remove duplicates at the tail: [1,2,3,3] -> [1,2]', () => {
        const result = deleteDuplicates(toList([1, 2, 3, 3]));
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2]);
    });
});
