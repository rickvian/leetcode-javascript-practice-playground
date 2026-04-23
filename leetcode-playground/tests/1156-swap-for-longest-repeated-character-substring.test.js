import { maxRepOpt1 } from '../1156-swap-for-longest-repeated-character-substring.js';

describe('1156-swap-for-longest-repeated-character-substring', () => {
  it("maxRepOpt1(\"abcabcbb\")", () => {
    const result = maxRepOpt1("abcabcbb");
    expect(result).toEqual(4);
  });

  it("maxRepOpt1(\"bbbbb\")", () => {
    const result = maxRepOpt1("bbbbb");
    expect(result).toEqual(5);
  });

  it("maxRepOpt1(\"pwwkew\")", () => {
    const result = maxRepOpt1("pwwkew");
    expect(result).toEqual(3);
  });

  it("maxRepOpt1(\"\")", () => {
    const result = maxRepOpt1("");
    expect(result).toEqual(0);
  });

  it("maxRepOpt1(\" \")", () => {
    const result = maxRepOpt1(" ");
    expect(result).toEqual(1);
  });

  it("maxRepOpt1(\"a\")", () => {
    const result = maxRepOpt1("a");
    expect(result).toEqual(1);
  });

  it("maxRepOpt1(\"aaaaaa\")", () => {
    const result = maxRepOpt1("aaaaaa");
    expect(result).toEqual(6);
  });
});
