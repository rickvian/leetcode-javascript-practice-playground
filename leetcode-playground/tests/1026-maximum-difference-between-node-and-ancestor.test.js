import { maxAncestorDiff } from '../1026-maximum-difference-between-node-and-ancestor.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1026-maximum-difference-between-node-and-ancestor', () => {
  it("maxAncestorDiff([3, 9, 20, null, null, 15, 7])", () => {
    const result = maxAncestorDiff(arrayToTree([3, 9, 20, null, null, 15, 7]));
    expect(result).toEqual(17);
  });

  it("maxAncestorDiff([1])", () => {
    const result = maxAncestorDiff(arrayToTree([1]));
    expect(result).toEqual(0);
  });

  it("maxAncestorDiff([1, 2, 3, 4, 5])", () => {
    const result = maxAncestorDiff(arrayToTree([1, 2, 3, 4, 5]));
    expect(result).toEqual(4);
  });

  it("maxAncestorDiff([1, null, 2, 3])", () => {
    const result = maxAncestorDiff(arrayToTree([1, null, 2, 3]));
    expect(result).toEqual(2);
  });

  it("maxAncestorDiff([1, 2])", () => {
    const result = maxAncestorDiff(arrayToTree([1, 2]));
    expect(result).toEqual(1);
  });
});
