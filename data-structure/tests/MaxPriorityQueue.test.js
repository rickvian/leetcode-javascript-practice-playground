import { MaxPriorityQueue } from '../MaxPriorityQueue.js';

describe('MaxPriorityQueue', () => {
    it('starts empty', () => {
        const pq = new MaxPriorityQueue();
        expect(pq.isEmpty()).toBe(true);
        expect(pq.front()).toBeUndefined();
        expect(pq.size()).toBe(0);
    });

    it('drains in descending order', () => {
        const pq = new MaxPriorityQueue();
        [5, 1, 3, 9, 2, 7].forEach(v => pq.enqueue(v));
        const out = [];
        while (!pq.isEmpty()) out.push(pq.dequeue());
        expect(out).toEqual([9, 7, 5, 3, 2, 1]);
    });

    it('front always points at the max', () => {
        const pq = new MaxPriorityQueue();
        pq.enqueue(5);
        expect(pq.front()).toBe(5);
        pq.enqueue(8);
        expect(pq.front()).toBe(8);
        pq.enqueue(2);
        expect(pq.front()).toBe(8);
        pq.enqueue(15);
        expect(pq.front()).toBe(15);
    });

    it('handles duplicates', () => {
        const pq = new MaxPriorityQueue();
        [3, 3, 1, 1, 2, 2].forEach(v => pq.enqueue(v));
        const out = [];
        while (!pq.isEmpty()) out.push(pq.dequeue());
        expect(out).toEqual([3, 3, 2, 2, 1, 1]);
    });

    it('custom priorityOf — max by extracted priority', () => {
        // top-K-largest pattern: keep biggest task by priority field
        const pq = new MaxPriorityQueue({ priorityOf: (t) => t.priority });
        pq.enqueue({ name: 'A', priority: 1 });
        pq.enqueue({ name: 'B', priority: 5 });
        pq.enqueue({ name: 'C', priority: 3 });
        expect(pq.dequeue().name).toBe('B');
        expect(pq.dequeue().name).toBe('C');
        expect(pq.dequeue().name).toBe('A');
    });

    it('handles many random inserts (stress)', () => {
        const pq = new MaxPriorityQueue();
        const nums = Array.from({ length: 500 }, () => Math.floor(Math.random() * 10000));
        nums.forEach(v => pq.enqueue(v));
        const out = [];
        while (!pq.isEmpty()) out.push(pq.dequeue());
        expect(out).toEqual([...nums].sort((a, b) => b - a));
    });
});
