import { sortList, ListNode } from '../0148-sort-list';

function buildList(arr) {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let cur = head;
    for (let i = 1; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return head;
}

function listToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

describe('0148-sort-list', () => {
    it('should sort a basic unsorted list', () => {
        expect(listToArray(sortList(buildList([4, 2, 1, 3])))).toEqual([1, 2, 3, 4]);
    });

    it('should sort a list with negative numbers', () => {
        expect(listToArray(sortList(buildList([-1, 5, 3, 4, 0])))).toEqual([-1, 0, 3, 4, 5]);
    });

    it('should return null for empty list', () => {
        expect(sortList(null)).toBeNull();
    });

    it('should return single node unchanged', () => {
        expect(listToArray(sortList(buildList([1])))).toEqual([1]);
    });

    it('should handle already sorted list', () => {
        expect(listToArray(sortList(buildList([1, 2, 3, 4, 5])))).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle reverse sorted list', () => {
        expect(listToArray(sortList(buildList([5, 4, 3, 2, 1])))).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle duplicate values', () => {
        expect(listToArray(sortList(buildList([3, 1, 2, 1, 3])))).toEqual([1, 1, 2, 3, 3]);
    });

    it('should handle all same values', () => {
        expect(listToArray(sortList(buildList([2, 2, 2])))).toEqual([2, 2, 2]);
    });

    it('should handle two elements unsorted', () => {
        expect(listToArray(sortList(buildList([2, 1])))).toEqual([1, 2]);
    });

    it('should handle list with zeros and negatives', () => {
        expect(listToArray(sortList(buildList([0, -1, 0, 1])))).toEqual([-1, 0, 0, 1]);
    });
});
