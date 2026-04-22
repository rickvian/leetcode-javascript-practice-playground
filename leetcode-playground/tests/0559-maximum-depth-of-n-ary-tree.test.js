import { maxDepth } from '../0559-maximum-depth-of-n-ary-tree.js';

describe('0559-maximum-depth-of-n-ary-tree', () => {
  it("maxDepth([1, 2, 3])", () => {
    const result = maxDepth([1, 2, 3]);
    expect(result).toEqual(1);
  });

  it("maxDepth([])", () => {
    const result = maxDepth([]);
    expect(result).toEqual(1);
  });

  it("maxDepth([0])", () => {
    const result = maxDepth([0]);
    expect(result).toEqual(1);
  });

  it("maxDepth([-1, 0, 1])", () => {
    const result = maxDepth([-1, 0, 1]);
    expect(result).toEqual(1);
  });
});
