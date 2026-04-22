import { convert } from '../0006-zigzag-conversion.js';

describe('0006-zigzag-conversion', () => {
  it("convert(\"abcdef\", 2)", () => {
    const result = convert("abcdef", 2);
    expect(result).toEqual("acebdf");
  });

  it("convert(\"\", 1)", () => {
    const result = convert("", 1);
    expect(result).toEqual("");
  });

  it("convert(\"a\", 1)", () => {
    const result = convert("a", 1);
    expect(result).toEqual("a");
  });

  it("convert(\"abba\", 3)", () => {
    const result = convert("abba", 3);
    expect(result).toEqual("abab");
  });

  it("convert(\"  hello  \", 2)", () => {
    const result = convert("  hello  ", 2);
    expect(result).toEqual(" hlo  el ");
  });
});
