import { findAnagrams } from '../0438-find-all-anagrams-in-a-string.js';

describe('0438-find-all-anagrams-in-a-string', () => {
  it("findAnagrams(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = findAnagrams("ADOBECODEBANC", "ABC");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([0, 1, 10, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("findAnagrams(\"a\", \"a\")", () => {
    const result = findAnagrams("a", "a");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([0]);
  });

  it("findAnagrams(\"a\", \"aa\")", () => {
    const result = findAnagrams("a", "aa");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([]);
  });

  it("findAnagrams(\"\", \"A\")", () => {
    const result = findAnagrams("", "A");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([]);
  });
});
