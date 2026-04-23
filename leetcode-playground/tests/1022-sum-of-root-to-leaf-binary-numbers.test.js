import { sumRootToLeaf } from '../1022-sum-of-root-to-leaf-binary-numbers.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1022-sum-of-root-to-leaf-binary-numbers', () => {
  it("sumRootToLeaf([1])", () => {
    const result = sumRootToLeaf(arrayToTree([1]));
    expect(result).toEqual(1);
  });

  it("sumRootToLeaf([])", () => {
    const result = sumRootToLeaf(arrayToTree([]));
    expect(result).toEqual(0);
  });

  it("sumRootToLeaf([1, 2, 3, 4, 5])", () => {
    const result = sumRootToLeaf(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(3);
  });

  it("sumRootToLeaf([1, null, 2, 3])", () => {
    const result = sumRootToLeaf(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(1);
  });

  it("sumRootToLeaf([1, 2])", () => {
    const result = sumRootToLeaf(arrayToTree([1, 2]));
    expect(result).toEqual(1);
  });
});
