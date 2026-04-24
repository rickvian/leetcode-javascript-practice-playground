import { longestZigZag } from '../1372-longest-zigzag-path-in-a-binary-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1372-longest-zigzag-path-in-a-binary-tree', () => {
  it("longestZigZag([3, 9, 20, null, null, 15, 7])", () => {
    const result = longestZigZag(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(2);
  });

  it("longestZigZag([1])", () => {
    const result = longestZigZag(arrayToTree([1]));
    expect(result).toEqual(0);
  });

  it("longestZigZag([])", () => {
    const result = longestZigZag(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("longestZigZag([1, 2, 3, 4, 5])", () => {
    const result = longestZigZag(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(2);
  });

  it("longestZigZag([1, null, 2, 3])", () => {
    const result = longestZigZag(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(2);
  });

  it("longestZigZag([1, 2])", () => {
    const result = longestZigZag(arrayToTree([1, 2]));
    expect(result).toEqual(1);
  });
});
