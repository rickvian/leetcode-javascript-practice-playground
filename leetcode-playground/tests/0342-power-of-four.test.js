import { isPowerOfFour } from '../0342-power-of-four.js';

describe('0342-power-of-four', () => {
  it("isPowerOfFour(121)", () => {
    const result = isPowerOfFour(121);
    expect(result).toEqual(false);
  });

  it("isPowerOfFour(-121)", () => {
    const result = isPowerOfFour(-121);
    expect(result).toEqual(false);
  });

  it("isPowerOfFour(10)", () => {
    const result = isPowerOfFour(10);
    expect(result).toEqual(false);
  });

  it("isPowerOfFour(0)", () => {
    const result = isPowerOfFour(0);
    expect(result).toEqual(false);
  });

  it("isPowerOfFour(-1)", () => {
    const result = isPowerOfFour(-1);
    expect(result).toEqual(false);
  });

  it("isPowerOfFour(1534236469)", () => {
    const result = isPowerOfFour(1534236469);
    expect(result).toEqual(false);
  });
});
