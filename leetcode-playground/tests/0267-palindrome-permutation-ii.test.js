import { generatePalindromes } from '../0267-palindrome-permutation-ii.js';

describe('0267-palindrome-permutation-ii', () => {
  it("generatePalindromes(\"abcabcbb\")", () => {
    const result = generatePalindromes("abcabcbb");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["abbccbba", "abcbbcba", "acbbbbca", "babccbab", "bacbbcab", "bbaccabb", "bbcaacbb", "bcabbacb", "bcbaabcb", "cabbbbac", "cbabbabc", "cbbaabbc"]);
  });

  it("generatePalindromes(\"bbbbb\")", () => {
    const result = generatePalindromes("bbbbb");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["bbbbb"]);
  });

  it("generatePalindromes(\"pwwkew\")", () => {
    const result = generatePalindromes("pwwkew");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([]);
  });

  it("generatePalindromes(\"\")", () => {
    const result = generatePalindromes("");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([""]);
  });

  it("generatePalindromes(\" \")", () => {
    const result = generatePalindromes(" ");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([" "]);
  });

  it("generatePalindromes(\"a\")", () => {
    const result = generatePalindromes("a");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["a"]);
  });

  it("generatePalindromes(\"aaaaaa\")", () => {
    const result = generatePalindromes("aaaaaa");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["aaaaaa"]);
  });
});
