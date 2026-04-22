import { reverseBits } from '../0190-reverse-bits.js';

describe('0190-reverse-bits', () => {
  it("reverseBits(121)", () => {
    const result = reverseBits(121);
    expect(result).toEqual(2650800128);
  });

  it("reverseBits(-121)", () => {
    const result = reverseBits(-121);
    expect(result).toEqual(79);
  });

  it("reverseBits(10)", () => {
    const result = reverseBits(10);
    expect(result).toEqual(1342177280);
  });

  it("reverseBits(0)", () => {
    const result = reverseBits(0);
    expect(result).toEqual(0);
  });

  it("reverseBits(-1)", () => {
    const result = reverseBits(-1);
    expect(result).toEqual(1);
  });

  it("reverseBits(1534236469)", () => {
    const result = reverseBits(1534236469);
    expect(result).toEqual(2900971226);
  });
});
