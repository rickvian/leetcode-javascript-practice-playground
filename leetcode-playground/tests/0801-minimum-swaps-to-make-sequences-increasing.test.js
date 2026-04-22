import { minSwap } from '../0801-minimum-swaps-to-make-sequences-increasing.js';

describe('0801-minimum-swaps-to-make-sequences-increasing', () => {
  it("minSwap([1, 2, 3], [4, 5, 6])", () => {
    const result = minSwap([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual(0);
  });

  it("minSwap([1], [1])", () => {
    const result = minSwap([1], [1]);
    expect(result).toEqual(0);
  });

  it("minSwap([1, 2], [3, 4])", () => {
    const result = minSwap([1, 2], [3, 4]);
    expect(result).toEqual(0);
  });
});
