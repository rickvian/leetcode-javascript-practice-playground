import { diStringMatch } from '../0942-di-string-match.js';

describe('0942-di-string-match', () => {
  it("diStringMatch(\"abcabcbb\")", () => {
    const result = diStringMatch("abcabcbb");
    expect(result).toEqual([8, 7, 6, 5, 4, 3, 2, 1, 0]);
  });

  it("diStringMatch(\"bbbbb\")", () => {
    const result = diStringMatch("bbbbb");
    expect(result).toEqual([5, 4, 3, 2, 1, 0]);
  });

  it("diStringMatch(\"pwwkew\")", () => {
    const result = diStringMatch("pwwkew");
    expect(result).toEqual([6, 5, 4, 3, 2, 1, 0]);
  });

  it("diStringMatch(\"\")", () => {
    const result = diStringMatch("");
    expect(result).toEqual([0]);
  });

  it("diStringMatch(\" \")", () => {
    const result = diStringMatch(" ");
    expect(result).toEqual([1, 0]);
  });

  it("diStringMatch(\"a\")", () => {
    const result = diStringMatch("a");
    expect(result).toEqual([1, 0]);
  });

  it("diStringMatch(\"aaaaaa\")", () => {
    const result = diStringMatch("aaaaaa");
    expect(result).toEqual([6, 5, 4, 3, 2, 1, 0]);
  });
});
