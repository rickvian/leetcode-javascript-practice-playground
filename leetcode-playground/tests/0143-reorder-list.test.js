import { reorderList, ListNode } from '../0143-reorder-list';

function buildList(arr) {
    if (!arr || arr.length === 0) return null;
    const dummy = new ListNode(0);
    let curr = dummy;
    for (const val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

function listToArray(head) {
    const result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    return result;
}

describe('0143-reorder-list', () => {
    it('should reorder [1,2,3,4] to [1,4,2,3]', () => {
        const head = buildList([1, 2, 3, 4]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 4, 2, 3]);
    });

    it('should reorder [1,2,3,4,5] to [1,5,2,4,3]', () => {
        const head = buildList([1, 2, 3, 4, 5]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 5, 2, 4, 3]);
    });

    it('should handle single node', () => {
        const head = buildList([1]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1]);
    });

    it('should handle two nodes', () => {
        const head = buildList([1, 2]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 2]);
    });

    it('should handle three nodes', () => {
        const head = buildList([1, 2, 3]);
        reorderList(head);
        expect(listToArray(head)).toEqual([1, 3, 2]);
    });
});
