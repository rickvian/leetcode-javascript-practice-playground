import { frequencySort } from '../0451-sort-characters-by-frequency.js';

describe('0451-sort-characters-by-frequency', () => {
  it("frequencySort(\"abcabcbb\")", () => {
    const result = frequencySort("abcabcbb");
    expect(result).toEqual("bbbbaacc");
  });

  it("frequencySort(\"bbbbb\")", () => {
    const result = frequencySort("bbbbb");
    expect(result).toEqual("bbbbb");
  });

  it("frequencySort(\"pwwkew\")", () => {
    const result = frequencySort("pwwkew");
    expect(result).toEqual("wwwpke");
  });

  it("frequencySort(\"\")", () => {
    const result = frequencySort("");
    expect(result).toEqual("");
  });

  it("frequencySort(\" \")", () => {
    const result = frequencySort(" ");
    expect(result).toEqual(" ");
  });

  it("frequencySort(\"a\")", () => {
    const result = frequencySort("a");
    expect(result).toEqual("a");
  });

  it("frequencySort(\"aaaaaa\")", () => {
    const result = frequencySort("aaaaaa");
    expect(result).toEqual("aaaaaa");
  });
});
