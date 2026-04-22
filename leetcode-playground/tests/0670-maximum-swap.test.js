import { maximumSwap } from '../0670-maximum-swap.js';

describe('0670-maximum-swap', () => {
  it("maximumSwap(121)", () => {
    const result = maximumSwap(121);
    expect(result).toEqual(211);
  });

  it("maximumSwap(-121)", () => {
    const result = maximumSwap(-121);
    expect(result).toEqual(-211);
  });

  it("maximumSwap(10)", () => {
    const result = maximumSwap(10);
    expect(result).toEqual(10);
  });

  it("maximumSwap(0)", () => {
    const result = maximumSwap(0);
    expect(result).toEqual(0);
  });

  it("maximumSwap(-1)", () => {
    const result = maximumSwap(-1);
    expect(result).toEqual(-1);
  });

  it("maximumSwap(1534236469)", () => {
    const result = maximumSwap(1534236469);
    expect(result).toEqual(9534236461);
  });
});
