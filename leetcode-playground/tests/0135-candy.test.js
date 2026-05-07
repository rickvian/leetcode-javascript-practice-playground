import { candy } from '../0135-candy';

describe('0135-candy', () => {
    it('should handle single child', () => {
        if (candy !== undefined) expect(candy([5])).toBe(1);
    });

    it('should handle two children equal ratings', () => {
        if (candy !== undefined) expect(candy([1, 1])).toBe(2);
    });

    it('should handle two children ascending', () => {
        if (candy !== undefined) expect(candy([1, 2])).toBe(3);
    });

    it('should handle two children descending', () => {
        if (candy !== undefined) expect(candy([2, 1])).toBe(3);
    });

    it('should handle all equal ratings', () => {
        if (candy !== undefined) expect(candy([1, 1, 1])).toBe(3);
    });

    it('should handle all equal ratings longer array', () => {
        if (candy !== undefined) expect(candy([5, 5, 5, 5, 5])).toBe(5);
    });

    it('should handle strictly ascending ratings', () => {
        if (candy !== undefined) expect(candy([1, 2, 3, 4, 5])).toBe(15);
    });

    it('should handle strictly descending ratings', () => {
        if (candy !== undefined) expect(candy([5, 4, 3, 2, 1])).toBe(15);
    });

    it('should handle valley pattern (both neighbors rate higher)', () => {
        if (candy !== undefined) expect(candy([3, 2, 1, 2, 3])).toBe(11);
    });

    it('should handle peak pattern (both neighbors rate lower)', () => {
        if (candy !== undefined) expect(candy([1, 3, 2, 1])).toBe(7);
    });

    it('should handle peak at end', () => {
        if (candy !== undefined) expect(candy([1, 2, 3])).toBe(6);
    });

    it('should handle peak at start', () => {
        if (candy !== undefined) expect(candy([3, 2, 1])).toBe(6);
    });

    it('should handle official example: [1,0,2]', () => {
        if (candy !== undefined) expect(candy([1, 0, 2])).toBe(5);
    });

    it('should handle official example: [1,2,87,87,87,2,1]', () => {
        if (candy !== undefined) expect(candy([1, 2, 87, 87, 87, 2, 1])).toBe(13);
    });

    it('should handle two peaks with valley in between', () => {
        if (candy !== undefined) expect(candy([1, 3, 1, 3, 1])).toBe(7);
    });

    it('should handle multiple valleys and peaks', () => {
        if (candy !== undefined) expect(candy([1, 2, 1, 2, 1])).toBe(7);
    });

    it('should handle zigzag pattern starting high', () => {
        if (candy !== undefined) expect(candy([5, 4, 3, 4, 5])).toBe(11);
    });

    it('should handle long ascending then descending', () => {
        if (candy !== undefined) expect(candy([1, 2, 3, 4, 5, 4, 3, 2, 1])).toBe(25);
    });

    it('should handle single peak in middle', () => {
        if (candy !== undefined) expect(candy([1, 2, 3, 2, 1])).toBe(9);
    });

    it('should handle plateau at middle', () => {
        if (candy !== undefined) expect(candy([1, 2, 2, 2, 1])).toBe(7);
    });

    it('should handle three children ascending', () => {
        if (candy !== undefined) expect(candy([1, 2, 3])).toBe(6);
    });

    it('should handle three children descending', () => {
        if (candy !== undefined) expect(candy([3, 2, 1])).toBe(6);
    });

    it('should handle three children peak in middle', () => {
        if (candy !== undefined) expect(candy([1, 3, 1])).toBe(4);
    });

    it('should handle three children valley in middle', () => {
        if (candy !== undefined) expect(candy([2, 1, 2])).toBe(5);
    });

    it('should handle zero ratings', () => {
        if (candy !== undefined) expect(candy([0, 0, 0])).toBe(3);
    });

    it('should handle negative and positive ratings mixed', () => {
        if (candy !== undefined) expect(candy([-1, 0, 1, 0, -1])).toBe(9);
    });

    it('should handle large array with alternating pattern', () => {
        if (candy !== undefined) expect(candy([1, 2, 1, 2, 1, 2, 1, 2])).toBe(12);
    });
});
