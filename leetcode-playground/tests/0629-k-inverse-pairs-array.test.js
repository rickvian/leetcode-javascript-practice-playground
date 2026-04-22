import { kInversePairs } from '../0629-k-inverse-pairs-array.js';

describe('0629-k-inverse-pairs-array', () => {
  it("kInversePairs(1, 1)", () => {
    const result = kInversePairs(1, 1);
    expect(result).toEqual(0);
  });

  it("kInversePairs(0, 0)", () => {
    const result = kInversePairs(0, 0);
    expect(result).toEqual(1);
  });

  it("kInversePairs(3, 7)", () => {
    const result = kInversePairs(3, 7);
    expect(result).toEqual(0);
  });

  it("kInversePairs(100, 1000)", () => {
    const result = kInversePairs(100, 1000);
    expect(result).toEqual(589091451);
  });
});
