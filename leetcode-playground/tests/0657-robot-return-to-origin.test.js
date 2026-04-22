import { judgeCircle } from '../0657-robot-return-to-origin.js';

describe('0657-robot-return-to-origin', () => {
  it("judgeCircle(\"abcabcbb\")", () => {
    const result = judgeCircle("abcabcbb");
    expect(result).toEqual(true);
  });

  it("judgeCircle(\"bbbbb\")", () => {
    const result = judgeCircle("bbbbb");
    expect(result).toEqual(true);
  });

  it("judgeCircle(\"pwwkew\")", () => {
    const result = judgeCircle("pwwkew");
    expect(result).toEqual(true);
  });

  it("judgeCircle(\"\")", () => {
    const result = judgeCircle("");
    expect(result).toEqual(true);
  });

  it("judgeCircle(\" \")", () => {
    const result = judgeCircle(" ");
    expect(result).toEqual(true);
  });

  it("judgeCircle(\"a\")", () => {
    const result = judgeCircle("a");
    expect(result).toEqual(true);
  });

  it("judgeCircle(\"aaaaaa\")", () => {
    const result = judgeCircle("aaaaaa");
    expect(result).toEqual(true);
  });
});
