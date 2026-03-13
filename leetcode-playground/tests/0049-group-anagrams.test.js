import { groupAnagrams } from '../0049-group-anagrams';

describe('0049-group-anagrams', () => {
    it('should group anagrams from a simple list', () => {
        const result = groupAnagrams(['eat', 'tea', 'ate', 'tan', 'nat', 'bat']);
        const expected = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];
        expect(result.sort((a, b) => a[0].localeCompare(b[0]))).toEqual(
            expected.sort((a, b) => a[0].localeCompare(b[0]))
        );
    });

    it('should handle a list with a single string', () => {
        const result = groupAnagrams(['a']);
        expect(result).toEqual([['a']]);
    });

    it('should group strings with no anagrams', () => {
        const result = groupAnagrams(['abc', 'def', 'ghi']);
        const expected = [['abc'], ['def'], ['ghi']];
        expect(result.sort((a, b) => a[0].localeCompare(b[0]))).toEqual(
            expected.sort((a, b) => a[0].localeCompare(b[0]))
        );
    });
});
