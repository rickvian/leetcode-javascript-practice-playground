import { encode } from '../0271-encode-and-decode-strings.js';

describe('0271-encode-and-decode-strings', () => {
  it("encode([1, 2, 3])", () => {
    const result = encode([1, 2, 3]);
    expect(result).toEqual("undefined:1undefined:2undefined:3");
  });

  it("encode([])", () => {
    const result = encode([]);
    expect(result).toEqual("");
  });

  it("encode([0])", () => {
    const result = encode([0]);
    expect(result).toEqual("undefined:0");
  });

  it("encode([-1, 0, 1])", () => {
    const result = encode([-1, 0, 1]);
    expect(result).toEqual("undefined:-1undefined:0undefined:1");
  });
});
