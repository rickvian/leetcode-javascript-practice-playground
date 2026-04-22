import { isPowerOfTwo } from '../0231-power-of-two.js';

describe('0231-power-of-two', () => {
  it("isPowerOfTwo(121)", () => {
    const result = isPowerOfTwo(121);
    expect(result).toEqual(false);
  });

  it("isPowerOfTwo(-121)", () => {
    const result = isPowerOfTwo(-121);
    expect(result).toEqual(false);
  });

  it("isPowerOfTwo(10)", () => {
    const result = isPowerOfTwo(10);
    expect(result).toEqual(false);
  });

  it("isPowerOfTwo(0)", () => {
    const result = isPowerOfTwo(0);
    expect(result).toEqual(false);
  });

  it("isPowerOfTwo(-1)", () => {
    const result = isPowerOfTwo(-1);
    expect(result).toEqual(false);
  });

  it("isPowerOfTwo(1534236469)", () => {
    const result = isPowerOfTwo(1534236469);
    expect(result).toEqual(false);
  });
});
