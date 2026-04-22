import { binaryGap } from '../0868-binary-gap.js';

describe('0868-binary-gap', () => {
  it("binaryGap(121)", () => {
    const result = binaryGap(121);
    expect(result).toEqual(3);
  });

  it("binaryGap(-121)", () => {
    const result = binaryGap(-121);
    expect(result).toEqual(3);
  });

  it("binaryGap(10)", () => {
    const result = binaryGap(10);
    expect(result).toEqual(2);
  });

  it("binaryGap(0)", () => {
    const result = binaryGap(0);
    expect(result).toEqual(0);
  });

  it("binaryGap(-1)", () => {
    const result = binaryGap(-1);
    expect(result).toEqual(0);
  });

  it("binaryGap(1534236469)", () => {
    const result = binaryGap(1534236469);
    expect(result).toEqual(3);
  });
});
