import { ListNode, reverseList } from '../0206-reverse-linked-list';

function buildList(arr) {
    if (arr.length === 0) return null;
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

describe('0206-reverse-linked-list', () => {
    it('should reverse [1,2,3,4,5] to [5,4,3,2,1]', () => {
        expect(listToArray(reverseList(buildList([1, 2, 3, 4, 5])))).toEqual([5, 4, 3, 2, 1]);
    });

    it('should reverse [1,2] to [2,1]', () => {
        expect(listToArray(reverseList(buildList([1, 2])))).toEqual([2, 1]);
    });

    it('should return empty for empty list', () => {
        expect(reverseList(null)).toBeNull();
    });

    it('should return same single node', () => {
        expect(listToArray(reverseList(buildList([1])))).toEqual([1]);
    });

    it('should reverse [1,2,3] to [3,2,1]', () => {
        expect(listToArray(reverseList(buildList([1, 2, 3])))).toEqual([3, 2, 1]);
    });

    it('should handle negative values', () => {
        expect(listToArray(reverseList(buildList([-1, -2, -3])))).toEqual([-3, -2, -1]);
    });
});
