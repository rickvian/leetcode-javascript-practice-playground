import { AutocompleteSystem } from '../0642-design-search-autocomplete-system.js';

describe('0642-design-search-autocomplete-system', () => {
  it("sequence 1", () => {
    const obj = new AutocompleteSystem(["i love you", "island", "iroman"], [5, 3, 2]);
    expect(obj.input("i")).toEqual(["i love you", "island", "iroman"]);
    expect(obj.input(" ")).toEqual(["i love you"]);
    expect(obj.input("#")).toEqual([]);
    expect(obj.input("i")).toEqual(["i love you", "island", "iroman"]);
    expect(obj.input(" ")).toEqual(["i love you", "i "]);
    expect(obj.input("a")).toEqual([]);
  });

  it("sequence 2", () => {
    const obj = new AutocompleteSystem(["abc", "abcd", "ab"], [2, 1, 3]);
    expect(obj.input("a")).toEqual(["ab", "abc", "abcd"]);
    expect(obj.input("b")).toEqual(["ab", "abc", "abcd"]);
    expect(obj.input("c")).toEqual(["abc", "abcd"]);
    expect(obj.input("#")).toEqual([]);
    expect(obj.input("a")).toEqual(["ab", "abc", "abcd"]);
    expect(obj.input("b")).toEqual(["ab", "abc", "abcd"]);
  });

  it("sequence 3", () => {
    const obj = new AutocompleteSystem([], []);
    expect(obj.input("a")).toEqual([]);
    expect(obj.input("b")).toEqual([]);
    expect(obj.input("#")).toEqual([]);
    expect(obj.input("a")).toEqual(["ab"]);
  });
});
