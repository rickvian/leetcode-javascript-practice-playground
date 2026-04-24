import { maxScore } from '../1422-maximum-score-after-splitting-a-string.js';

describe('1422-maximum-score-after-splitting-a-string', () => {
  it("maxScore(\"abcabcbb\")", () => {
    const result = maxScore("abcabcbb");
    expect(result).toEqual(0);
  });

  it("maxScore(\"bbbbb\")", () => {
    const result = maxScore("bbbbb");
    expect(result).toEqual(0);
  });

  it("maxScore(\"pwwkew\")", () => {
    const result = maxScore("pwwkew");
    expect(result).toEqual(0);
  });

  it("maxScore(\"\")", () => {
    const result = maxScore("");
    expect(result).toEqual(0);
  });

  it("maxScore(\" \")", () => {
    const result = maxScore(" ");
    expect(result).toEqual(0);
  });

  it("maxScore(\"a\")", () => {
    const result = maxScore("a");
    expect(result).toEqual(0);
  });

  it("maxScore(\"aaaaaa\")", () => {
    const result = maxScore("aaaaaa");
    expect(result).toEqual(0);
  });
});
