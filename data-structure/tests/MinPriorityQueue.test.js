import { MinPriorityQueue } from '../MinPriorityQueue.js';

describe('MinPriorityQueue', () => {
    it('starts empty', () => {
        const pq = new MinPriorityQueue();
        expect(pq.isEmpty()).toBe(true);
        expect(pq.front()).toBeUndefined();
        expect(pq.dequeue()).toBeUndefined();
    });

    it('drains in ascending order', () => {
        const pq = new MinPriorityQueue();
        [5, 1, 3, 9, 2, 7].forEach(v => pq.enqueue(v));
        const out = [];
        while (!pq.isEmpty()) out.push(pq.dequeue());
        expect(out).toEqual([1, 2, 3, 5, 7, 9]);
    });

    it('front always points at the min', () => {
        const pq = new MinPriorityQueue();
        pq.enqueue(5);
        expect(pq.front()).toBe(5);
        pq.enqueue(2);
        expect(pq.front()).toBe(2);
        pq.enqueue(8);
        expect(pq.front()).toBe(2);
        pq.enqueue(1);
        expect(pq.front()).toBe(1);
    });

    it('handles duplicates', () => {
        const pq = new MinPriorityQueue();
        [3, 3, 1, 1, 2, 2].forEach(v => pq.enqueue(v));
        const out = [];
        while (!pq.isEmpty()) out.push(pq.dequeue());
        expect(out).toEqual([1, 1, 2, 2, 3, 3]);
    });

    it('custom priorityOf — sort by extracted priority', () => {
        // classic Dijkstra-style usage: object with a numeric priority field
        const pq = new MinPriorityQueue({ priorityOf: (t) => t.cost });
        pq.enqueue({ name: 'B', cost: 5 });
        pq.enqueue({ name: 'A', cost: 1 });
        pq.enqueue({ name: 'C', cost: 3 });
        expect(pq.dequeue().name).toBe('A');
        expect(pq.dequeue().name).toBe('C');
        expect(pq.dequeue().name).toBe('B');
    });

    it('handles many random inserts (stress)', () => {
        const pq = new MinPriorityQueue();
        const nums = Array.from({ length: 500 }, () => Math.floor(Math.random() * 10000));
        nums.forEach(v => pq.enqueue(v));
        const out = [];
        while (!pq.isEmpty()) out.push(pq.dequeue());
        expect(out).toEqual([...nums].sort((a, b) => a - b));
    });
});
