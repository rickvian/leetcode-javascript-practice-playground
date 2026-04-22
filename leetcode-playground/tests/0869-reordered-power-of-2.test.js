import { reorderedPowerOf2 } from '../0869-reordered-power-of-2.js';

describe('0869-reordered-power-of-2', () => {
  it("reorderedPowerOf2(121)", () => {
    const result = reorderedPowerOf2(121);
    expect(result).toEqual(false);
  });

  it("reorderedPowerOf2(-121)", () => {
    const result = reorderedPowerOf2(-121);
    expect(result).toEqual(false);
  });

  it("reorderedPowerOf2(10)", () => {
    const result = reorderedPowerOf2(10);
    expect(result).toEqual(false);
  });

  it("reorderedPowerOf2(0)", () => {
    const result = reorderedPowerOf2(0);
    expect(result).toEqual(false);
  });

  it("reorderedPowerOf2(-1)", () => {
    const result = reorderedPowerOf2(-1);
    expect(result).toEqual(false);
  });

  it("reorderedPowerOf2(1534236469)", () => {
    const result = reorderedPowerOf2(1534236469);
    expect(result).toEqual(false);
  });
});
