import { WordFilter } from '../0745-prefix-and-suffix-search.js';

describe('0745-prefix-and-suffix-search', () => {
  it("sequence 1", () => {
    const obj = new WordFilter(["apple"]);
    expect(obj.f("a", "e")).toEqual(0);
    expect(obj.f("app", "le")).toEqual(0);
    expect(obj.f("a", "apple")).toEqual(0);
    expect(obj.f("b", "e")).toEqual(-1);
  });

  it("sequence 2", () => {
    const obj = new WordFilter(["apple", "ape", "cape"]);
    expect(obj.f("a", "e")).toEqual(1);
    expect(obj.f("c", "e")).toEqual(2);
    expect(obj.f("", "")).toEqual(2);
  });

  it("sequence 3", () => {
    const obj = new WordFilter(["word"]);
    expect(obj.f("w", "d")).toEqual(0);
    expect(obj.f("", "d")).toEqual(0);
    expect(obj.f("word", "word")).toEqual(0);
  });
});
