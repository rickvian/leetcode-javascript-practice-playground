import { productExceptSelf } from '../0238-product-of-array-except-self.js';

describe('0238-product-of-array-except-self', () => {
  it("productExceptSelf([1, 2, 3, 4, 5])", () => {
    const result = productExceptSelf([1, 2, 3, 4, 5]);
    expect(result).toEqual([120, 60, 40, 30, 24]);
  });

  it("productExceptSelf([])", () => {
    const result = productExceptSelf([]);
    expect(result).toEqual([]);
  });

  it("productExceptSelf([1])", () => {
    const result = productExceptSelf([1]);
    expect(result).toEqual([1]);
  });

  it("productExceptSelf([1, 1])", () => {
    const result = productExceptSelf([1, 1]);
    expect(result).toEqual([1, 1]);
  });

  it("productExceptSelf([3, 1, 4, 1, 5])", () => {
    const result = productExceptSelf([3, 1, 4, 1, 5]);
    expect(result).toEqual([20, 60, 15, 60, 12]);
  });

  it("productExceptSelf([-1, 0, 1])", () => {
    const result = productExceptSelf([-1, 0, 1]);
    expect(result).toEqual([0, -1, 0]);
  });
});
