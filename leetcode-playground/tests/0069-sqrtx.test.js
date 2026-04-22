import { mySqrt } from '../0069-sqrtx.js';

describe('0069-sqrtx', () => {
  it("mySqrt(121)", () => {
    const result = mySqrt(121);
    expect(result).toEqual(11);
  });

  it("mySqrt(-121)", () => {
    const result = mySqrt(-121);
    expect(result).toEqual(0);
  });

  it("mySqrt(10)", () => {
    const result = mySqrt(10);
    expect(result).toEqual(3);
  });

  it("mySqrt(0)", () => {
    const result = mySqrt(0);
    expect(result).toEqual(0);
  });

  it("mySqrt(-1)", () => {
    const result = mySqrt(-1);
    expect(result).toEqual(0);
  });

  it("mySqrt(1534236469)", () => {
    const result = mySqrt(1534236469);
    expect(result).toEqual(39169);
  });
});
