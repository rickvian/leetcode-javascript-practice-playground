import { smallestFromLeaf } from '../0988-smallest-string-starting-from-leaf.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0988-smallest-string-starting-from-leaf', () => {
  it("smallestFromLeaf([3, 9, 20, null, null, 15, 7])", () => {
    const result = smallestFromLeaf(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual("hud");
  });

  it("smallestFromLeaf([1])", () => {
    const result = smallestFromLeaf(arrayToTree([1]));
    expect(result).toEqual("b");
  });

  it("smallestFromLeaf([])", () => {
    const result = smallestFromLeaf(arrayToTree([]));
    expect(result).toEqual("");
  });

  it("smallestFromLeaf([1, 2, 3, 4, 5])", () => {
    const result = smallestFromLeaf(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual("db");
  });

  it("smallestFromLeaf([1, null, 2, 3])", () => {
    const result = smallestFromLeaf(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual("dcb");
  });

  it("smallestFromLeaf([1, 2])", () => {
    const result = smallestFromLeaf(arrayToTree([1, 2]));
    expect(result).toEqual("cb");
  });
});
