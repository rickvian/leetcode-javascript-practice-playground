import { insertionSortList, ListNode } from '../0147-insertion-sort-list';

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
    const arr = [];
    for (let cur = head; cur; cur = cur.next) arr.push(cur.val);
    return arr;
};

describe('0147-insertion-sort-list', () => {
    it('should return null for null head (min input)', () => {
        const result = insertionSortList(null);
        if (result !== undefined) expect(result).toBeNull();
    });

    it('should return a single-node list as-is', () => {
        const result = insertionSortList(toList([42]));
        if (result !== undefined) expect(toArr(result)).toEqual([42]);
    });

    it('should sort [4,2,1,3] ascending', () => {
        const result = insertionSortList(toList([4, 2, 1, 3]));
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 3, 4]);
    });

    it('should sort the classic [-1,5,3,4,0]', () => {
        const result = insertionSortList(toList([-1, 5, 3, 4, 0]));
        if (result !== undefined) expect(toArr(result)).toEqual([-1, 0, 3, 4, 5]);
    });

    it('should keep an already-sorted list untouched', () => {
        const result = insertionSortList(toList([1, 2, 3, 4, 5]));
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle repetitive identical values', () => {
        const result = insertionSortList(toList([5, 5, 5, 5]));
        if (result !== undefined) expect(toArr(result)).toEqual([5, 5, 5, 5]);
    });

    it('should sort a strictly descending list', () => {
        const result = insertionSortList(toList([5, 4, 3, 2, 1]));
        if (result !== undefined) expect(toArr(result)).toEqual([1, 2, 3, 4, 5]);
    });
});
