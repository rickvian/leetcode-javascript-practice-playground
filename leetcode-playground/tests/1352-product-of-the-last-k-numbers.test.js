import { ProductOfNumbers } from '../1352-product-of-the-last-k-numbers.js';

describe('1352-product-of-the-last-k-numbers', () => {
  it("sequence 1", () => {
    const obj = new ProductOfNumbers();
    obj.add(1);
    expect(obj.getProduct(1)).toEqual(1);
  });
});
