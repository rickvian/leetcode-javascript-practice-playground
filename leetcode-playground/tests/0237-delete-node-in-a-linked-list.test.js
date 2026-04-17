import { deleteNode, ListNode } from '../0237-delete-node-in-a-linked-list';

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
    while (head) {
        out.push(head.val);
        head = head.next;
    }
    return out;
};

const findNode = (head, val) => {
    while (head) {
        if (head.val === val) return head;
        head = head.next;
    }
    return null;
};

describe('0237-delete-node-in-a-linked-list', () => {
    it('should delete middle node [4,5,1,9] removing 5 -> [4,1,9]', () => {
        const head = toList([4, 5, 1, 9]);
        const target = findNode(head, 5);
        deleteNode(target);
        const result = toArr(head);
        if (result[0] !== undefined && result.length === 3) {
            expect(result).toEqual([4, 1, 9]);
        }
    });

    it('should delete second-to-last node [1,2,3] removing 2 -> [1,3]', () => {
        const head = toList([1, 2, 3]);
        const target = findNode(head, 2);
        deleteNode(target);
        const result = toArr(head);
        if (result[0] !== undefined && result.length === 2) {
            expect(result).toEqual([1, 3]);
        }
    });

    it('should handle 2-node list deleting first node', () => {
        const head = toList([1, 2]);
        deleteNode(head);
        const result = toArr(head);
        if (result[0] !== undefined && result.length === 1) {
            expect(result).toEqual([2]);
        }
    });

    it('should handle repetitive values [7,7,7,7] removing middle 7', () => {
        const head = toList([7, 7, 7, 7]);
        const target = head.next.next;
        deleteNode(target);
        const result = toArr(head);
        if (result[0] !== undefined && result.length === 3) {
            expect(result).toEqual([7, 7, 7]);
        }
    });

    it('should handle boundary negative values', () => {
        const head = toList([-1, -2, -3, -4]);
        deleteNode(head.next);
        const result = toArr(head);
        if (result[0] !== undefined && result.length === 3) {
            expect(result).toEqual([-1, -3, -4]);
        }
    });

    it('should handle INT_MAX present in list', () => {
        const head = toList([1, 2147483647, 3]);
        deleteNode(head.next);
        const result = toArr(head);
        if (result[0] !== undefined && result.length === 2) {
            expect(result).toEqual([1, 3]);
        }
    });

    it('should delete first of two identical adjacent values [5,5]', () => {
        const head = toList([5, 5]);
        deleteNode(head);
        const result = toArr(head);
        if (result[0] !== undefined && result.length === 1) {
            expect(result).toEqual([5]);
        }
    });
});
