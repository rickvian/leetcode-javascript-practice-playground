import { encode } from '../1256-encode-number.js';

describe('1256-encode-number', () => {
  it("encode(121)", () => {
    const result = encode(121);
    expect(result).toEqual("111010");
  });

  it("encode(-121)", () => {
    const result = encode(-121);
    expect(result).toEqual("1111000");
  });

  it("encode(10)", () => {
    const result = encode(10);
    expect(result).toEqual("011");
  });

  it("encode(0)", () => {
    const result = encode(0);
    expect(result).toEqual("");
  });

  it("encode(-1)", () => {
    const result = encode(-1);
    expect(result).toEqual("");
  });

  it("encode(1534236469)", () => {
    const result = encode(1534236469);
    expect(result).toEqual("011011011100101001011100110110");
  });
});
