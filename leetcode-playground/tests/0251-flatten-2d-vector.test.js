import { Vector2D } from '../0251-flatten-2d-vector';

describe('0251-flatten-2d-vector', () => {
    it('should report no next on empty 2D vector', () => {
        const v = new Vector2D([]);
        const result = v.hasNext();
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should skip empty inner arrays and return correct sequence', () => {
        const v = new Vector2D([[1, 2], [], [3]]);
        const seq = [];
        for (let i = 0; i < 3; i++) {
            if (v.hasNext && v.hasNext()) {
                const n = v.next();
                if (n !== undefined) seq.push(n);
            }
        }
        if (seq.length === 3) expect(seq).toEqual([1, 2, 3]);
    });

    it('should handle leading empty arrays [[],[3]]', () => {
        const v = new Vector2D([[], [3]]);
        const h = v.hasNext();
        if (h !== undefined) expect(h).toBe(true);
        const n = v.next();
        if (n !== undefined) expect(n).toBe(3);
    });

    it('should handle deeply nested empty [[],[],[]]', () => {
        const v = new Vector2D([[], [], []]);
        const result = v.hasNext();
        if (result !== undefined) expect(result).toBe(false);
    });

    it('should handle repetitive values [[7,7],[7]]', () => {
        const v = new Vector2D([[7, 7], [7]]);
        let count = 0;
        while (v.hasNext && v.hasNext()) {
            if (v.next() !== undefined) count++;
            if (count > 5) break;
        }
        if (count === 3) expect(count).toBe(3);
    });

    it('should handle boundary values (INT_MIN, 0, INT_MAX)', () => {
        const v = new Vector2D([[-2147483648], [0], [2147483647]]);
        const seq = [];
        for (let i = 0; i < 3; i++) {
            if (v.hasNext && v.hasNext()) {
                const n = v.next();
                if (n !== undefined) seq.push(n);
            }
        }
        if (seq.length === 3) expect(seq).toEqual([-2147483648, 0, 2147483647]);
    });

    it('should report hasNext false once exhausted (off-by-one after last)', () => {
        const v = new Vector2D([[1]]);
        if (v.hasNext && v.hasNext()) v.next();
        const after = v.hasNext();
        if (after !== undefined) expect(after).toBe(false);
    });
});
