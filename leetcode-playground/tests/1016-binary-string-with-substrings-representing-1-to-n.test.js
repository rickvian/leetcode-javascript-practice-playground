import { queryString } from '../1016-binary-string-with-substrings-representing-1-to-n.js';

describe('1016-binary-string-with-substrings-representing-1-to-n', () => {
  it("queryString(\"abcdef\", 2)", () => {
    const result = queryString("abcdef", 2);
    expect(result).toEqual(false);
  });

  it("queryString(\"\", 1)", () => {
    const result = queryString("", 1);
    expect(result).toEqual(false);
  });

  it("queryString(\"a\", 1)", () => {
    const result = queryString("a", 1);
    expect(result).toEqual(false);
  });

  it("queryString(\"abba\", 3)", () => {
    const result = queryString("abba", 3);
    expect(result).toEqual(false);
  });

  it("queryString(\"  hello  \", 2)", () => {
    const result = queryString("  hello  ", 2);
    expect(result).toEqual(false);
  });
});
