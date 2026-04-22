import { verifyPreorder } from '../0255-verify-preorder-sequence-in-binary-search-tree.js';

describe('0255-verify-preorder-sequence-in-binary-search-tree', () => {
  it("verifyPreorder([1, 2, 3, 4, 5])", () => {
    const result = verifyPreorder([1, 2, 3, 4, 5]);
    expect(result).toEqual(true);
  });

  it("verifyPreorder([])", () => {
    const result = verifyPreorder([]);
    expect(result).toEqual(true);
  });

  it("verifyPreorder([1])", () => {
    const result = verifyPreorder([1]);
    expect(result).toEqual(true);
  });

  it("verifyPreorder([1, 1])", () => {
    const result = verifyPreorder([1, 1]);
    expect(result).toEqual(true);
  });

  it("verifyPreorder([3, 1, 4, 1, 5])", () => {
    const result = verifyPreorder([3, 1, 4, 1, 5]);
    expect(result).toEqual(false);
  });

  it("verifyPreorder([-1, 0, 1])", () => {
    const result = verifyPreorder([-1, 0, 1]);
    expect(result).toEqual(true);
  });
});
