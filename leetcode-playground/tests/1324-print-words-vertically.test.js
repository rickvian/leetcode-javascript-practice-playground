import { printVertically } from '../1324-print-words-vertically.js';

describe('1324-print-words-vertically', () => {
  it("printVertically(\"abcabcbb\")", () => {
    const result = printVertically("abcabcbb");
    expect(result).toEqual(["a", "b", "c", "a", "b", "c", "b", "b"]);
  });

  it("printVertically(\"bbbbb\")", () => {
    const result = printVertically("bbbbb");
    expect(result).toEqual(["b", "b", "b", "b", "b"]);
  });

  it("printVertically(\"pwwkew\")", () => {
    const result = printVertically("pwwkew");
    expect(result).toEqual(["p", "w", "w", "k", "e", "w"]);
  });

  it("printVertically(\"\")", () => {
    const result = printVertically("");
    expect(result).toEqual([]);
  });

  it("printVertically(\" \")", () => {
    const result = printVertically(" ");
    expect(result).toEqual([]);
  });

  it("printVertically(\"a\")", () => {
    const result = printVertically("a");
    expect(result).toEqual(["a"]);
  });

  it("printVertically(\"aaaaaa\")", () => {
    const result = printVertically("aaaaaa");
    expect(result).toEqual(["a", "a", "a", "a", "a", "a"]);
  });
});
