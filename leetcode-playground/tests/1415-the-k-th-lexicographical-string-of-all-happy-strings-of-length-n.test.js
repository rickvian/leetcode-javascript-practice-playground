import { getHappyString } from '../1415-the-k-th-lexicographical-string-of-all-happy-strings-of-length-n.js';

describe('1415-the-k-th-lexicographical-string-of-all-happy-strings-of-length-n', () => {
  it("getHappyString(1, 1)", () => {
    const result = getHappyString(1, 1);
    expect(result).toEqual("a");
  });

  it("getHappyString(0, 0)", () => {
    const result = getHappyString(0, 0);
    expect(result).toEqual("");
  });

  it("getHappyString(3, 7)", () => {
    const result = getHappyString(3, 7);
    expect(result).toEqual("bca");
  });

  it("getHappyString(100, 1000)", () => {
    const result = getHappyString(100, 1000);
    expect(result).toEqual("abababababababababababababababababababababababababababababababababababababababababababababcbcbcabcbc");
  });
});
