import { simplifyPath } from '../0071-simplify-path.js';

describe('0071-simplify-path', () => {
  it("simplifyPath(\"abcabcbb\")", () => {
    const result = simplifyPath("abcabcbb");
    expect(result).toEqual("/abcabcbb");
  });

  it("simplifyPath(\"bbbbb\")", () => {
    const result = simplifyPath("bbbbb");
    expect(result).toEqual("/bbbbb");
  });

  it("simplifyPath(\"pwwkew\")", () => {
    const result = simplifyPath("pwwkew");
    expect(result).toEqual("/pwwkew");
  });

  it("simplifyPath(\"\")", () => {
    const result = simplifyPath("");
    expect(result).toEqual("/");
  });

  it("simplifyPath(\" \")", () => {
    const result = simplifyPath(" ");
    expect(result).toEqual("/ ");
  });

  it("simplifyPath(\"a\")", () => {
    const result = simplifyPath("a");
    expect(result).toEqual("/a");
  });

  it("simplifyPath(\"aaaaaa\")", () => {
    const result = simplifyPath("aaaaaa");
    expect(result).toEqual("/aaaaaa");
  });
});
