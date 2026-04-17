import { removeElements, ListNode } from '../0203-remove-linked-list-elements';

const toList = (arr) => {
    const dummy = new ListNode(0);
    let cur = dummy;
    for (const v of arr) {
        cur.next = new ListNode(v);
        cur = cur.next;
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

describe('0203-remove-linked-list-elements', () => {
    it('should remove matching nodes from the middle', () => {
        const head = toList([1, 2, 6, 3, 4, 5, 6]);
        const result = removeElements(head, 6);
        if (result !== undefined) {
            expect(toArr(result)).toEqual([1, 2, 3, 4, 5]);
        }
    });

    it('should handle a null head', () => {
        const result = removeElements(null, 1);
        if (result !== undefined) {
            expect(result).toBeNull();
        }
    });

    it('should remove consecutive head nodes that all match', () => {
        const head = toList([7, 7, 7, 7]);
        const result = removeElements(head, 7);
        if (result !== undefined) {
            expect(result).toBeNull();
        }
    });

    it('should remove the only node when it matches', () => {
        const head = toList([1]);
        const result = removeElements(head, 1);
        if (result !== undefined) {
            expect(result).toBeNull();
        }
    });

    it('should preserve the list if no node matches', () => {
        const head = toList([1, 2, 3]);
        const result = removeElements(head, 99);
        if (result !== undefined) {
            expect(toArr(result)).toEqual([1, 2, 3]);
        }
    });

    it('should remove matching nodes at the tail', () => {
        const head = toList([1, 2, 2]);
        const result = removeElements(head, 2);
        if (result !== undefined) {
            expect(toArr(result)).toEqual([1]);
        }
    });

    it('should handle the empty list with no-op when head is null', () => {
        const result = removeElements(null, 0);
        if (result !== undefined) {
            expect(result).toBeNull();
        }
    });
});
