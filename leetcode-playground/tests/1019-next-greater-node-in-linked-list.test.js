import { nextLargerNodes, ListNode } from '../1019-next-greater-node-in-linked-list';

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

describe('1019-next-greater-node-in-linked-list', () => {
    it('should return [7,0,5,5,0] for [2,7,4,3,5]', () => {
        expect(nextLargerNodes(buildList([2, 7, 4, 3, 5]))).toEqual([7, 0, 5, 5, 0]);
    });

    it('should return [5,5,2,3,0] for [1,7,5,1,9,2,5,1]', () => {
        expect(nextLargerNodes(buildList([1, 7, 5, 1, 9, 2, 5, 1]))).toEqual([7, 9, 9, 9, 0, 5, 0, 0]);
    });

    it('should return [0] for single node', () => {
        expect(nextLargerNodes(buildList([5]))).toEqual([0]);
    });

    it('should return [0, 0] for two equal nodes', () => {
        expect(nextLargerNodes(buildList([3, 3]))).toEqual([0, 0]);
    });

    it('should return all zeros for decreasing list', () => {
        expect(nextLargerNodes(buildList([5, 4, 3, 2, 1]))).toEqual([0, 0, 0, 0, 0]);
    });

    it('should return next element for increasing list', () => {
        expect(nextLargerNodes(buildList([1, 2, 3, 4, 5]))).toEqual([2, 3, 4, 5, 0]);
    });

    it('should handle two elements with first smaller', () => {
        expect(nextLargerNodes(buildList([1, 5]))).toEqual([5, 0]);
    });

    it('should handle two elements with first larger', () => {
        expect(nextLargerNodes(buildList([5, 1]))).toEqual([0, 0]);
    });

    it('should handle duplicates correctly', () => {
        expect(nextLargerNodes(buildList([1, 1, 1, 2]))).toEqual([2, 2, 2, 0]);
    });
});
