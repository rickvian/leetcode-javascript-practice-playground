import { braceExpansionII } from '../1096-brace-expansion-ii.js';

describe('1096-brace-expansion-ii', () => {
  it("braceExpansionII(\"abcabcbb\")", () => {
    const result = braceExpansionII("abcabcbb");
    expect(result).toEqual(["abcabcbb"]);
  });

  it("braceExpansionII(\"bbbbb\")", () => {
    const result = braceExpansionII("bbbbb");
    expect(result).toEqual(["bbbbb"]);
  });

  it("braceExpansionII(\"pwwkew\")", () => {
    const result = braceExpansionII("pwwkew");
    expect(result).toEqual(["pwwkew"]);
  });

  it("braceExpansionII(\"\")", () => {
    const result = braceExpansionII("");
    expect(result).toEqual([""]);
  });

  it("braceExpansionII(\" \")", () => {
    const result = braceExpansionII(" ");
    expect(result).toEqual([" "]);
  });

  it("braceExpansionII(\"a\")", () => {
    const result = braceExpansionII("a");
    expect(result).toEqual(["a"]);
  });

  it("braceExpansionII(\"aaaaaa\")", () => {
    const result = braceExpansionII("aaaaaa");
    expect(result).toEqual(["aaaaaa"]);
  });
});
