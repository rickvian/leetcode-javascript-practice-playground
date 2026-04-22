import { maximumProduct } from '../0628-maximum-product-of-three-numbers.js';

describe('0628-maximum-product-of-three-numbers', () => {
  it("maximumProduct([1, 2, 3, 4, 5])", () => {
    const result = maximumProduct([1, 2, 3, 4, 5]);
    expect(result).toEqual(60);
  });

  it("maximumProduct([3, 1, 4, 1, 5])", () => {
    const result = maximumProduct([3, 1, 4, 1, 5]);
    expect(result).toEqual(60);
  });
});
