import { preimageSizeFZF } from '../0793-preimage-size-of-factorial-zeroes-function.js';

describe('0793-preimage-size-of-factorial-zeroes-function', () => {
  it("preimageSizeFZF(121)", () => {
    const result = preimageSizeFZF(121);
    expect(result).toEqual(5);
  });

  it("preimageSizeFZF(-121)", () => {
    const result = preimageSizeFZF(-121);
    expect(result).toEqual(0);
  });

  it("preimageSizeFZF(10)", () => {
    const result = preimageSizeFZF(10);
    expect(result).toEqual(5);
  });

  it("preimageSizeFZF(0)", () => {
    const result = preimageSizeFZF(0);
    expect(result).toEqual(5);
  });

  it("preimageSizeFZF(-1)", () => {
    const result = preimageSizeFZF(-1);
    expect(result).toEqual(0);
  });

  it("preimageSizeFZF(1534236469)", () => {
    const result = preimageSizeFZF(1534236469);
    expect(result).toEqual(0);
  });
});
