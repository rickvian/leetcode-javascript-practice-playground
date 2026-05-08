import { Stack } from '../Stack.js';

describe('Stack', () => {
    it('starts empty', () => {
        const s = new Stack();
        expect(s.isEmpty()).toBe(true);
        expect(s.size()).toBe(0);
        expect(s.peek()).toBeUndefined();
    });

    it('push/pop follows LIFO order', () => {
        const s = new Stack();
        s.push(1); s.push(2); s.push(3);
        expect(s.pop()).toBe(3);
        expect(s.pop()).toBe(2);
        expect(s.pop()).toBe(1);
        expect(s.isEmpty()).toBe(true);
    });

    it('peek returns top without removing', () => {
        const s = new Stack();
        s.push('a'); s.push('b');
        expect(s.peek()).toBe('b');
        expect(s.size()).toBe(2);
    });

    it('pop on empty returns undefined', () => {
        const s = new Stack();
        expect(s.pop()).toBeUndefined();
    });

    it('handles mixed types', () => {
        const s = new Stack();
        s.push(null); s.push({ x: 1 }); s.push([1, 2]);
        expect(s.pop()).toEqual([1, 2]);
        expect(s.pop()).toEqual({ x: 1 });
        expect(s.pop()).toBeNull();
    });
});
