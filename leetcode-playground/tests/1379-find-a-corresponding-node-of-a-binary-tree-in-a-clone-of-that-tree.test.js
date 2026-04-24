import { getTargetCopy } from '../1379-find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1379-find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree', () => {
  it("getTargetCopy([1, 2, 3], [1, 2, 3])", () => {
    const result = getTargetCopy(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("getTargetCopy([1], [1])", () => {
    const result = getTargetCopy(arrayToTree([1]), arrayToTree([1]));
    expect(treeToArray(result)).toEqual([]);
  });

  it("getTargetCopy([], [])", () => {
    const result = getTargetCopy(arrayToTree([]), arrayToTree([]));
    expect(treeToArray(result)).toEqual([]);
  });
});
