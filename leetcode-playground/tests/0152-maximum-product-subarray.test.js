import { maxProduct } from '../0152-maximum-product-subarray.js';

describe('0152-maximum-product-subarray', () => {
  it("maxProduct([1, 2, 3, 4, 5])", () => {
    const result = maxProduct([1, 2, 3, 4, 5]);
    expect(result).toEqual(120);
  });

  it("maxProduct([1])", () => {
    const result = maxProduct([1]);
    expect(result).toEqual(1);
  });

  it("maxProduct([1, 1])", () => {
    const result = maxProduct([1, 1]);
    expect(result).toEqual(1);
  });

  it("maxProduct([3, 1, 4, 1, 5])", () => {
    const result = maxProduct([3, 1, 4, 1, 5]);
    expect(result).toEqual(60);
  });

  it("maxProduct([-1, 0, 1])", () => {
    const result = maxProduct([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
