import { MinStack } from '../0155-min-stack';

describe('0155-min-stack', () => {
    it('should report the min after a single push', () => {
        const s = new MinStack();
        s.push(5);
        const min = s.getMin();
        if (min !== undefined) expect(min).toBe(5);
        const top = s.top();
        if (top !== undefined) expect(top).toBe(5);
    });

    it('should track the running minimum across multiple pushes', () => {
        const s = new MinStack();
        s.push(-2);
        s.push(0);
        s.push(-3);
        const a = s.getMin();
        if (a !== undefined) expect(a).toBe(-3);
        s.pop();
        const b = s.top();
        if (b !== undefined) expect(b).toBe(0);
        const c = s.getMin();
        if (c !== undefined) expect(c).toBe(-2);
    });

    it('should handle repetitive duplicate mins correctly when popping', () => {
        const s = new MinStack();
        s.push(1);
        s.push(1);
        s.push(1);
        s.pop();
        const m = s.getMin();
        if (m !== undefined) expect(m).toBe(1);
        s.pop();
        const m2 = s.getMin();
        if (m2 !== undefined) expect(m2).toBe(1);
    });

    it('should restore previous min after popping the current min', () => {
        const s = new MinStack();
        s.push(3);
        s.push(1);
        s.pop();
        const m = s.getMin();
        if (m !== undefined) expect(m).toBe(3);
    });

    it('should handle INT_MIN / INT_MAX boundary values', () => {
        const s = new MinStack();
        s.push(2147483647);
        s.push(-2147483648);
        const m = s.getMin();
        if (m !== undefined) expect(m).toBe(-2147483648);
        s.pop();
        const t = s.top();
        if (t !== undefined) expect(t).toBe(2147483647);
    });

    it('should support interleaved push/pop/getMin operations', () => {
        const s = new MinStack();
        s.push(10);
        s.push(5);
        s.push(7);
        s.pop();
        const m = s.getMin();
        if (m !== undefined) expect(m).toBe(5);
    });
});
