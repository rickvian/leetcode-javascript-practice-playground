import { WordDictionary } from '../0211-design-add-and-search-words-data-structure.js';

describe('0211-design-add-and-search-words-data-structure', () => {
  it("sequence 1", () => {
    const obj = new WordDictionary();
    obj.addWord("apple");
    expect(obj.search("apple")).toEqual(true);
    expect(obj.search("app")).toEqual(false);
    expect(obj.search("apple")).toEqual(true);
    obj.addWord("app");
    expect(obj.search("app")).toEqual(true);
  });

  it("sequence 2", () => {
    const obj = new WordDictionary();
    obj.addWord("bad");
    obj.addWord("dad");
    obj.addWord("mad");
    expect(obj.search("pad")).toEqual(false);
    expect(obj.search("bad")).toEqual(true);
    expect(obj.search("bad")).toEqual(true);
  });

  it("sequence 3", () => {
    const obj = new WordDictionary();
    obj.addWord("a");
    expect(obj.search("a")).toEqual(true);
    expect(obj.search("b")).toEqual(false);
  });
});
