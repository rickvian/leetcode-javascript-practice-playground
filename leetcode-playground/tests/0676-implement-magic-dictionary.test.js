import { MagicDictionary } from '../0676-implement-magic-dictionary.js';

describe('0676-implement-magic-dictionary', () => {
  it("sequence 1", () => {
    const obj = new MagicDictionary();
    obj.buildDict(["hello", "leetcode"]);
    expect(obj.search("hello")).toEqual(false);
    expect(obj.search("hhllo")).toEqual(true);
    expect(obj.search("hell")).toEqual(false);
    expect(obj.search("leetcoded")).toEqual(false);
  });

  it("sequence 2", () => {
    const obj = new MagicDictionary();
    obj.buildDict(["a", "abc"]);
    expect(obj.search("a")).toEqual(false);
    expect(obj.search("b")).toEqual(true);
    expect(obj.search("abc")).toEqual(false);
    expect(obj.search("abd")).toEqual(true);
  });

  it("sequence 3", () => {
    const obj = new MagicDictionary();
    obj.buildDict(["cat", "car", "bar"]);
    expect(obj.search("cat")).toEqual(true);
    expect(obj.search("bat")).toEqual(true);
    expect(obj.search("cas")).toEqual(true);
  });
});
