import { lengthLongestPath } from '../0388-longest-absolute-file-path.js';

describe('0388-longest-absolute-file-path', () => {
  it("lengthLongestPath(\"abcabcbb\")", () => {
    const result = lengthLongestPath("abcabcbb");
    expect(result).toEqual(0);
  });

  it("lengthLongestPath(\"bbbbb\")", () => {
    const result = lengthLongestPath("bbbbb");
    expect(result).toEqual(0);
  });

  it("lengthLongestPath(\"pwwkew\")", () => {
    const result = lengthLongestPath("pwwkew");
    expect(result).toEqual(0);
  });

  it("lengthLongestPath(\"\")", () => {
    const result = lengthLongestPath("");
    expect(result).toEqual(0);
  });

  it("lengthLongestPath(\" \")", () => {
    const result = lengthLongestPath(" ");
    expect(result).toEqual(0);
  });

  it("lengthLongestPath(\"a\")", () => {
    const result = lengthLongestPath("a");
    expect(result).toEqual(0);
  });

  it("lengthLongestPath(\"aaaaaa\")", () => {
    const result = lengthLongestPath("aaaaaa");
    expect(result).toEqual(0);
  });
});
