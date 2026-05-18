import { DoublyLinkedList } from '../DoublyLinkedList.js';

describe('DoublyLinkedList', () => {
    it('starts empty', () => {
        const l = new DoublyLinkedList();
        expect(l.isEmpty()).toBe(true);
        expect(l.toArray()).toEqual([]);
    });

    it('addFirst prepends, addLast appends', () => {
        const l = new DoublyLinkedList();
        l.addLast(2);
        l.addLast(3);
        l.addFirst(1);
        expect(l.toArray()).toEqual([1, 2, 3]);
    });

    it('removeFirst / removeLast drain in correct order', () => {
        const l = new DoublyLinkedList();
        l.addLast(1); l.addLast(2); l.addLast(3);
        expect(l.removeFirst()).toBe(1);
        expect(l.removeLast()).toBe(3);
        expect(l.toArray()).toEqual([2]);
    });

    it('removeNode is O(1) given a node reference (LRU pattern)', () => {
        const l = new DoublyLinkedList();
        l.addLast('a');
        const nodeB = l.addLast('b');
        l.addLast('c');
        expect(l.removeNode(nodeB)).toBe('b');
        expect(l.toArray()).toEqual(['a', 'c']);
    });

    it('handles drain to empty then refill', () => {
        const l = new DoublyLinkedList();
        l.addLast(1); l.removeFirst();
        expect(l.isEmpty()).toBe(true);
        l.addLast(2);
        expect(l.toArray()).toEqual([2]);
    });

    it('removeFirst/removeLast on empty returns undefined', () => {
        const l = new DoublyLinkedList();
        expect(l.removeFirst()).toBeUndefined();
        expect(l.removeLast()).toBeUndefined();
    });
});
