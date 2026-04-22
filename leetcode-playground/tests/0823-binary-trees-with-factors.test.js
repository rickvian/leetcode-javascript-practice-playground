import { numFactoredBinaryTrees } from '../0823-binary-trees-with-factors.js';

describe('0823-binary-trees-with-factors', () => {
  it("numFactoredBinaryTrees([1, 2, 3, 4, 5])", () => {
    const result = numFactoredBinaryTrees([1, 2, 3, 4, 5]);
    expect(result).toEqual(13);
  });

  it("numFactoredBinaryTrees([])", () => {
    const result = numFactoredBinaryTrees([]);
    expect(result).toEqual(0);
  });

  it("numFactoredBinaryTrees([1])", () => {
    const result = numFactoredBinaryTrees([1]);
    expect(result).toEqual(1);
  });

  it("numFactoredBinaryTrees([1, 1])", () => {
    const result = numFactoredBinaryTrees([1, 1]);
    expect(result).toEqual(3);
  });

  it("numFactoredBinaryTrees([3, 1, 4, 1, 5])", () => {
    const result = numFactoredBinaryTrees([3, 1, 4, 1, 5]);
    expect(result).toEqual(30);
  });

  it("numFactoredBinaryTrees([-1, 0, 1])", () => {
    const result = numFactoredBinaryTrees([-1, 0, 1]);
    expect(result).toEqual(5);
  });
});
