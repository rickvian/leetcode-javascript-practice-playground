import { removeKdigits } from '../0402-remove-k-digits.js';

describe('0402-remove-k-digits', () => {
  it("removeKdigits(\"abcdef\", 2)", () => {
    const result = removeKdigits("abcdef", 2);
    expect(result).toEqual("abcd");
  });

  it("removeKdigits(\"\", 1)", () => {
    const result = removeKdigits("", 1);
    expect(result).toEqual("0");
  });

  it("removeKdigits(\"a\", 1)", () => {
    const result = removeKdigits("a", 1);
    expect(result).toEqual("0");
  });

  it("removeKdigits(\"abba\", 3)", () => {
    const result = removeKdigits("abba", 3);
    expect(result).toEqual("a");
  });

  it("removeKdigits(\"  hello  \", 2)", () => {
    const result = removeKdigits("  hello  ", 2);
    expect(result).toEqual("  ell  ");
  });
});
