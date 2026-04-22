import { isUgly } from '../0263-ugly-number.js';

describe('0263-ugly-number', () => {
  it("isUgly(121)", () => {
    const result = isUgly(121);
    expect(result).toEqual(false);
  });

  it("isUgly(-121)", () => {
    const result = isUgly(-121);
    expect(result).toEqual(false);
  });

  it("isUgly(10)", () => {
    const result = isUgly(10);
    expect(result).toEqual(true);
  });

  it("isUgly(0)", () => {
    const result = isUgly(0);
    expect(result).toEqual(false);
  });

  it("isUgly(-1)", () => {
    const result = isUgly(-1);
    expect(result).toEqual(false);
  });

  it("isUgly(1534236469)", () => {
    const result = isUgly(1534236469);
    expect(result).toEqual(false);
  });
});
