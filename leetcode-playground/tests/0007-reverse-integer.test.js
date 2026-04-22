import { reverse } from '../0007-reverse-integer.js';

describe('0007-reverse-integer', () => {
  it("reverse(121)", () => {
    const result = reverse(121);
    expect(result).toEqual(121);
  });

  it("reverse(-121)", () => {
    const result = reverse(-121);
    expect(result).toEqual(-121);
  });

  it("reverse(10)", () => {
    const result = reverse(10);
    expect(result).toEqual(1);
  });

  it("reverse(0)", () => {
    const result = reverse(0);
    expect(result).toEqual(0);
  });

  it("reverse(-1)", () => {
    const result = reverse(-1);
    expect(result).toEqual(-1);
  });

  it("reverse(1534236469)", () => {
    const result = reverse(1534236469);
    expect(result).toEqual(0);
  });
});
