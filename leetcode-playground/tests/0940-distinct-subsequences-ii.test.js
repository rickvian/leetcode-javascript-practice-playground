import { distinctSubseqII } from '../0940-distinct-subsequences-ii.js';

describe('0940-distinct-subsequences-ii', () => {
  it("distinctSubseqII(\"abcabcbb\")", () => {
    const result = distinctSubseqII("abcabcbb");
    expect(result).toEqual(125);
  });

  it("distinctSubseqII(\"bbbbb\")", () => {
    const result = distinctSubseqII("bbbbb");
    expect(result).toEqual(5);
  });

  it("distinctSubseqII(\"pwwkew\")", () => {
    const result = distinctSubseqII("pwwkew");
    expect(result).toEqual(43);
  });

  it("distinctSubseqII(\"\")", () => {
    const result = distinctSubseqII("");
    expect(result).toEqual(0);
  });

  it("distinctSubseqII(\"a\")", () => {
    const result = distinctSubseqII("a");
    expect(result).toEqual(1);
  });

  it("distinctSubseqII(\"aaaaaa\")", () => {
    const result = distinctSubseqII("aaaaaa");
    expect(result).toEqual(6);
  });
});
