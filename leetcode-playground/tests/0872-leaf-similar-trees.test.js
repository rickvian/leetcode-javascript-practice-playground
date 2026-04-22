import { leafSimilar } from '../0872-leaf-similar-trees.js';
import { arrayToTree, treeToArray } from './__helpers__/test_helpers.js';

describe('0872-leaf-similar-trees', () => {
  it("leafSimilar([1, 2, 3], [1, 2, 3])", () => {
    const result = leafSimilar(arrayToTree([1, 2, 3]), arrayToTree([1, 2, 3]));
    expect(result).toEqual(true);
  });

  it("leafSimilar([1], [1])", () => {
    const result = leafSimilar(arrayToTree([1]), arrayToTree([1]));
    expect(result).toEqual(true);
  });

  it("leafSimilar([1, 2], [1, null, 2])", () => {
    const result = leafSimilar(arrayToTree([1, 2]), arrayToTree([1, null, 2]));
    expect(result).toEqual(true);
  });
});
