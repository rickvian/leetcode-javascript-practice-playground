import { ListNode, reverseBetween } from '../0092-reverse-linked-list-ii';

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

describe('0092-reverse-linked-list-ii', () => {
    // ============ Happy Path Cases ============

    it('should reverse middle section: [1,2,3,4,5] with left=2, right=4 to [1,4,3,2,5]', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 2, 4))).toEqual([1, 4, 3, 2, 5]);
    });

    it('should reverse two nodes: [1,2,3] with left=1, right=2 to [2,1,3]', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3]), 1, 2))).toEqual([2, 1, 3]);
    });

    it('should reverse entire list: [1,2,3,4,5] with left=1, right=5 to [5,4,3,2,1]', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 1, 5))).toEqual([5, 4, 3, 2, 1]);
    });

    // ============ Edge Cases: Minimum/Empty ============

    it('should handle single node list (no reversal needed) with left=1, right=1', () => {
        expect(listToArray(reverseBetween(buildList([1]), 1, 1))).toEqual([1]);
    });

    it('should handle two-node list reversing entire list with left=1, right=2', () => {
        expect(listToArray(reverseBetween(buildList([1, 2]), 1, 2))).toEqual([2, 1]);
    });

    it('should reverse from start to middle: [1,2,3,4,5] with left=1, right=3 to [3,2,1,4,5]', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 1, 3))).toEqual([3, 2, 1, 4, 5]);
    });

    it('should reverse from middle to end: [1,2,3,4,5] with left=3, right=5 to [1,2,5,4,3]', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 3, 5))).toEqual([1, 2, 5, 4, 3]);
    });

    // ============ Edge Cases: Range Limits ============

    it('should reverse single element range: [1,2,3,4] with left=2, right=2 to [1,2,3,4]', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4]), 2, 2))).toEqual([1, 2, 3, 4]);
    });

    it('should reverse at first position: [1,2,3,4] with left=1, right=1 to [1,2,3,4]', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4]), 1, 1))).toEqual([1, 2, 3, 4]);
    });

    it('should reverse at last position: [1,2,3,4] with left=4, right=4 to [1,2,3,4]', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4]), 4, 4))).toEqual([1, 2, 3, 4]);
    });

    // ============ Edge Cases: Type Nuance & Special Values ============

    it('should handle negative values: [-1,-2,-3,-4] with left=2, right=3 to [-1,-3,-2,-4]', () => {
        expect(listToArray(reverseBetween(buildList([-1, -2, -3, -4]), 2, 3))).toEqual([-1, -3, -2, -4]);
    });

    it('should handle mix of negative and positive: [1,-2,3,-4,5] with left=2, right=4 to [1,-4,3,-2,5]', () => {
        expect(listToArray(reverseBetween(buildList([1, -2, 3, -4, 5]), 2, 4))).toEqual([1, -4, 3, -2, 5]);
    });

    it('should handle zeros in list: [0,1,2,3,0] with left=2, right=4 to [0,3,2,1,0]', () => {
        expect(listToArray(reverseBetween(buildList([0, 1, 2, 3, 0]), 2, 4))).toEqual([0, 3, 2, 1, 0]);
    });

    it('should handle all same values: [5,5,5,5] with left=2, right=3 to [5,5,5,5]', () => {
        expect(listToArray(reverseBetween(buildList([5, 5, 5, 5]), 2, 3))).toEqual([5, 5, 5, 5]);
    });

    // ============ Edge Cases: Larger Inputs ============

    it('should handle longer list: [1,2,3,4,5,6,7,8] with left=3, right=6 to [1,2,6,5,4,3,7,8]', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5, 6, 7, 8]), 3, 6))).toEqual([1, 2, 6, 5, 4, 3, 7, 8]);
    });

    it('should reverse entire longer list with left=1, right=10', () => {
        const arr = Array.from({ length: 10 }, (_, i) => i + 1);
        const reversed = Array.from({ length: 10 }, (_, i) => 10 - i);
        expect(listToArray(reverseBetween(buildList(arr), 1, 10))).toEqual(reversed);
    });

    it('should handle large values: [100,200,300,400,500] with left=2, right=4 to [100,400,300,200,500]', () => {
        expect(listToArray(reverseBetween(buildList([100, 200, 300, 400, 500]), 2, 4))).toEqual([100, 400, 300, 200, 500]);
    });

    // ============ Boundary Off-by-One Scenarios ============

    it('should correctly handle left=1, right=2 (off-by-one from single node)', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 1, 2))).toEqual([2, 1, 3, 4, 5]);
    });

    it('should correctly handle left=4, right=5 at the end', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 4, 5))).toEqual([1, 2, 3, 5, 4]);
    });

    it('should handle left=1, right=4 (reversing almost entire list)', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 1, 4))).toEqual([4, 3, 2, 1, 5]);
    });

    it('should handle left=2, right=5 (reversing from second to last)', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5]), 2, 5))).toEqual([1, 5, 4, 3, 2]);
    });

    // ============ Complex/Adversarial Cases ============

    it('should handle multiple consecutive reversal operations conceptually: [1,2,3,4,5,6] with left=2, right=5 to [1,5,4,3,2,6]', () => {
        expect(listToArray(reverseBetween(buildList([1, 2, 3, 4, 5, 6]), 2, 5))).toEqual([1, 5, 4, 3, 2, 6]);
    });

    it('should preserve list integrity with complex range: [10,20,30,40,50,60,70] with left=3, right=5 to [10,20,50,40,30,60,70]', () => {
        expect(listToArray(reverseBetween(buildList([10, 20, 30, 40, 50, 60, 70]), 3, 5))).toEqual([10, 20, 50, 40, 30, 60, 70]);
    });
});
