import { getAllElements } from '../1305-all-elements-in-two-binary-search-trees.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('1305-all-elements-in-two-binary-search-trees', () => {
  it("getAllElements([1, 2, 3], [1, 2, 3])", () => {
    const result = getAllElements(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]));
    expect(result).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it("getAllElements([1], [1])", () => {
    const result = getAllElements(arrayToTree([1]), arrayToTree([1]));
    expect(result).toEqual([1, 1]);
  });

  it("getAllElements([], [])", () => {
    const result = getAllElements(arrayToTree([]), arrayToTree([]));
    expect(result).toEqual([]);
  });

  it("getAllElements([1, 2], [1, null, 2])", () => {
    const result = getAllElements(arrayToTree([1, 2]), arrayToTree([1, null, 2]));
    expect(result).toEqual([1, 1, 2, 2]);
  });
});
