import { Trie } from '../0208-implement-trie-prefix-tree.js';

describe('0208-implement-trie-prefix-tree', () => {
  it("sequence 1", () => {
    const obj = new Trie();
    obj.insert("apple");
    expect(obj.search("apple")).toEqual(true);
    expect(obj.search("app")).toEqual(false);
    expect(obj.startsWith("app")).toEqual(true);
    obj.insert("app");
    expect(obj.search("app")).toEqual(true);
  });

  it("sequence 2", () => {
    const obj = new Trie();
    obj.insert("bad");
    obj.insert("dad");
    obj.insert("mad");
    expect(obj.search("pad")).toEqual(false);
    expect(obj.search("bad")).toEqual(true);
    expect(obj.search(".ad")).toEqual(false);
  });

  it("sequence 3", () => {
    const obj = new Trie();
    obj.insert("a");
    expect(obj.search("a")).toEqual(true);
    expect(obj.search("b")).toEqual(false);
  });
});
