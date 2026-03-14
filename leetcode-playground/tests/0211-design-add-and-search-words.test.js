import { WordDictionary } from '../0211-design-add-and-search-words';

describe('0211-design-add-and-search-words', () => {
    it('should find an exact word after adding it', () => {
        const wd = new WordDictionary();
        wd.addWord('bad');
        expect(wd.search('bad')).toBe(true);
    });

    it('should return false for word not added', () => {
        const wd = new WordDictionary();
        wd.addWord('bad');
        expect(wd.search('bat')).toBe(false);
    });

    it('should match word with dot wildcard', () => {
        const wd = new WordDictionary();
        wd.addWord('bad');
        expect(wd.search('b..')).toBe(true);
        expect(wd.search('b.d')).toBe(true);
    });

    it('should return false when dot wildcard has no match', () => {
        const wd = new WordDictionary();
        wd.addWord('bad');
        expect(wd.search('b..d')).toBe(false);
    });

    it('should handle all dots pattern', () => {
        const wd = new WordDictionary();
        wd.addWord('bad');
        wd.addWord('dad');
        wd.addWord('mad');
        expect(wd.search('...')).toBe(true);
    });

    it('should handle multiple words with wildcard', () => {
        const wd = new WordDictionary();
        wd.addWord('bad');
        wd.addWord('dad');
        wd.addWord('mad');
        expect(wd.search('pad')).toBe(false);
        expect(wd.search('.ad')).toBe(true);
    });

    it('should handle single character word and pattern', () => {
        const wd = new WordDictionary();
        wd.addWord('a');
        expect(wd.search('.')).toBe(true);
        expect(wd.search('a')).toBe(true);
        expect(wd.search('b')).toBe(false);
    });
});
