import { encode } from '../0535-encode-and-decode-tinyurl.js';

describe('0535-encode-and-decode-tinyurl', () => {
  it("encode(\"ADOBECODEBANC\", \"ABC\")", () => {
    const result = encode("ADOBECODEBANC", "ABC");
    expect(result).toEqual("https://tinyurl.com/1");
  });

  it("encode(\"a\", \"a\")", () => {
    const result = encode("a", "a");
    expect(result).toEqual("https://tinyurl.com/2");
  });

  it("encode(\"a\", \"aa\")", () => {
    const result = encode("a", "aa");
    expect(result).toEqual("https://tinyurl.com/3");
  });

  it("encode(\"\", \"A\")", () => {
    const result = encode("", "A");
    expect(result).toEqual("https://tinyurl.com/4");
  });
});
