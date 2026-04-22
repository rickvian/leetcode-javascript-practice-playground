import { decodeAtIndex } from '../0880-decoded-string-at-index.js';

describe('0880-decoded-string-at-index', () => {
  it("decodeAtIndex(\"abcdef\", 2)", () => {
    const result = decodeAtIndex("abcdef", 2);
    expect(result).toEqual("b");
  });

  it("decodeAtIndex(\"a\", 1)", () => {
    const result = decodeAtIndex("a", 1);
    expect(result).toEqual("a");
  });

  it("decodeAtIndex(\"abba\", 3)", () => {
    const result = decodeAtIndex("abba", 3);
    expect(result).toEqual("b");
  });
});
