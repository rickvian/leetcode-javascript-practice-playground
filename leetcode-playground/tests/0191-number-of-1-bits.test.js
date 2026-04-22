import { hammingWeight } from '../0191-number-of-1-bits.js';

describe('0191-number-of-1-bits', () => {
  it("hammingWeight(121)", () => {
    const result = hammingWeight(121);
    expect(result).toEqual(5);
  });

  it("hammingWeight(-121)", () => {
    const result = hammingWeight(-121);
    expect(result).toEqual(5);
  });

  it("hammingWeight(10)", () => {
    const result = hammingWeight(10);
    expect(result).toEqual(2);
  });

  it("hammingWeight(0)", () => {
    const result = hammingWeight(0);
    expect(result).toEqual(0);
  });

  it("hammingWeight(-1)", () => {
    const result = hammingWeight(-1);
    expect(result).toEqual(1);
  });

  it("hammingWeight(1534236469)", () => {
    const result = hammingWeight(1534236469);
    expect(result).toEqual(18);
  });
});
