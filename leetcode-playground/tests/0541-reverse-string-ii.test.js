import { reverseStr } from '../0541-reverse-string-ii.js';

describe('0541-reverse-string-ii', () => {
  it("reverseStr(\"abcdefg\", 2)", () => {
    const result = reverseStr("abcdefg", 2);
    expect(result).toEqual("bacdfeg");
  });

  it("reverseStr(\"abcd\", 2)", () => {
    const result = reverseStr("abcd", 2);
    expect(result).toEqual("bacd");
  });

  it("reverseStr(\"\", 1)", () => {
    const result = reverseStr("", 1);
    expect(result).toEqual("");
  });

  it("reverseStr(\"a\", 1)", () => {
    const result = reverseStr("a", 1);
    expect(result).toEqual("a");
  });

  it("reverseStr(\"abcde\", 3)", () => {
    const result = reverseStr("abcde", 3);
    expect(result).toEqual("cbade");
  });

  it("reverseStr(\"abcdefghij\", 5)", () => {
    const result = reverseStr("abcdefghij", 5);
    expect(result).toEqual("edcbafghij");
  });
});
