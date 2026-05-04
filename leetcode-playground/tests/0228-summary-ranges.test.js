import { summaryRanges } from '../0228-summary-ranges';

describe('0228-summary-ranges', () => {
    it('should handle LeetCode example 1: [0,1,2,4,5,7]', () => {
        expect(summaryRanges([0,1,2,4,5,7])).toEqual(['0->2', '4->5', '7']);
    });

    it('should handle LeetCode example 2: [0,2,3,4,6,8,9]', () => {
        expect(summaryRanges([0,2,3,4,6,8,9])).toEqual(['0', '2->4', '6', '8->9']);
    });

    it('should handle empty array', () => {
        expect(summaryRanges([])).toEqual([]);
    });

    it('should handle single element', () => {
        expect(summaryRanges([5])).toEqual(['5']);
    });

    it('should handle all elements consecutive (one range)', () => {
        expect(summaryRanges([1,2,3,4,5])).toEqual(['1->5']);
    });

    it('should handle all elements isolated (all single-element ranges)', () => {
        expect(summaryRanges([1,3,5,7])).toEqual(['1', '3', '5', '7']);
    });

    it('should handle negative numbers', () => {
        expect(summaryRanges([-3,-2,-1,0,2,4,5])).toEqual(['-3->0', '2', '4->5']);
    });

    it('should handle single negative number', () => {
        expect(summaryRanges([-1])).toEqual(['-1']);
    });

    it('should handle range spanning negative to positive', () => {
        expect(summaryRanges([-2,-1,0,1])).toEqual(['-2->1']);
    });
});
