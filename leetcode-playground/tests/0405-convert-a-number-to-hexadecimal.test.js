import { toHex } from '../0405-convert-a-number-to-hexadecimal.js';

describe('0405-convert-a-number-to-hexadecimal', () => {
  it("toHex(121)", () => {
    const result = toHex(121);
    expect(result).toEqual("79");
  });

  it("toHex(-121)", () => {
    const result = toHex(-121);
    expect(result).toEqual("ffffff87");
  });

  it("toHex(10)", () => {
    const result = toHex(10);
    expect(result).toEqual("a");
  });

  it("toHex(0)", () => {
    const result = toHex(0);
    expect(result).toEqual("0");
  });

  it("toHex(-1)", () => {
    const result = toHex(-1);
    expect(result).toEqual("ffffffff");
  });

  it("toHex(1534236469)", () => {
    const result = toHex(1534236469);
    expect(result).toEqual("5b729735");
  });
});
