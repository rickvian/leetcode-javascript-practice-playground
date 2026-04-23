import { baseNeg2 } from '../1017-convert-to-base-2.js';

describe('1017-convert-to-base-2', () => {
  it("baseNeg2(121)", () => {
    const result = baseNeg2(121);
    expect(result).toEqual("110001001");
  });

  it("baseNeg2(-121)", () => {
    const result = baseNeg2(-121);
    expect(result).toEqual("10011011");
  });

  it("baseNeg2(10)", () => {
    const result = baseNeg2(10);
    expect(result).toEqual("11110");
  });

  it("baseNeg2(0)", () => {
    const result = baseNeg2(0);
    expect(result).toEqual("0");
  });

  it("baseNeg2(-1)", () => {
    const result = baseNeg2(-1);
    expect(result).toEqual("11");
  });

  it("baseNeg2(1534236469)", () => {
    const result = baseNeg2(1534236469);
    expect(result).toEqual("110101100101101111110101101110101");
  });
});
