import { LinkedList } from '../LinkedList.js';

describe('LinkedList', () => {
    it('starts empty', () => {
        const l = new LinkedList();
        expect(l.isEmpty()).toBe(true);
        expect(l.size()).toBe(0);
        expect(l.toArray()).toEqual([]);
    });

    it('append builds list in order', () => {
        const l = new LinkedList();
        l.append(1); l.append(2); l.append(3);
        expect(l.toArray()).toEqual([1, 2, 3]);
        expect(l.size()).toBe(3);
    });

    it('prepend reverses insertion order', () => {
        const l = new LinkedList();
        l.prepend(1); l.prepend(2); l.prepend(3);
        expect(l.toArray()).toEqual([3, 2, 1]);
    });

    it('insertAt handles head, middle, tail, out-of-range', () => {
        const l = new LinkedList();
        l.append(1); l.append(3);
        l.insertAt(1, 2);            // middle
        l.insertAt(0, 0);            // head
        l.insertAt(4, 4);            // tail (size === 4)
        expect(l.toArray()).toEqual([0, 1, 2, 3, 4]);
        expect(l.insertAt(-1, 99)).toBe(false);
        expect(l.insertAt(99, 99)).toBe(false);
    });

    it('removeAt returns value and updates tail when removing last', () => {
        const l = new LinkedList();
        l.append(1); l.append(2); l.append(3);
        expect(l.removeAt(2)).toBe(3);
        l.append(4);
        expect(l.toArray()).toEqual([1, 2, 4]);
    });

    it('removeHead drains correctly', () => {
        const l = new LinkedList();
        l.append(1); l.append(2);
        expect(l.removeHead()).toBe(1);
        expect(l.removeHead()).toBe(2);
        expect(l.removeHead()).toBeUndefined();
        expect(l.isEmpty()).toBe(true);
    });

    it('find returns index or -1', () => {
        const l = new LinkedList();
        l.append('a'); l.append('b'); l.append('c');
        expect(l.find('b')).toBe(1);
        expect(l.find('z')).toBe(-1);
    });
});
