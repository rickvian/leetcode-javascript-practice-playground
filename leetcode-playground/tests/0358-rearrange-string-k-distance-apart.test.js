import { rearrangeString } from '../0358-rearrange-string-k-distance-apart.js';

describe('0358-rearrange-string-k-distance-apart', () => {
  it("rearrangeString(\"abcdef\", 2)", () => {
    const result = rearrangeString("abcdef", 2);
    expect(result).toEqual("abcdef");
  });

  it("rearrangeString(\"\", 1)", () => {
    const result = rearrangeString("", 1);
    expect(result).toEqual("");
  });

  it("rearrangeString(\"a\", 1)", () => {
    const result = rearrangeString("a", 1);
    expect(result).toEqual("a");
  });

  it("rearrangeString(\"abba\", 3)", () => {
    const result = rearrangeString("abba", 3);
    expect(result).toEqual("");
  });

  it("rearrangeString(\"  hello  \", 2)", () => {
    const result = rearrangeString("  hello  ", 2);
    expect(result).toEqual("");
  });
});
