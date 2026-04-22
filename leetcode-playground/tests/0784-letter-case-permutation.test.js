import { letterCasePermutation } from '../0784-letter-case-permutation.js';

describe('0784-letter-case-permutation', () => {
  it("letterCasePermutation(\"abcabcbb\")", () => {
    const result = letterCasePermutation("abcabcbb");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["ABCABCBB", "ABCABCBb", "ABCABCbB", "ABCABCbb", "ABCABcBB", "ABCABcBb", "ABCABcbB", "ABCABcbb", "ABCAbCBB", "ABCAbCBb", "ABCAbCbB", "ABCAbCbb", "ABCAbcBB", "ABCAbcBb", "ABCAbcbB", "ABCAbcbb", "ABCaBCBB", "ABCaBCBb", "ABCaBCbB", "ABCaBCbb", "ABCaBcBB", "ABCaBcBb", "ABCaBcbB", "ABCaBcbb", "ABCabCBB", "ABCabCBb", "ABCabCbB", "ABCabCbb", "ABCabcBB", "ABCabcBb", "ABCabcbB", "ABCabcbb", "ABcABCBB", "ABcABCBb", "ABcABCbB", "ABcABCbb", "ABcABcBB", "ABcABcBb", "ABcABcbB", "ABcABcbb", "ABcAbCBB", "ABcAbCBb", "ABcAbCbB", "ABcAbCbb", "ABcAbcBB", "ABcAbcBb", "ABcAbcbB", "ABcAbcbb", "ABcaBCBB", "ABcaBCBb", "ABcaBCbB", "ABcaBCbb", "ABcaBcBB", "ABcaBcBb", "ABcaBcbB", "ABcaBcbb", "ABcabCBB", "ABcabCBb", "ABcabCbB", "ABcabCbb", "ABcabcBB", "ABcabcBb", "ABcabcbB", "ABcabcbb", "AbCABCBB", "AbCABCBb", "AbCABCbB", "AbCABCbb", "AbCABcBB", "AbCABcBb", "AbCABcbB", "AbCABcbb", "AbCAbCBB", "AbCAbCBb", "AbCAbCbB", "AbCAbCbb", "AbCAbcBB", "AbCAbcBb", "AbCAbcbB", "AbCAbcbb", "AbCaBCBB", "AbCaBCBb", "AbCaBCbB", "AbCaBCbb", "AbCaBcBB", "AbCaBcBb", "AbCaBcbB", "AbCaBcbb", "AbCabCBB", "AbCabCBb", "AbCabCbB", "AbCabCbb", "AbCabcBB", "AbCabcBb", "AbCabcbB", "AbCabcbb", "AbcABCBB", "AbcABCBb", "AbcABCbB", "AbcABCbb", "AbcABcBB", "AbcABcBb", "AbcABcbB", "AbcABcbb", "AbcAbCBB", "AbcAbCBb", "AbcAbCbB", "AbcAbCbb", "AbcAbcBB", "AbcAbcBb", "AbcAbcbB", "AbcAbcbb", "AbcaBCBB", "AbcaBCBb", "AbcaBCbB", "AbcaBCbb", "AbcaBcBB", "AbcaBcBb", "AbcaBcbB", "AbcaBcbb", "AbcabCBB", "AbcabCBb", "AbcabCbB", "AbcabCbb", "AbcabcBB", "AbcabcBb", "AbcabcbB", "Abcabcbb", "aBCABCBB", "aBCABCBb", "aBCABCbB", "aBCABCbb", "aBCABcBB", "aBCABcBb", "aBCABcbB", "aBCABcbb", "aBCAbCBB", "aBCAbCBb", "aBCAbCbB", "aBCAbCbb", "aBCAbcBB", "aBCAbcBb", "aBCAbcbB", "aBCAbcbb", "aBCaBCBB", "aBCaBCBb", "aBCaBCbB", "aBCaBCbb", "aBCaBcBB", "aBCaBcBb", "aBCaBcbB", "aBCaBcbb", "aBCabCBB", "aBCabCBb", "aBCabCbB", "aBCabCbb", "aBCabcBB", "aBCabcBb", "aBCabcbB", "aBCabcbb", "aBcABCBB", "aBcABCBb", "aBcABCbB", "aBcABCbb", "aBcABcBB", "aBcABcBb", "aBcABcbB", "aBcABcbb", "aBcAbCBB", "aBcAbCBb", "aBcAbCbB", "aBcAbCbb", "aBcAbcBB", "aBcAbcBb", "aBcAbcbB", "aBcAbcbb", "aBcaBCBB", "aBcaBCBb", "aBcaBCbB", "aBcaBCbb", "aBcaBcBB", "aBcaBcBb", "aBcaBcbB", "aBcaBcbb", "aBcabCBB", "aBcabCBb", "aBcabCbB", "aBcabCbb", "aBcabcBB", "aBcabcBb", "aBcabcbB", "aBcabcbb", "abCABCBB", "abCABCBb", "abCABCbB", "abCABCbb", "abCABcBB", "abCABcBb", "abCABcbB", "abCABcbb", "abCAbCBB", "abCAbCBb", "abCAbCbB", "abCAbCbb", "abCAbcBB", "abCAbcBb", "abCAbcbB", "abCAbcbb", "abCaBCBB", "abCaBCBb", "abCaBCbB", "abCaBCbb", "abCaBcBB", "abCaBcBb", "abCaBcbB", "abCaBcbb", "abCabCBB", "abCabCBb", "abCabCbB", "abCabCbb", "abCabcBB", "abCabcBb", "abCabcbB", "abCabcbb", "abcABCBB", "abcABCBb", "abcABCbB", "abcABCbb", "abcABcBB", "abcABcBb", "abcABcbB", "abcABcbb", "abcAbCBB", "abcAbCBb", "abcAbCbB", "abcAbCbb", "abcAbcBB", "abcAbcBb", "abcAbcbB", "abcAbcbb", "abcaBCBB", "abcaBCBb", "abcaBCbB", "abcaBCbb", "abcaBcBB", "abcaBcBb", "abcaBcbB", "abcaBcbb", "abcabCBB", "abcabCBb", "abcabCbB", "abcabCbb", "abcabcBB", "abcabcBb", "abcabcbB", "abcabcbb"]);
  });

  it("letterCasePermutation(\"bbbbb\")", () => {
    const result = letterCasePermutation("bbbbb");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["BBBBB", "BBBBb", "BBBbB", "BBBbb", "BBbBB", "BBbBb", "BBbbB", "BBbbb", "BbBBB", "BbBBb", "BbBbB", "BbBbb", "BbbBB", "BbbBb", "BbbbB", "Bbbbb", "bBBBB", "bBBBb", "bBBbB", "bBBbb", "bBbBB", "bBbBb", "bBbbB", "bBbbb", "bbBBB", "bbBBb", "bbBbB", "bbBbb", "bbbBB", "bbbBb", "bbbbB", "bbbbb"]);
  });

  it("letterCasePermutation(\"pwwkew\")", () => {
    const result = letterCasePermutation("pwwkew");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["PWWKEW", "PWWKEw", "PWWKeW", "PWWKew", "PWWkEW", "PWWkEw", "PWWkeW", "PWWkew", "PWwKEW", "PWwKEw", "PWwKeW", "PWwKew", "PWwkEW", "PWwkEw", "PWwkeW", "PWwkew", "PwWKEW", "PwWKEw", "PwWKeW", "PwWKew", "PwWkEW", "PwWkEw", "PwWkeW", "PwWkew", "PwwKEW", "PwwKEw", "PwwKeW", "PwwKew", "PwwkEW", "PwwkEw", "PwwkeW", "Pwwkew", "pWWKEW", "pWWKEw", "pWWKeW", "pWWKew", "pWWkEW", "pWWkEw", "pWWkeW", "pWWkew", "pWwKEW", "pWwKEw", "pWwKeW", "pWwKew", "pWwkEW", "pWwkEw", "pWwkeW", "pWwkew", "pwWKEW", "pwWKEw", "pwWKeW", "pwWKew", "pwWkEW", "pwWkEw", "pwWkeW", "pwWkew", "pwwKEW", "pwwKEw", "pwwKeW", "pwwKew", "pwwkEW", "pwwkEw", "pwwkeW", "pwwkew"]);
  });

  it("letterCasePermutation(\"\")", () => {
    const result = letterCasePermutation("");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([""]);
  });

  it("letterCasePermutation(\" \")", () => {
    const result = letterCasePermutation(" ");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual([" "]);
  });

  it("letterCasePermutation(\"a\")", () => {
    const result = letterCasePermutation("a");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["A", "a"]);
  });

  it("letterCasePermutation(\"aaaaaa\")", () => {
    const result = letterCasePermutation("aaaaaa");
    const sorted = [...result].sort((a,b) => { const as=JSON.stringify(a); const bs=JSON.stringify(b); return as<bs?-1:as>bs?1:0; });
    expect(sorted).toEqual(["AAAAAA", "AAAAAa", "AAAAaA", "AAAAaa", "AAAaAA", "AAAaAa", "AAAaaA", "AAAaaa", "AAaAAA", "AAaAAa", "AAaAaA", "AAaAaa", "AAaaAA", "AAaaAa", "AAaaaA", "AAaaaa", "AaAAAA", "AaAAAa", "AaAAaA", "AaAAaa", "AaAaAA", "AaAaAa", "AaAaaA", "AaAaaa", "AaaAAA", "AaaAAa", "AaaAaA", "AaaAaa", "AaaaAA", "AaaaAa", "AaaaaA", "Aaaaaa", "aAAAAA", "aAAAAa", "aAAAaA", "aAAAaa", "aAAaAA", "aAAaAa", "aAAaaA", "aAAaaa", "aAaAAA", "aAaAAa", "aAaAaA", "aAaAaa", "aAaaAA", "aAaaAa", "aAaaaA", "aAaaaa", "aaAAAA", "aaAAAa", "aaAAaA", "aaAAaa", "aaAaAA", "aaAaAa", "aaAaaA", "aaAaaa", "aaaAAA", "aaaAAa", "aaaAaA", "aaaAaa", "aaaaAA", "aaaaAa", "aaaaaA", "aaaaaa"]);
  });
});
