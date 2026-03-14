import { wordBreak } from '../0139-word-break';

describe('0139-word-break', () => {
    it('should return true for "leetcode" with ["leet","code"]', () => {
        expect(wordBreak('leetcode', ['leet', 'code'])).toBe(true);
    });

    it('should return true for "applepenapple" with ["apple","pen"]', () => {
        expect(wordBreak('applepenapple', ['apple', 'pen'])).toBe(true);
    });

    it('should return false for "catsandog" with ["cats","dog","sand","and","cat"]', () => {
        expect(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat'])).toBe(false);
    });

    it('should return true for "a" with ["a"]', () => {
        expect(wordBreak('a', ['a'])).toBe(true);
    });

    it('should return false for "b" with ["a"]', () => {
        expect(wordBreak('b', ['a'])).toBe(false);
    });

    it('should handle reuse of words', () => {
        expect(wordBreak('aaaa', ['a', 'aa'])).toBe(true);
    });

    it('should return false when word not in dictionary', () => {
        expect(wordBreak('cars', ['car', 'ca', 'rs'])).toBe(true);
    });

    it('should handle long string', () => {
        const s = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab';
        const dict = ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa'];
        expect(wordBreak(s, dict)).toBe(false);
    });
});
