import { findPermutation } from '../0484-find-permutation.js';

describe('0484-find-permutation', () => {
  it("findPermutation(\"abcabcbb\")", () => {
    const result = findPermutation("abcabcbb");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("findPermutation(\"bbbbb\")", () => {
    const result = findPermutation("bbbbb");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("findPermutation(\"pwwkew\")", () => {
    const result = findPermutation("pwwkew");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it("findPermutation(\"\")", () => {
    const result = findPermutation("");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1]);
  });

  it("findPermutation(\" \")", () => {
    const result = findPermutation(" ");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 2]);
  });

  it("findPermutation(\"a\")", () => {
    const result = findPermutation("a");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 2]);
  });

  it("findPermutation(\"aaaaaa\")", () => {
    const result = findPermutation("aaaaaa");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
