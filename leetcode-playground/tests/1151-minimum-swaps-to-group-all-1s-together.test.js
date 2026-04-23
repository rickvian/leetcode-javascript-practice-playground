import { minSwaps } from '../1151-minimum-swaps-to-group-all-1s-together.js';

describe('1151-minimum-swaps-to-group-all-1s-together', () => {
  it("minSwaps([])", () => {
    const result = minSwaps([]);
    expect(result).toEqual(0);
  });

  it("minSwaps([1])", () => {
    const result = minSwaps([1]);
    expect(result).toEqual(0);
  });

  it("minSwaps([1, 1])", () => {
    const result = minSwaps([1, 1]);
    expect(result).toEqual(0);
  });

  it("minSwaps([-1, 0, 1])", () => {
    const result = minSwaps([-1, 0, 1]);
    expect(result).toEqual(0);
  });
});
