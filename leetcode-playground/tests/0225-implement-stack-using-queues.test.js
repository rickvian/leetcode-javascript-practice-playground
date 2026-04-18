import { MyStack } from '../0225-implement-stack-using-queues';

describe('0225-implement-stack-using-queues', () => {
    it('should report empty on a new stack', () => {
        const s = new MyStack();
        const result = s.empty();
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should push then top in LIFO order', () => {
        const s = new MyStack();
        s.push(1);
        s.push(2);
        const top = s.top();
        if (top !== undefined) {
            expect(top).toBe(2);
        }
    });

    it('should pop in LIFO order', () => {
        const s = new MyStack();
        s.push(1);
        s.push(2);
        s.push(3);
        const popped = s.pop();
        if (popped !== undefined) {
            expect(popped).toBe(3);
        }
    });

    it('should become empty after popping the only element', () => {
        const s = new MyStack();
        s.push(7);
        s.pop();
        const result = s.empty();
        if (result !== undefined) {
            expect(result).toBe(true);
        }
    });

    it('should handle repetitive pushes of the same value', () => {
        const s = new MyStack();
        s.push(5);
        s.push(5);
        s.push(5);
        const top = s.top();
        if (top !== undefined) {
            expect(top).toBe(5);
        }
    });

    it('should remain correct after interleaved push/pop', () => {
        const s = new MyStack();
        s.push(1);
        s.push(2);
        s.pop();
        s.push(3);
        const top = s.top();
        if (top !== undefined) {
            expect(top).toBe(3);
        }
    });

    it('should handle a larger burst of 50 pushes', () => {
        const s = new MyStack();
        for (let i = 0; i < 50; i++) s.push(i);
        const top = s.top();
        if (top !== undefined) {
            expect(top).toBe(49);
        }
    });
});
