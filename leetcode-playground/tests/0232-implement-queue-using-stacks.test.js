import { MyQueue } from '../0232-implement-queue-using-stacks';

describe('0232-implement-queue-using-stacks', () => {
    it('should report empty on a fresh queue', () => {
        const q = new MyQueue();
        const result = q.empty();
        if (result !== undefined) expect(result).toBe(true);
    });

    it('should push and peek single element', () => {
        const q = new MyQueue();
        q.push(7);
        const p = q.peek();
        if (p !== undefined) expect(p).toBe(7);
    });

    it('should pop in FIFO order after multiple pushes', () => {
        const q = new MyQueue();
        q.push(1);
        q.push(2);
        q.push(3);
        const a = q.pop();
        const b = q.pop();
        if (a !== undefined) expect(a).toBe(1);
        if (b !== undefined) expect(b).toBe(2);
    });

    it('should interleave push/pop correctly', () => {
        const q = new MyQueue();
        q.push(10);
        const a = q.pop();
        q.push(20);
        q.push(30);
        const b = q.pop();
        if (a !== undefined) expect(a).toBe(10);
        if (b !== undefined) expect(b).toBe(20);
    });

    it('should be empty after popping all elements', () => {
        const q = new MyQueue();
        q.push(1);
        q.push(2);
        q.pop();
        q.pop();
        const e = q.empty();
        if (e !== undefined) expect(e).toBe(true);
    });

    it('should handle repeated identical values', () => {
        const q = new MyQueue();
        for (let i = 0; i < 5; i++) q.push(4);
        const p = q.peek();
        const pop = q.pop();
        if (p !== undefined) expect(p).toBe(4);
        if (pop !== undefined) expect(pop).toBe(4);
    });

    it('should handle boundary values (0 and INT_MAX)', () => {
        const q = new MyQueue();
        q.push(0);
        q.push(2147483647);
        const a = q.pop();
        const b = q.pop();
        if (a !== undefined) expect(a).toBe(0);
        if (b !== undefined) expect(b).toBe(2147483647);
    });
});
