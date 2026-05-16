import { lastStoneWeight } from '../1046-last-stone-weight';

describe('1046-last-stone-weight', () => {
    it('should return remainder when two heaviest are unequal', () => {
        expect(lastStoneWeight([2, 7, 4, 1, 8, 1])).toEqual(1);
    });

    it('should return the stone weight when only one stone exists', () => {
        expect(lastStoneWeight([1])).toEqual(1);
    });

    it('should return 0 when two equal stones are the last pair', () => {
        expect(lastStoneWeight([2, 2])).toEqual(0);
    });

    it('should handle stones that all smash to zero', () => {
        expect(lastStoneWeight([3, 3, 3, 3])).toEqual(0);
    });
});
