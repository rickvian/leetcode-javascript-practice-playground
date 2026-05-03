import { MinStack } from '../0155-min-stack';

describe('0155-min-stack', () => {
    it('should handle push and top with single value', () => {
        const minStack = new MinStack();
        minStack.push(5);
        expect(minStack.top()).toBe(5);
    });

    it('should handle getMin with single value', () => {
        const minStack = new MinStack();
        minStack.push(5);
        expect(minStack.getMin()).toBe(5);
    });

    it('should handle push multiple values in ascending order', () => {
        const minStack = new MinStack();
        minStack.push(1);
        minStack.push(2);
        minStack.push(3);
        expect(minStack.top()).toBe(3);
        expect(minStack.getMin()).toBe(1);
    });

    it('should handle push multiple values in descending order', () => {
        const minStack = new MinStack();
        minStack.push(5);
        minStack.push(3);
        minStack.push(1);
        expect(minStack.top()).toBe(1);
        expect(minStack.getMin()).toBe(1);
    });

    it('should handle pop and return previous minimum', () => {
        const minStack = new MinStack();
        minStack.push(3);
        minStack.push(2);
        minStack.push(1);
        minStack.pop();
        expect(minStack.top()).toBe(2);
        expect(minStack.getMin()).toBe(2);
    });

    it('should handle getMin after popping the minimum element', () => {
        const minStack = new MinStack();
        minStack.push(5);
        minStack.push(3);
        minStack.push(3);
        minStack.pop();
        expect(minStack.getMin()).toBe(3);
        minStack.pop();
        expect(minStack.getMin()).toBe(5);
    });

    it('should handle duplicate minimum values', () => {
        const minStack = new MinStack();
        minStack.push(2);
        minStack.push(2);
        minStack.push(2);
        expect(minStack.getMin()).toBe(2);
        minStack.pop();
        expect(minStack.getMin()).toBe(2);
        minStack.pop();
        expect(minStack.getMin()).toBe(2);
    });

    it('should handle LeetCode official example 1', () => {
        const minStack = new MinStack();
        minStack.push(-2);
        minStack.push(0);
        minStack.push(-3);
        expect(minStack.getMin()).toBe(-3);
        minStack.pop();
        expect(minStack.top()).toBe(0);
        expect(minStack.getMin()).toBe(-2);
    });

    it('should handle negative values', () => {
        const minStack = new MinStack();
        minStack.push(-5);
        minStack.push(-3);
        minStack.push(-10);
        expect(minStack.getMin()).toBe(-10);
        minStack.pop();
        expect(minStack.getMin()).toBe(-5);
    });

    it('should handle mixed positive and negative values', () => {
        const minStack = new MinStack();
        minStack.push(100);
        minStack.push(-5);
        minStack.push(50);
        minStack.push(-10);
        expect(minStack.getMin()).toBe(-10);
        expect(minStack.top()).toBe(-10);
    });

    it('should handle push new minimum that is the new minimum', () => {
        const minStack = new MinStack();
        minStack.push(5);
        expect(minStack.getMin()).toBe(5);
        minStack.push(3);
        expect(minStack.getMin()).toBe(3);
        minStack.push(1);
        expect(minStack.getMin()).toBe(1);
    });

    it('should handle push new value larger than minimum', () => {
        const minStack = new MinStack();
        minStack.push(2);
        minStack.push(1);
        minStack.push(5);
        expect(minStack.getMin()).toBe(1);
        expect(minStack.top()).toBe(5);
    });

    it('should handle sequence alternating between min updates and pops', () => {
        const minStack = new MinStack();
        minStack.push(10);
        expect(minStack.getMin()).toBe(10);
        minStack.push(5);
        expect(minStack.getMin()).toBe(5);
        minStack.pop();
        expect(minStack.getMin()).toBe(10);
        minStack.push(3);
        expect(minStack.getMin()).toBe(3);
        minStack.pop();
        expect(minStack.getMin()).toBe(10);
    });

    it('should handle large values', () => {
        const minStack = new MinStack();
        minStack.push(2147483647);
        minStack.push(-2147483648);
        expect(minStack.getMin()).toBe(-2147483648);
        expect(minStack.top()).toBe(-2147483648);
    });

    it('should handle zero values', () => {
        const minStack = new MinStack();
        minStack.push(0);
        expect(minStack.getMin()).toBe(0);
        minStack.push(-1);
        expect(minStack.getMin()).toBe(-1);
        minStack.push(0);
        expect(minStack.getMin()).toBe(-1);
    });

    it('should handle complex sequence with multiple operations', () => {
        const minStack = new MinStack();
        minStack.push(4);
        minStack.push(3);
        minStack.push(5);
        minStack.push(1);
        expect(minStack.getMin()).toBe(1);
        minStack.pop();
        expect(minStack.getMin()).toBe(3);
        minStack.push(2);
        expect(minStack.getMin()).toBe(2);
        minStack.pop();
        expect(minStack.getMin()).toBe(3);
    });

    it('should handle all same values', () => {
        const minStack = new MinStack();
        minStack.push(7);
        minStack.push(7);
        minStack.push(7);
        expect(minStack.getMin()).toBe(7);
        minStack.pop();
        expect(minStack.getMin()).toBe(7);
    });

});
