import { insert } from '../0057-insert-interval';

describe('0057-insert-interval', () => {
    it('should insert a non-overlapping interval at the beginning', () => {
        const result = insert([[3, 5], [6, 9]], [1, 2]);
        expect(result).toEqual([[1, 2], [3, 5], [6, 9]]);
    });

    it('should merge the interval with overlapping intervals', () => {
        const result = insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]);
        expect(result).toEqual([[1, 2], [3, 10], [12, 16]]);
    });

    it('should handle inserting into an empty list', () => {
        const result = insert([], [5, 7]);
        expect(result).toEqual([[5, 7]]);
    });
});
