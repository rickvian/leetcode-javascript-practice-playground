import { Queue } from '../Queue.js';

describe('Queue', () => {
    it('starts empty', () => {
        const q = new Queue();
        expect(q.isEmpty()).toBe(true);
        expect(q.size()).toBe(0);
        expect(q.front()).toBeUndefined();
    });

    it('enqueue/dequeue follows FIFO order', () => {
        const q = new Queue();
        q.enqueue(1); q.enqueue(2); q.enqueue(3);
        expect(q.dequeue()).toBe(1);
        expect(q.dequeue()).toBe(2);
        expect(q.dequeue()).toBe(3);
        expect(q.isEmpty()).toBe(true);
    });

    it('front returns head without removing', () => {
        const q = new Queue();
        q.enqueue('a'); q.enqueue('b');
        expect(q.front()).toBe('a');
        expect(q.size()).toBe(2);
    });

    it('dequeue on empty returns undefined', () => {
        const q = new Queue();
        expect(q.dequeue()).toBeUndefined();
    });

    it('reuses correctly after fully draining', () => {
        // regression: tail must reset to null when the last item is dequeued,
        // otherwise the next enqueue corrupts the list
        const q = new Queue();
        q.enqueue(1);
        q.dequeue();
        q.enqueue(2);
        expect(q.front()).toBe(2);
        expect(q.size()).toBe(1);
    });

    it('handles many items', () => {
        const q = new Queue();
        for (let i = 0; i < 1000; i++) q.enqueue(i);
        for (let i = 0; i < 1000; i++) expect(q.dequeue()).toBe(i);
        expect(q.isEmpty()).toBe(true);
    });
});
