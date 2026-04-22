import { isPowerOfThree } from '../0326-power-of-three.js';

describe('0326-power-of-three', () => {
  it("isPowerOfThree(121)", () => {
    const result = isPowerOfThree(121);
    expect(result).toEqual(false);
  });

  it("isPowerOfThree(-121)", () => {
    const result = isPowerOfThree(-121);
    expect(result).toEqual(false);
  });

  it("isPowerOfThree(10)", () => {
    const result = isPowerOfThree(10);
    expect(result).toEqual(false);
  });

  it("isPowerOfThree(0)", () => {
    const result = isPowerOfThree(0);
    expect(result).toEqual(false);
  });

  it("isPowerOfThree(-1)", () => {
    const result = isPowerOfThree(-1);
    expect(result).toEqual(false);
  });

  it("isPowerOfThree(1534236469)", () => {
    const result = isPowerOfThree(1534236469);
    expect(result).toEqual(false);
  });
});
