import { minFlipsMonoIncr } from '../0926-flip-string-to-monotone-increasing.js';

describe('0926-flip-string-to-monotone-increasing', () => {
  it("minFlipsMonoIncr(\"abcabcbb\")", () => {
    const result = minFlipsMonoIncr("abcabcbb");
    expect(result).toEqual(0);
  });

  it("minFlipsMonoIncr(\"bbbbb\")", () => {
    const result = minFlipsMonoIncr("bbbbb");
    expect(result).toEqual(0);
  });

  it("minFlipsMonoIncr(\"pwwkew\")", () => {
    const result = minFlipsMonoIncr("pwwkew");
    expect(result).toEqual(0);
  });

  it("minFlipsMonoIncr(\"\")", () => {
    const result = minFlipsMonoIncr("");
    expect(result).toEqual(0);
  });

  it("minFlipsMonoIncr(\" \")", () => {
    const result = minFlipsMonoIncr(" ");
    expect(result).toEqual(0);
  });

  it("minFlipsMonoIncr(\"a\")", () => {
    const result = minFlipsMonoIncr("a");
    expect(result).toEqual(0);
  });

  it("minFlipsMonoIncr(\"aaaaaa\")", () => {
    const result = minFlipsMonoIncr("aaaaaa");
    expect(result).toEqual(0);
  });
});
