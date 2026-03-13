import { merge } from '../0056-merge-intervals';

describe('0056-merge-intervals', () => {
    it('should merge overlapping intervals', () => {
        const result = merge([[1, 3], [2, 6], [8, 10], [15, 18]]);
        expect(result).toEqual([[1, 6], [8, 10], [15, 18]]);
    });

    it('should handle intervals with one completely overlapping another', () => {
        const result = merge([[1, 4], [4, 5]]);
        expect(result).toEqual([[1, 5]]);
    });

    it('should return single interval when there are no overlaps', () => {
        const result = merge([[1, 2]]);
        expect(result).toEqual([[1, 2]]);
    });
});
