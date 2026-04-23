import { maxProduct } from '../1339-maximum-product-of-splitted-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1339-maximum-product-of-splitted-binary-tree', () => {
  it("maxProduct([3, 9, 20, null, null, 15, 7])", () => {
    const result = maxProduct(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(585);
  });

  it("maxProduct([1])", () => {
    const result = maxProduct(arrayToTree([1]));
    expect(result).toEqual(0);
  });

  it("maxProduct([])", () => {
    const result = maxProduct(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("maxProduct([1, 2, 3, 4, 5])", () => {
    const result = maxProduct(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(50);
  });

  it("maxProduct([1, null, 2, 3])", () => {
    const result = maxProduct(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(9);
  });

  it("maxProduct([1, 2])", () => {
    const result = maxProduct(arrayToTree([1, 2]));
    expect(result).toEqual(2);
  });
});
